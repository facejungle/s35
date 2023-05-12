export type urlHostType = 'api' | 'apiExt' | 'apiProxy' | 'strapi' | 'strapiExt';

export type apiPathType =
   'siteSettings' | 'contacts' | 'headerMenu' | 'mainMenu' |
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