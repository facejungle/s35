export type TMetaData = {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    }
}

export interface TApiData<D> {
    data: D;
    meta: TMetaData;
}


export type THostNames = 'API' | 'API_EXT' | 'STRAPI' | 'STRAPI_EXT';
export type TPathNames = keyof typeof paths;
export type TPaginationUrl = {
    page: number;
    pageSize?: number;
};

export type TSortUrl = {
    fieldName: string;
    direction: 'asc' | 'desc';
}

export interface TFetcherLink {
    host?: THostNames;
    path: TPathNames;
    slug?: string;

    pagination?: TPaginationUrl;
    sort?: TSortUrl;
}


export const apiUrls = {
    "DEFAULT": "http://77.232.136.160:1337",
    "EXTERNAL": "http://77.232.136.160:1337"
} as const;


export const paths = {
    SETTINGS: '/site-setting?populate=*',
    CONTACTS: '/contact?populate=phone,email,social.image',

    MENU_HEADER: '/menu?populate[HeaderMenu][populate]=link.parent&populate[HeaderMenu][populate]=link.category',
    MENU_MAIN: '/menu?populate[MainMenu][populate]=link.parent&populate[MainMenu][populate]=link.category',

    PAGE_FRONT: '/page-front?populate[content][populate]=*',
    PAGE_CONTACTS: '/page-contact?populate[content][populate]=*',
    PAGE_PRICES: '/page-price?populate[content][populate]=*',
    PAGE_PORTFOLIO: '/page-portfolio?populate[content][populate]=*',
    PAGE_PROJECTS: '/page-project?populate[content][populate]=*',

    PROJECTS: '/projects?populate=image&populate=category.image',
    PROJECTS_CATEGORIES: '/project-categories',
    PROJECT_BY_SLUG: '/v2/projects/%slug%?populate=*',
    PROJECT_CATEGORY_BY_SLUG: '/v2/project-categories/%slug%',
} as const;





