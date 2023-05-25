export type TMetaData = {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    }
}

export interface TApiData<D> {
    data: D | null;
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
    SETTINGS: '/site-setting?populate=seo.metaImage&populate=frontPage.parent&populate=projectsPage.parent&populate=portfolioPage.parent',
    CONTACTS: '/contact?populate=phone,email,social.image',

    MENU_HEADER: '/menu?populate[HeaderMenu][populate]=link.parent&populate[HeaderMenu][populate]=link.category',
    MENU_MAIN: '/menu?populate[MainMenu][populate]=link.parent&populate[MainMenu][populate]=link.category',

    PAGES: '/pages?populate=*',
    PAGE_BY_SLUG: '/v2/pages/%slug%?populate=*',

    PAGE_FRONT: '/page-front?populate=seo.metaImage&populate=hero.image&populate=advantage.paragraphs',
    PAGE_CONTACTS: '/page-contact?populate=seo.metaImage',
    PAGE_PRICES: '/page-price?populate=seo.metaImage',
    PAGE_PORTFOLIO: '/page-portfolio?populate=seo.metaImage',
    PAGE_PROJECTS: '/page-project?populate=seo.metaImage',

    PROJECTS: '/projects?populate=seo.metaImage&populate=category.seo.metaImage',
    PROJECTS_CATEGORIES: '/project-categories?populate=seo.metaImage',
    PROJECT_BY_SLUG: '/v2/projects/%slug%?populate=seo.metaImage&populate=category.seo.metaImage&populate=profile&populate=gallery',
    PROJECT_CATEGORY_BY_SLUG: '/v2/project-categories/%slug%?populate=seo.metaImage',
} as const;





