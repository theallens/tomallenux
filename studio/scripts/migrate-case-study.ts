/**
 * One-off: converts a hand-written case study page into a Sanity document,
 * uploading its images. Throws on anything it doesn't recognise rather than dropping it.
 *
 *   cd studio && npx sanity exec scripts/migrate-case-study.ts --with-user-token -- <slug>
 */
import { randomUUID } from "node:crypto";
import { createReadStream, readFileSync } from "node:fs";
import { basename } from "node:path";
import { parse } from "@vue/compiler-sfc";
import { getCliClient } from "sanity/cli";

type Node = {
  type: number;
  tag?: string;
  content?: string;
  children?: Node[];
  props?: {
    type: number;
    name: string;
    value?: { content: string };
    arg?: { content: string };
    exp?: { content: string };
  }[];
};
type Mark = { text: string; marks: string[] };

const ELEMENT = 1;
const TEXT = 2;
const COMMENT = 3;

const client = getCliClient({ apiVersion: "2025-02-19" });
const slug = process.argv[process.argv.length - 1];
const source = readFileSync(`../src/pages/work/${slug}.vue`, "utf8");
const { descriptor } = parse(source);
const script = descriptor.scriptSetup?.content ?? "";
const key = () => randomUUID().replaceAll("-", "").slice(0, 12);

/** Evaluates a prop expression from this repo's own page, with the page's string constants in scope. */
function evaluate(expression: string) {
  const constants = [...script.matchAll(/^const (\w+) = ("[^\n]*");$/gm)];
  const names = constants.map((match) => match[1]);
  const values = constants.map((match) => JSON.parse(match[2]));
  return new Function(...names, `return (${expression});`)(...values);
}

function attr(node: Node, name: string) {
  for (const prop of node.props ?? []) {
    if (prop.type === 6 && prop.name === name) return prop.value?.content ?? true;
    if (prop.type === 7 && prop.name === "bind" && prop.arg?.content === name) {
      return evaluate(prop.exp!.content);
    }
  }
  return undefined;
}

const classes = (node: Node) => String(attr(node, "class") ?? "").split(/\s+/);
const significant = (nodes: Node[] = []) =>
  nodes.filter((n) => n.type !== COMMENT && !(n.type === TEXT && !n.content?.trim()));

const uploads = new Map<string, string>();
async function imageField(src: string) {
  if (!uploads.has(src)) {
    const asset = await client.assets.upload("image", createReadStream(`../public${src}`), {
      filename: basename(src),
    });
    uploads.set(src, asset._id);
    console.log(`  uploaded ${src}`);
  }
  return { _type: "image", asset: { _type: "reference", _ref: uploads.get(src) } };
}

function inline(nodes: Node[] = [], marks: string[] = [], markDefs: object[] = []): Mark[] {
  return nodes.flatMap((node): Mark[] => {
    if (node.type === COMMENT) return [];
    if (node.type === TEXT) return [{ text: node.content!.replace(/\s+/g, " "), marks }];
    if (node.type !== ELEMENT) throw new Error(`Unsupported inline node type ${node.type}`);
    switch (node.tag) {
      case "br":
        return [{ text: "\n", marks }];
      case "strong":
      case "em":
        return inline(node.children, [...marks, node.tag], markDefs);
      case "span":
        if (classes(node).includes("highlight")) {
          return inline(node.children, [...marks, "highlight"], markDefs);
        }
        throw new Error(`Unsupported span: ${classes(node).join(" ")}`);
      case "a": {
        const _key = key();
        const newWindow = attr(node, "target") === "_blank";
        markDefs.push({
          _key,
          _type: "link",
          href: attr(node, "href"),
          ...(newWindow && { newWindow }),
        });
        return inline(node.children, [...marks, _key], markDefs);
      }
      default:
        throw new Error(`Unsupported inline element <${node.tag}>`);
    }
  });
}

