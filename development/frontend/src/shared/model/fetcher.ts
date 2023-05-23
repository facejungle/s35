export interface FetcherLinkType {
    host?: hostNameType;
    path: pathNameType;
    slug?: string;

    pagination?: paginationType;
    sort?: sortType;
}


export type hostNameType = 'API' | 'API_EXT' | 'STRAPI' | 'STRAPI_EXT';


export const apiUrls = {
    "DEFAULT": "http://77.232.136.160:1337",
    "EXTERNAL": "http://77.232.136.160:1337"
} as const;


export const paths = {
    SETTINGS: '/v2/site-setting?populate=*',
    CONTACTS: '/v2/contacts?populate=phone,email,social.image',

    MENU_HEADER: '/v2/menu?populate[HeaderMenu][populate]=link.parent&populate[HeaderMenu][populate]=link.category',
    MENU_MAIN: '/v2/menu?populate[MainMenu][populate]=link.parent&populate[MainMenu][populate]=link.category',

    PAGE_FRONT: '/v2/page-front?populate[content][populate]=*',
    PAGE_CONTACTS: '/v2/page-contact?populate[content][populate]=*',
    PAGE_PRICES: '/v2/page-price?populate[content][populate]=*',
    PAGE_PORTFOLIO: '/v2/page-portfolio?populate[content][populate]=*',
    PAGE_PROJECTS: '/v2/page-project?populate[content][populate]=*',

    PROJECTS: '/v2/projects?populate=image&populate=category.image',
    PROJECTS_CATEGORIES: '/v2/project-categories',
    PROJECT_BY_SLUG: '/v2/projects/%slug%?populate=*',
    PROJECT_CATEGORY_BY_SLUG: '/v2/project-categories/%slug%',
    PROJECT_SETTINGS: '/v2/project-setting',
}
export type pathNameType = keyof typeof paths;


export type paginationType = {
    start: number;
    limit: number;
}
export type sortType = {
    fieldName: string;
    direction: 'asc' | 'desc';
}
