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

export type ColumnItem = PortableTextBlock | FigureBlock | QuoteBlock | CtaBlock | ShareMeterBlock;

export interface Column {
  _key: string;
  width: number;
  mobileWidth?: number;
  center?: boolean;
  sticky?: boolean;
  content?: ColumnItem[];
}

export interface ColumnsBlock {
  _type: "columns";
  _key: string;
  columns: Column[];
  align?: "start" | "center" | "end";
  flip?: boolean;
}

export type SectionItem = ColumnItem | ColumnsBlock;

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
  heroIntro?: PortableTextBlock[];
  facts?: { _key: string; label: string; value: string }[];
  sections?: CaseStudySection[];
  seoTitle?: string;
  seoDescription?: string;
}
