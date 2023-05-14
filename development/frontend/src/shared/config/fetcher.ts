import { FetcherLink, hostName, pathName } from '@shared/index';
import { paths, hosts } from '@shared/index';


export async function fetcher(link: FetcherLink): Promise<any> {
   const fetchHost: string = link.host || hosts.API || 'http://localhost:1337';
   let fetchPath: string = '';

   if (link.path === 'LOCALES') fetchPath = paths.LOCALES;
   if (link.path === 'SETTINGS') fetchPath = paths.SETTINGS;
   if (link.path === 'CONTACTS') fetchPath = paths.CONTACTS;

   if (link.path === 'MENU_HEADER') fetchPath = paths.MENU_HEADER;
   if (link.path === 'MENU_MAIN') fetchPath = paths.MENU_MAIN;

   if (link.path === 'PAGE_FRONT') fetchPath = paths.PAGE_FRONT;
   if (link.path === 'PAGE_CONTACTS') fetchPath = paths.PAGE_CONTACTS;
   if (link.path === 'PAGE_PRICES') fetchPath = paths.PAGE_PRICES;
   if (link.path === 'PAGE_PORTFOLIO') fetchPath = paths.PAGE_PORTFOLIO;
   if (link.path === 'PAGE_PROJECTS') fetchPath = paths.PAGE_PROJECTS;

   if (link.path === 'PROJECTS') fetchPath = paths.PROJECTS;
   if (link.path === 'PROJECTS_CATEGORIES') fetchPath = paths.PROJECTS_CATEGORIES;
   if (link.path === 'PROJECT_BY_SLUG') fetchPath = paths.PROJECT_BY_SLUG;
   if (link.path === 'PROJECT_CATEGORY_BY_SLUG') fetchPath = paths.PROJECT_CATEGORY_BY_SLUG;
   if (link.path === 'PROJECT_SETTINGS') fetchPath = paths.PROJECT_SETTINGS;

   if (link.slug) {
      fetchPath.replace('${slug}', link.slug)
   }
   if (link.pagination) {
      fetchPath = fetchPath + `&pagination[page]=${link.pagination.page}&pagination[pageSize]=${link.pagination.pageSize}`
      if (link.pagination.limit) {
         fetchPath = fetchPath + `&pagination[limit]=${link.pagination.limit}`
      }
   }
   if (link.sort) {
      fetchPath = fetchPath + `${link.sort}`
   }
   if (link.locale) {
      fetchPath = fetchPath + `&locale=${link.locale}`
   }
   try {
      const data = await fetch(`${fetchHost}/${fetchPath}`);
      if (!data.ok) {
         return undefined;
      }
      return await data.json();
   }
   catch (err) {
      throw new Error(`[${process.env.PROJECT_SLUG}][fetch fail] > ${link.host}/${link.path} > ` + err);
   }
}