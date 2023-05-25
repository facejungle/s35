import {TPageData} from "@/components/DynamicPages";
import {PortfolioDataType} from "@/components/Portfolio";
import {TProjectData, TProjectCatData} from "@/components/Projects";
import {TApiData} from "@/shared";

export type TLink = {
    text: string;
    link: string;
}


type BaseLink<C, L> = {
    id: number;
    __component: C;
    text: string;
    link: L;
}


export const Components = {
    PAGE_DYNAMIC: 'link.page',
    PROJECT: 'link.project',
    PROJECT_CATEGORY: 'link.project-category',
    PORTFOLIO: 'link.portfolio',
    PORTFOLIO_CATEGORY: 'link.portfolio-category',
} as const;


export type TLinkPageDynamic = BaseLink<typeof Components.PAGE_DYNAMIC, TPageData>;
export type TLinkProject = BaseLink<typeof Components.PROJECT, TProjectData>;
export type TLinkProjectCategory = BaseLink<typeof Components.PROJECT_CATEGORY, TProjectCatData>;
export type TLinkPortfolio = BaseLink<typeof Components.PORTFOLIO, PortfolioDataType>;
export type TLinkPortfolioCategory = BaseLink<typeof Components.PORTFOLIO_CATEGORY, PortfolioDataType>;


export enum EnumMenus {
    HeaderMenu,
    MainMenu
}

export type TComponent = TLinkPageDynamic | TLinkProject |
    TLinkProjectCategory | TLinkPortfolio | TLinkPortfolioCategory;

export type TLinkAttributes<Type = typeof EnumMenus> = {
    [Property in keyof Type]: [TComponent];
}


type LinkData = {
    id: number;
    attributes: TLinkAttributes;
}


export type TLinkData = TApiData<LinkData>;