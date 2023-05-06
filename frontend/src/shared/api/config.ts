type apiUrlType = 'api' | 'apiExt' | 'strapi' | 'strapiExt';

type apiPathType =
   'siteSettings' | 'contacts' | 'headerMenu' |
   //Pages
   'pageFront' | 'pageContacts' | 'pagePrices' | 'pagePortfolio' | 'pageProjects' |
   // Projects
   'projects' | 'projectsSettings' | 'projectsCategories' | 'projectCategoryBySlug' | 'projectById' | 'projectBySlug';

export const urlHost = (url: apiUrlType) => {
   if (url === 'api') return `${process.env.API_URL || 'http://localhost:1337'}/api`;
   if (url === 'apiExt') return `${process.env.API_EXT_URL || 'http://localhost:1337'}/api`;
   if (url === 'strapi') return `${process.env.API_URL || 'http://localhost:1337'}`;
   if (url === 'strapiExt') return `${process.env.API_EXT_URL || 'http://localhost:1337'}`;
}
export const urlPath = (path: apiPathType, slug?: string, id?: number) => {
   if (path) {
      if (path === 'siteSettings') return '/site-setting/?populate=*';
      if (path === 'contacts') return '/contact/?populate=*';
      if (path === 'headerMenu') return '/page-contact/?populate=*';
      // STATIC PAGES
      if (path === 'pageFront') return '/page-front/?populate=*';
      if (path === 'pageContacts') return '/page-contact/?populate=*';
      if (path === 'pagePrices') return '/page-price/?populate=*';
      if (path === 'pagePortfolio') return '/page-portfolio/?populate=*';
      if (path === 'pageProjects') return '/page-project/?populate=*';
      // PROJECTS
      if (path === 'projects') return '/projects/?populate=category';
      if (path === 'projectsSettings') return '/project-setting';
      if (path === 'projectsCategories') return '/project-categories';
      if (path === 'projectCategoryBySlug') return `/project-categories/slug/${slug}`;
      if (path === 'projectById') return `/projects/${id}?populate=*`;
      if (path === 'projectBySlug') return `/projects/slug/${slug}?populate=*`;
   }
   return '';
}
/**
* Function for fetch data
* @param url Host, e.g. 'http://localhost'
* @param path Path, e.g. '/site-setting/'
*/
export async function fetcher(url: apiUrlType, path: apiPathType, slug?: string, id?: number): Promise<any> {
   const data = await fetch(urlHost(url) + urlPath(path, slug, id));
   if (!data.ok) {
      console.log(`fetch fail > ${url + path}`);
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