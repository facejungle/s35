import {fetcher} from "@shared/index";
import {notFound} from "next/navigation";
import {TFrontPageData} from "@components/StaticPages";


export async function getFrontPage() {
    const page: TFrontPageData = await fetcher({host: 'API', path: 'PAGE_FRONT'});
    if (!page) return notFound();
    return page
}