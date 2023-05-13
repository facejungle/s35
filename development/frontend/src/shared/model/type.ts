import { Locale } from "@i18n/i18n";

export const hosts = {
   API: process.env.API_URL,
   API_EXT: process.env.API_PROXY,
   STRAPI: process.env.API_URL,
   STRAPI_EXT: process.env.PROXY_URL
}

export type hostName = keyof typeof hosts;


export const paths = {
   LOCALES: '/i18n/locales',
   SETTINGS: '/site-setting/',
   CONTACTS: '/contact/',

   MENU_HEADER: '/v2/menu?populate[HeaderMenu][populate]=link.parent&populate[HeaderMenu][populate]=link.category',
   MENU_MAIN: '/v2/menu?populate[MainMenu][populate]=link.parent&populate[MainMenu][populate]=link.category',

   PAGE_FRONT: '/v2/page-front?populate[content][populate]=*',
   PAGE_CONTACTS: '/v2/page-contact?populate[content][populate]=*',
   PAGE_PRICES: '/v2/page-price?populate[content][populate]=*',
   PAGE_PORTFOLIO: '/v2/page-portfolio?populate[content][populate]=*',
   PAGE_PROJECTS: '/v2/page-project?populate[content][populate]=*',

   PROJECTS: '/v2/projects?populate=image&populate[category][populate]=image',
   PROJECTS_CATEGORIES: '/v2/project-categories',
   PROJECT_BY_SLUG: '/v2/projects/${slug}?populate=*',
   PROJECT_CATEGORY_BY_SLUG: '/v2/project-categories/${slug}',
   PROJECT_SETTINGS: '/v2/project-setting',
}

export type pathName = keyof typeof paths;


export type paginationType = {
   page: number;
   pageSize: number;
   limit?: number;
}

export interface FetcherLink {
   host?: hostName;
   path: pathName;
   slug?: string;

   pagination?: paginationType;
   sort?: string;
   locale?: Locale;
}
















export type urlHostType = 'api' | 'apiExt' | 'apiProxy' | 'strapi' | 'strapiExt';

export type apiPathType =
   'siteLocales' | 'siteSettings' | 'contacts' | 'headerMenu' | 'mainMenu' |
   //Pages
   'pageFront' | 'pageContacts' | 'pagePrices' | 'pagePortfolio' | 'pageProjects' |
   // Projects
   'projects' | 'projectsSettings' | 'projectsCategories' | 'projectCategoryBySlug' | 'projectBySlug';

export interface urlType {
   host: urlHostType;
   path: apiPathType;
   slug?: string | number;
   filter?: string;
}

export type imageSizesType = 'original' | 'logo' | 'thumbnail' | 'preview' | 'large' | 'xlarge'