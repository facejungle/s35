import { apiPathType } from "@/shared/model/type";

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