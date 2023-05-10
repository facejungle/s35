import { ImageStrapiData } from "@/components/ImageStrapi/model/type";
import { PortfolioDataType } from "@/components/Portfolio/model/type";
import { ProjectDataType } from "@/components/Projects/model/type";

enum Components {
   TITLE = 'content.title',
   TEXT = 'content.text',
   RICHTEXT = 'content.rich-text',
   IMAGE = 'content.image',
   GALLERY = 'content.gallery',
   LOCATION = 'content.location',
   PROJECT = 'content.project',
   PORTFOLIO = 'content.portfolio',
}

interface base<C = Components> {
   __component: C;
   id: number;
}

export interface ContentTitleType extends base<Components.TITLE> {
   text: string;
   size: number;
   hashtag?: string;
}
export interface ContentTextType extends base<Components.TEXT> {
   text: string;
}
export interface ContentRichTextType extends base<Components.RICHTEXT> {
   text: string;
}
export interface ContentImageType extends base<Components.IMAGE> {
   image: ImageStrapiData;
}
export interface ContentGalleryType extends base<Components.GALLERY> {
   image: [ImageStrapiData];
}
export interface ContentLocationType extends base<Components.LOCATION> {
   name: string;
}
export interface ContentProjectType extends base<Components.PROJECT> {
   projects: [ProjectDataType];
}
export interface ContentPortfolioType extends base<Components.PORTFOLIO> {
   portfolio: [PortfolioDataType];
}
export type ContentDataType = [ContentTitleType | ContentTextType | ContentRichTextType | ContentImageType | ContentGalleryType | ContentLocationType | ContentProjectType | ContentPortfolioType];