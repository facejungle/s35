import {getPages, TPageParams} from "@components/DynamicPages";
import {getDynamicPageLinks} from "@components/DynamicPages/helpers/getLink";
import {getPageBySlug} from "@components/DynamicPages/api/getPageBySlug";
import {notFound} from "next/navigation";


export default async function DynamicPage({params}: { params: TPageParams }): Promise<React.ReactElement> {
    const slug = params.slug.pop();
    if (slug) {
        const page = await getPageBySlug(slug);
        if (page) return <>{page.data?.attributes.slug}</>;
    }
    return notFound();
}

export async function generateStaticParams() {
    const pages = await getPages();
    if (!pages.data) return notFound();
    return pages.data.map(page => {
        if (page) {
            const pageParent = page.attributes.parent.data;
            const pageLink = pageParent ? [pageParent.attributes.slug, page.attributes.slug] : [page.attributes.slug];

            return {
                slug: pageLink,
            };
        }
    });
}