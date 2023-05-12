import { DynamicPageDataType } from "@/components/DynamicPages/model/type";
import { PortfolioDataType } from "@/components/Portfolio/model/type";
import { ProjectCategoryDataType, ProjectDataType } from "@/components/Projects/model/type";

export interface LinkType {
   text: string;
   link: string;
}


enum ComponentType {
   PAGE_STATIC = 'link.page-static',
   PAGE_DYNAMIC = 'link.page',
   PROJECT = 'link.project',
   PROJECT_CATEGORY = 'link.project-category',
   PORTFOLIO = 'link.portfolio',
   PORTFOLIO_CATEGORY = 'link.portfolio-category',
}

interface LinkBase<T = ComponentType> {
   id: number;
   __component: T;
   text: string;
}

export type LinkDataType = LinkProjectDataType | LinkProjectCategoryDataType | LinkPageStaticDataType | LinkPageDynamicDataType | LinkPortfolioDataType | LinkPortfolioCategoryDataType;


export interface LinkPageStaticDataType extends LinkBase<ComponentType.PAGE_STATIC> {
   slug: string;
}
export interface LinkPageDynamicDataType extends LinkBase<ComponentType.PAGE_DYNAMIC> {
   link: DynamicPageDataType;
}
export interface LinkProjectDataType extends LinkBase<ComponentType.PROJECT> {
   link: ProjectDataType;
}
export interface LinkProjectCategoryDataType extends LinkBase<ComponentType.PROJECT_CATEGORY> {
   link: ProjectCategoryDataType;
}
export interface LinkPortfolioDataType extends LinkBase<ComponentType.PORTFOLIO> {
   link: PortfolioDataType;
}
export interface LinkPortfolioCategoryDataType extends LinkBase<ComponentType.PORTFOLIO_CATEGORY> {
   link: PortfolioDataType;
}