function textBlock(nodes: Node[], style: string, list?: string) {
  const markDefs: object[] = [];
  const spans = inline(nodes, [], markDefs).reduce<Mark[]>((merged, span) => {
    const last = merged[merged.length - 1];
    if (last && last.marks.join() === span.marks.join()) last.text += span.text;
    else merged.push({ ...span });
    return merged;
  }, []);
  if (spans.length) {
    spans[0].text = spans[0].text.trimStart();
    spans[spans.length - 1].text = spans[spans.length - 1].text.trimEnd();
  }
  return {
    _type: "block",
    _key: key(),
    style,
    markDefs,
    ...(list && { listItem: list, level: 1 }),
    children: spans
      .filter((span) => span.text)
      .map((span) => ({ _type: "span", _key: key(), ...span })),
  };
}

function paragraphStyle(node: Node) {
  if (classes(node).includes("text-large")) return "normal";
  if (classes(node).includes("text-small")) return "small";
  return "plain";
}

function prose(nodes: Node[]): object[] {
  return significant(nodes).flatMap((node) => {
    if (/^h[2-4]$/.test(node.tag ?? "")) return [textBlock(node.children!, node.tag!)];
    if (node.tag === "p") return [textBlock(node.children!, paragraphStyle(node))];
    if (node.tag === "ul" || node.tag === "ol") {
      const list = node.tag === "ul" ? "bullet" : "number";
      return significant(node.children).map((li) => {
        const [only, ...rest] = significant(li.children);
        if (only?.tag !== "p" || rest.length) throw new Error("Expected <li><p>…</p></li>");
        return textBlock(only.children!, "normal", list);
      });
    }
    throw new Error(`Unsupported element in Prose: <${node.tag ?? node.type}>`);
  });
}

const plainText = (node: Node): string =>
  (node.children ?? [])
    .map((child) => (child.type === TEXT ? child.content : plainText(child)))
    .join("")
    .replace(/\s+/g, " ")
    .trim();

function quote(node: Node) {
  const [text, attribution, ...rest] = significant(node.children).map(plainText);
  if (rest.length) throw new Error("QuoteCard has more than a quote and an attribution");
  return {
    _type: "quote",
    _key: key(),
    text: text.replace(/^“/, "").replace(/”$/, ""),
    ...(attribution && { attribution: attribution.replace(/^- /, "") }),
  };
}

function cta(node: Node, intro?: string) {
  return {
    _type: "cta",
    _key: key(),
    label: plainText(node),
    url: attr(node, "to"),
    ...(attr(node, "new-window") && { newWindow: true }),
    ...(intro && { intro }),
  };
}

async function figure(node: Node) {
  const maxWidth = attr(node, "max-width");
  const alt = attr(node, "alt");
  const caption = significant(node.children);
  return {
    _type: "figure",
    _key: key(),
    image: await imageField(attr(node, "src")),
    ...(alt && { alt }),
    ...(caption.length && { caption: prose(caption) }),
    ...(attr(node, "square") && { square: true }),
    ...(attr(node, "shadow") && { shadow: true }),
    ...(maxWidth && { maxWidth }),
  };
}

async function column(node: Node) {
  const children = significant(node.children);
  const sticky = children.length === 1 && classes(children[0]).includes("case-sticky");
  const md = attr(node, "md") ?? attr(node, "sm") ?? attr(node, "cols");
  const cols = attr(node, "cols");
  return {
    _key: key(),
    _type: "column",
    width: Number(md),
    mobileWidth: Number(cols ?? 12),
    ...(classes(node).includes("justify-center") && { center: true }),
    ...(sticky && { sticky: true }),
    content: await blocks(sticky ? children[0].children! : children),
  };
}

async function row(node: Node) {
  const cols = significant(node.children);
  const align = attr(node, "align");
  return {
    _type: "columns",
    _key: key(),
    ...(align && { align }),
    ...(String(attr(cols[0], "order-md")) === "2" && { flip: true }),
    columns: await Promise.all(cols.map(column)),
  };
}

