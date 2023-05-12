import { DynamicPageDataType } from '../model/type';


export const dynamicPageFolder = process.env.DYNAMIC_PAGES_URI || 'page';

export function getDynamicPageLink(data: DynamicPageDataType): string {
   if (data) {
      const page = data;
      const pageParent = page.parent;
      const pageLink = pageParent ? `${pageParent.slug}/${page.slug}` : page.slug;
      return `/${dynamicPageFolder}/${pageLink}`;
   }
   throw new Error("getDynamicPageLink() > dynamic page data is null");
}

export function getDynamicPageLinks(data: DynamicPageDataType[]): object[] {
   const pages = data;
   if (pages !== null) {
      return pages.map(page => {
         const pageParent = page.parent;
         const pageLink = pageParent ? [pageParent.slug, page.slug] : [page.slug];
         return {
            url: pageLink,
         };
      });
   }
   throw new Error("getDynamicPageLinks() > dynamic pages data is null");
}