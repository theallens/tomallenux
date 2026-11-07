import { caseStudy } from "./documents/case-study";
import { section, sectionContent } from "./objects/section";
import { richText } from "./objects/rich-text";
import { columnContent, columns } from "./blocks/columns";
import { figure } from "./blocks/figure";
import { quote } from "./blocks/quote";
import { cta } from "./blocks/cta";
import { shareMeter } from "./blocks/share-meter";

export const schemaTypes = [
  caseStudy,
  section,
  sectionContent,
  richText,
  columns,
  columnContent,
  figure,
  quote,
  cta,
  shareMeter,
];
