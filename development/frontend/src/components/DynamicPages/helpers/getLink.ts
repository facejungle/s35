import {TPageData, TPageParams, TPagesData} from '../model/type';
import {getSiteSettings} from "@/shared";

export async function getDynamicPageLink(data: TPageData["data"]): Promise<string> {
    if (data) {
        const currentPage = data;
        const pageParent = currentPage.attributes.parent.data;

        return pageParent ? `${pageParent.attributes.slug}/${currentPage.attributes.slug}` : currentPage.attributes.slug;
    }
    throw new Error("getDynamicPageLink() > dynamic page data is null");
}


export async function getDynamicPageLinks(data: TPagesData["data"]) {
    if (data) {
        const currentPages = data;
        if (!currentPages) return undefined;
        return currentPages.map(page => {
            if (page) {
                const pageParent = page.attributes.parent.data;
                const pageLink = pageParent ? [pageParent.attributes.slug, page.attributes.slug] : [page.attributes.slug];

                return {
                    slug: pageLink,
                };
            }
        });
    }
    throw new Error("getDynamicPageLinks() > dynamic pages data is null");
}