import { caseStudy } from "./documents/case-study";
import { section, sectionContent } from "./objects/section";
import { cardText, richText } from "./objects/rich-text";
import { columnContent, columns } from "./blocks/columns";
import { figure } from "./blocks/figure";
import { quote } from "./blocks/quote";
import { cta } from "./blocks/cta";
import { shareMeter } from "./blocks/share-meter";
import { panel } from "./blocks/panel";
import { divider } from "./blocks/divider";
import { embed } from "./blocks/embed";
import { gallery } from "./blocks/gallery";
import { accordion } from "./blocks/accordion";

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
  panel,
  divider,
  embed,
  gallery,
  accordion,
  cardText,
];
