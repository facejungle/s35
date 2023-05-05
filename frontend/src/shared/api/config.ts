export function apiURL(path: string) {
   console.log(process.env.API_URL)
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