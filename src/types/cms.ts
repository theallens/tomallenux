/** Content from Sanity, as written by scripts/fetch-content.mjs. Schema: studio/schemaTypes. */
import type { PortableTextBlock } from "@portabletext/types";
import type { SectionTone } from "@/components/layout/Section.vue";

export interface CmsImage {
  _type: "image";
  /** Missing while an image field is still empty in a draft */
  url?: string;
}

export interface FigureBlock {
  _type: "figure";
  _key: string;
  image?: CmsImage;
  alt?: string;
  caption?: PortableTextBlock[];
  square?: boolean;
  shadow?: boolean;
  maxWidth?: number;
  spaceAbove?: number;
}

export interface QuoteBlock {
  _type: "quote";
  _key: string;
  text: string;
  attribution?: string;
}

export interface CtaBlock {
  _type: "cta";
  _key: string;
  label: string;
  url: string;
  newWindow?: boolean;
  intro?: string;
}

export interface ShareMeterBlock {
  _type: "shareMeter";
  _key: string;
  data: { _key: string; label: string; value: number }[];
  caption?: string;
}

export interface PanelBlock {
  _type: "panel";
  _key: string;
  tone?: "auto" | "dark";
  content?: SectionItem[];
}

export interface DividerBlock {
  _type: "divider";
  _key: string;
  spaceAbove?: number;
}

export interface EmbedBlock {
  _type: "embed";
  _key: string;
  url: string;
  title: string;
  aspect?: string;
}

export interface GalleryBlock {
  _type: "gallery";
  _key: string;
  items: { _key: string; image?: CmsImage; alt?: string; caption?: string }[];
}

export interface AccordionBlock {
  _type: "accordion";
  _key: string;
  items: { _key: string; title: string; content?: PortableTextBlock[] }[];
}

export interface Column {
  _key: string;
  width: number;
  mobileWidth?: number;
  tabletWidth?: number;
  gap?: number;
  center?: boolean;
  sticky?: boolean;
  content?: SectionItem[];
}

export interface ColumnsBlock {
  _type: "columns";
  _key: string;
  columns: Column[];
  align?: "start" | "center" | "end";
  flip?: boolean;
  spaceAbove?: number;
}

export type SectionItem =
  | PortableTextBlock
  | FigureBlock
  | QuoteBlock
  | CtaBlock
  | ShareMeterBlock
  | PanelBlock
  | DividerBlock
  | EmbedBlock
  | GalleryBlock
  | AccordionBlock
  | ColumnsBlock;

export interface CaseStudySection {
  _key: string;
  tone?: SectionTone;
  narrow?: boolean;
  body?: SectionItem[];
}

export interface CaseStudy {
  title: string;
  slug: { current: string };
  eyebrow?: string;
  heroImage?: CmsImage;
  heroImageAlt?: string;
  heroImageSquare?: boolean;
  heroTone?: SectionTone;
  heroIntro?: PortableTextBlock[];
  facts?: { _key: string; label: string; value: string }[];
  sections?: CaseStudySection[];
  seoTitle?: string;
  seoDescription?: string;
}
