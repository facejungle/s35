import { FetcherLinkType, getHost, getPath } from '@shared/index';

export async function fetcher(link: FetcherLinkType): Promise<any> {
   let fetchHost: string = getHost(link.host);
   let fetchPath: string = getPath(link.path, link.slug, link.pagination, link.sort, link.locale);

   try {
      const data = await fetch(fetchHost + fetchPath);
      if (!data.ok) {
         return undefined;
      }
      return await data.json();
   }
   catch (err) {
      throw new Error(`[${process.env.PROJECT_SLUG}][fetch fail] > ${link.host}/${link.path} > ` + err);
   }
}