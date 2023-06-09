import {fetcher} from "@shared/index";
import {TProjectCatData} from "../model/type";


export async function getCategoryBySlug(categorySlug: string): Promise<TProjectCatData | undefined> {
    try {
        return await fetcher({
            host: 'API',
            path: 'PROJECT_CATEGORY_BY_SLUG',
            slug: categorySlug
        });
    } catch (err) {
        console.log(`[${process.env.PROJECT_SLUG}][getCategoryBySlug()] > ` + err);
        return undefined;
    }
}