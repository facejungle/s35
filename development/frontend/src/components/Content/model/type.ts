import {TImageData, TImagesData} from "@shared/index";
import {PortfolioDataType} from "@/components/Portfolio";
import {TProject} from "@/components/Projects/model/type";
import type {MDXContent} from 'mdx/types';


const Components = {
    TITLE: 'content.title',
    TEXT: 'content.text',
    RICHTEXT: 'content.rich-text',
    IMAGE: 'content.image',
    GALLERY: 'content.gallery',
    LOCATION: 'content.location',
    PROJECT: 'content.project',
    PORTFOLIO: 'content.portfolio',
} as const;

interface base<C = keyof typeof Components> {
    __component: C;
    id: number;
}

export interface ContentTitleType extends base<typeof Components.TITLE> {
    text: string;
    size: number;
    hashtag?: string;
}

export interface ContentTextType extends base<typeof Components.TEXT> {
    text: string;
}

export interface ContentRichTextType extends base<typeof Components.RICHTEXT> {
    text: MDXContent;
}

export interface ContentImageType extends base<typeof Components.IMAGE> {
    image: TImageData;
}

export interface ContentGalleryType extends base<typeof Components.GALLERY> {
    gallery: TImagesData;
}

export interface ContentLocationType extends base<typeof Components.LOCATION> {
    name: string;
}

export interface ContentProjectType extends base<typeof Components.PROJECT> {
    projects: [TProject];
}

export interface ContentPortfolioType extends base<typeof Components.PORTFOLIO> {
    portfolio: [PortfolioDataType];
}

export type ContentDataType = [ContentTitleType | ContentTextType | ContentRichTextType | ContentImageType | ContentGalleryType | ContentLocationType | ContentProjectType | ContentPortfolioType];