async function blocks(nodes: Node[]): Promise<object[]> {
  const out: object[] = [];
  for (const node of significant(nodes)) {
    switch (node.tag) {
      case "Prose":
        out.push(...prose(node.children!));
        break;
      case "v-row":
        out.push(await row(node));
        break;
      case "Figure":
        out.push(await figure(node));
        break;
      case "QuoteCard":
        out.push(quote(node));
        break;
      case "ShareMeter":
        out.push({
          _type: "shareMeter",
          _key: key(),
          data: (attr(node, "data") as object[]).map((item) => ({ _key: key(), ...item })),
          caption: attr(node, "caption"),
        });
        break;
      case "CtaButton":
        out.push(cta(node));
        break;
      case "div": {
        const [intro, button, ...rest] = significant(node.children);
        if (intro?.tag !== "Prose" || button?.tag !== "CtaButton" || rest.length) {
          throw new Error("Only a Prose + CtaButton <div> is supported");
        }
        out.push(cta(button, plainText(intro)));
        break;
      }
      default:
        throw new Error(`Unsupported block <${node.tag ?? node.type}>`);
    }
  }
  return out;
}

/** The first heading in a section, however deeply nested, to name it in the Studio. */
function firstHeading(items: object[]): string | undefined {
  for (const item of items as {
    style?: string;
    children?: { text: string }[];
    columns?: { content: object[] }[];
  }[]) {
    if (/^h[2-4]$/.test(item.style ?? "")) return item.children?.map((c) => c.text).join("");
    const nested = firstHeading((item.columns ?? []).flatMap((column) => column.content));
    if (nested) return nested;
  }
  return undefined;
}

async function main() {
  const nodes = significant(descriptor.template!.ast!.children as unknown as Node[]);
  const hero = nodes.find((node) => node.tag === "CaseHero")!;
  const facts = nodes.find((node) => node.tag === "ProjectFacts");
  const meta = script.match(/usePageMeta\((\{[\s\S]*?\})\);/);
  const { title: seoTitle, description: seoDescription } = evaluate(meta![1]);
  const eyebrow = attr(hero, "eyebrow");

  const sections = [];
  for (const node of nodes.filter((n) => n.tag === "Section")) {
    const [tone, narrow] = [attr(node, "tone"), attr(node, "narrow")];
    const body = await blocks(node.children!);
    sections.push({
      _type: "section",
      _key: key(),
      label: firstHeading(body) ?? `Section ${sections.length + 1}`,
      tone: tone ?? "default",
      ...(narrow && { narrow: true }),
      body,
    });
  }

  const handled = ["CaseHero", "ProjectFacts", "Section", "NextProject"];
  const unknown = nodes.filter((node) => !handled.includes(node.tag!));
  if (unknown.length) throw new Error(`Unsupported top-level: ${unknown.map((n) => n.tag).join()}`);

  const doc = {
    _type: "caseStudy",
    title: attr(hero, "title"),
    slug: { _type: "slug", current: slug },
    ...(eyebrow && { eyebrow }),
    heroImage: await imageField(attr(hero, "image")),
    heroImageAlt: attr(hero, "image-alt"),
    ...(attr(hero, "image-square") && { heroImageSquare: true }),
    heroIntro: prose(hero.children!),
    facts: facts
      ? (attr(facts, "items") as object[]).map((item) => ({ _type: "fact", _key: key(), ...item }))
      : [],
    sections,
    seoTitle,
    seoDescription,
  };

  const existing = await client.fetch<string | null>(
    `*[_type == "caseStudy" && slug.current == $slug][0]._id`,
    { slug }
  );
  const saved = existing
    ? await client.createOrReplace({ ...doc, _id: existing })
    : await client.create(doc);
  console.log(`${existing ? "Replaced" : "Created"} ${saved._id} (${sections.length} sections)`);
}

await main();
