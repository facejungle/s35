type urlHostType = 'api' | 'apiExt' | 'strapi' | 'strapiExt';

type apiPathType =
   'siteSettings' | 'contacts' | 'headerMenu' |
   //Pages
   'pageFront' | 'pageContacts' | 'pagePrices' | 'pagePortfolio' | 'pageProjects' |
   // Projects
   'projects' | 'projectsSettings' | 'projectsCategories' | 'projectCategoryBySlug' | 'projectById' | 'projectBySlug';

interface urlType {
   host: urlHostType;
   path: apiPathType;
   slugOrID?: string | number;
   filter?: string;
}
export const urlHost = (host: urlHostType) => {
   if (host === 'api') return `${process.env.API_URL || 'http://localhost:1337'}/api`;
   if (host === 'apiExt') return `${process.env.API_EXT_URL || 'http://localhost:1337'}/api`;
   if (host === 'strapi') return `${process.env.API_URL || 'http://localhost:1337'}`;
   if (host === 'strapiExt') return `${process.env.API_EXT_URL || 'http://localhost:1337'}`;
}
export const urlPath = (path: apiPathType, slugOrID?: string | number, filter?: string) => {
   const filterPath = filter ? `&filters${filter}` : '';
   if (path) {
      if (path === 'siteSettings') return '/site-setting/?populate=*' + filterPath;
      if (path === 'contacts') return '/contact/?populate=*' + filterPath;
      if (path === 'headerMenu') return '/header-menu?populate[0]=links&populate[1]=links.link.parent' + filterPath;
      // STATIC PAGES
      if (path === 'pageFront') return '/page-front/?populate=*' + filterPath;
      if (path === 'pageContacts') return '/page-contact/?populate=*' + filterPath;
      if (path === 'pagePrices') return '/page-price/?populate=*' + filterPath;
      if (path === 'pagePortfolio') return '/page-portfolio/?populate=*' + filterPath;
      if (path === 'pageProjects') return '/page-project/?populate=*' + filterPath;
      // PROJECTS
      if (path === 'projects') return '/projects/?populate=category' + filterPath;
      if (path === 'projectsSettings') return '/project-setting' + filterPath;
      if (path === 'projectsCategories') return '/project-categories' + filterPath;
      if (path === 'projectCategoryBySlug') return `/project-categories/slug/${slugOrID}`;
      if (path === 'projectById') return `/projects/${slugOrID}?populate=*` + filterPath;
      if (path === 'projectBySlug') return `/projects/slug/${slugOrID}?populate=*` + filterPath;
   }
   return '';
}
/**
* Function for fetch data
* @param url Variable from .env or host, e.g. http://localhost
* @param path Variable or path, e.g. '/site-setting/'
*/
export async function fetcher(link: urlType): Promise<any> {
   console.log(link)
   const data = await fetch(urlHost(link.host) + urlPath(link.path, link.slugOrID, link.filter));
   if (!data.ok) {
      console.log(`fetch fail > ${link.host + link.path}`);
      return null;
   }
   return await data.json();
}









export function apiUrl(path: apiPathType, slug?: string, id?: number) {
   let apiPath;
   if (path) {
      apiPath = path === 'siteSettings' ? '/site-setting/?populate=*'
         : path === 'contacts' ? '/contact/?populate=*'
            : path === 'headerMenu' ? '/page-contact/?populate=*'
               //Pages
               : path === 'pageFront' ? '/page-front/?populate=*'
                  : path === 'pageContacts' ? '/page-contact/?populate=*'
                     : path === 'pagePrices' ? '/page-price/?populate=*'
                        : path === 'pagePortfolio' ? '/page-portfolio/?populate=*'
                           : path === 'pageProjects' ? '/page-project/?populate=*'
                              // Projects
                              : path === 'projectsCategories' ? '/project-categories'
                                 : path === 'projectCategoryBySlug' ? `/project-categories/slug/${slug}`
                                    : path === 'projectById' ? `/projects/${id}?populate=*`
                                       : path === 'projectBySlug' ? `/projects/slug/${slug}?populate=*`
                                          : console.log('apiUrl > unknown path');
   }
   const apiUrl = `${process.env.API_URL || 'http://localhost:1337'}/api${apiPath}`;
   return apiUrl;
}


export function apiURL(path: string) {
   return `${process.env.API_URL || 'http://localhost:1337'}/api${path}`;
}

export function strapiURL(path: string) {
   return `${process.env.API_URL || 'http://localhost:1337'}${path}`;
}



export const apiPaths = {
   settingsPath: '/site-setting/?populate=*',
   contactsPath: '/contact/?populate=*',
   // Pages
   pageFront: '/page-front/?populate=*',
   pageProjects: '/page-project/?populate=*',
   // Projects
   projectsSettings: '/project-setting',
   projectsPath: '/projects/?populate=category',
   projectsCategory: '/project-categories',
   projectBySlug: '/projects/slug/',
}

export const apiPaths2 = ({ id, slug }: { id?: number, slug?: string }) => {
   return {
      // Menu
      headerMenu: '/header-menu?populate[0]=links&populate[1]=links.link.parent',

      // Pages
      pageFront: '/page-front/?populate=*',
      pageContacts: '/page-contact/?populate=*',
      pagePrices: '/page-price/?populate=*',
      pagePortfolio: '/page-portfolio/?populate=*',
      pageProjects: '/page-project/?populate=*',

      // Projects
      projectsCategories: '/project-categories',
      projectCategoryBySlug: `/project-categories/slug/${slug}`,
      projectById: `/projects/${id}?populate=*`,
      projectBySlug: `/projects/slug/${slug}?populate=*`,
   }
}