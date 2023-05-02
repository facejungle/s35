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
      projectsCategories: '/project-categories',
      projectCategoryBySlug: `/project-categories/slug/${slug}`,
      projectById: `/projects/${id}?populate=*`,
      projectBySlug: `/projects/slug/${slug}?populate=*`,
   }
}