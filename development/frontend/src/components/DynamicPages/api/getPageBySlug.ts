import {TPageData} from "@components/DynamicPages";
import {fetcher} from "@/shared";

export async function getPageBySlug(slug: string): Promise<TPageData> {
    return await fetcher({host: 'API', path: 'PAGE_BY_SLUG', slug: slug});
}