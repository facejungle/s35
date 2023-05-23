import {DynamicPageDataType} from "@/components/DynamicPages";
import {PortfolioDataType} from "@/components/Portfolio";
import {TProjectCategory, TProject} from "@/components/Projects";

export interface LinkType {
    text: string;
    link: string;
}

interface LinkBase<T> {
    id: number;
    __component: T;
    text: string;
}

export const Components = {
    PAGE_STATIC: 'link.page-static',
    PAGE_DYNAMIC: 'link.page',
    PROJECT: 'link.project',
    PROJECT_CATEGORY: 'link.project-category',
    PORTFOLIO: 'link.portfolio',
    PORTFOLIO_CATEGORY: 'link.portfolio-category',
} as const;

export interface TLinkPageStatic extends LinkBase<typeof Components.PAGE_STATIC> {
    slug: string;
}

export interface TLinkPageDynamic extends LinkBase<typeof Components.PAGE_DYNAMIC> {
    link: DynamicPageDataType;
}

export interface TLinkProject extends LinkBase<typeof Components.PROJECT> {
    link: TProject;
}

export interface TLinkProjectCategory extends LinkBase<typeof Components.PROJECT_CATEGORY> {
    link: TProjectCategory;
}

export interface TLinkPortfolio extends LinkBase<typeof Components.PORTFOLIO> {
    link: PortfolioDataType;
}

export interface TLinkPortfolioCategory extends LinkBase<typeof Components.PORTFOLIO_CATEGORY> {
    link: PortfolioDataType;
}

export type TLinkData = TLinkPageStatic | TLinkPageDynamic | TLinkProject |
    TLinkProjectCategory | TLinkPortfolio | TLinkPortfolioCategory;

export type TMenusData = {
    id: number;
    HeaderMenu: TLinkData[];
    MainMenu: TLinkData[];
}