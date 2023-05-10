type urlHostType = 'api' | 'apiExt' | 'apiProxy' | 'strapi' | 'strapiExt';

type apiPathType =
   'siteSettings' | 'contacts' | 'headerMenu' | 'mainMenu' |
   //Pages
   'pageFront' | 'pageContacts' | 'pagePrices' | 'pagePortfolio' | 'pageProjects' |
   // Projects
   'projects' | 'projectsSettings' | 'projectsCategories' | 'projectCategoryBySlug' | 'projectBySlug';

interface urlType {
   host: urlHostType;
   path: apiPathType;
   slug?: string | number;
   filter?: string;
}
export const urlHost = (host: urlHostType) => {
   if (host === 'api') return `${process.env.API_URL || 'http://localhost:1337'}/api`;
   if (host === 'apiExt') return `${process.env.API_EXT_URL || 'http://localhost:1337'}/api`;
   if (host === 'apiProxy') return `${process.env.PROXY_URL || 'http://localhost:1337'}/api`;
   if (host === 'strapi') return `${process.env.API_URL || 'http://localhost:1337'}`;
   if (host === 'strapiExt') return `${process.env.API_EXT_URL || 'http://localhost:1337'}`;
   throw new SyntaxError('urlHost: host unknown');
}
export const urlPath = (path: apiPathType, slug?: string | number, filter?: string) => {
   const filterPath = filter ? `&filters${filter}` : '';
   if (path) {
      if (path === 'siteSettings') return '/site-setting/?populate=*' + filterPath;
      if (path === 'contacts') return '/contact/?populate=*' + filterPath;
      if (path === 'headerMenu') return '/v2/menu?populate[0]=HeaderMenu.link.parent&populate[1]=HeaderMenu.link.category' + filterPath;
      if (path === 'mainMenu') return '/v2/menu?populate=MainMenu.link.parent' + filterPath;
      // STATIC PAGES
      if (path === 'pageFront') return '/v2/page-front?populate=content.image,content.gallery,content.projects,content.portfolio' + filterPath;
      if (path === 'pageContacts') return '/page-contact/?populate=*' + filterPath;
      if (path === 'pagePrices') return '/page-price/?populate=*' + filterPath;
      if (path === 'pagePortfolio') return '/page-portfolio/?populate=*' + filterPath;
      if (path === 'pageProjects') return '/page-project/?populate=*' + filterPath;
      // PROJECTS
      if (path === 'projects') return '/v2/projects/?populate=category,image' + filterPath;
      if (path === 'projectBySlug') return `/v2/projects/${slug}?populate=*` + filterPath;
      if (path === 'projectsCategories') return '/v2/project-categories' + filterPath;
      if (path === 'projectCategoryBySlug') return `/v2/project-categories/${slug}`;
      if (path === 'projectsSettings') return '/v2/project-setting' + filterPath;
      throw new SyntaxError('urlPath: path unknown');
   }
   throw new SyntaxError('urlPath: path undefined');
}
/**
* Function for fetch data
* @param url Variable from .env or host, e.g. http://localhost
* @param path Variable or path, e.g. '/site-setting/'
*/
export async function fetcher(link: urlType): Promise<any> {
   try {
      const data = await fetch(urlHost(link.host) + urlPath(link.path, link.slug, link.filter));
      if (!data.ok) {
         return undefined;
      }
      return await data.json();
   } catch (err) {
      throw new Error(`[${process.env.PROJECT_SLUG}][fetch fail] > ${link.host}/${link.path} > ` + err);
   }
}
