import { urlHost, urlPath } from "@/shared";
import { urlType } from "@/shared/model/type";

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