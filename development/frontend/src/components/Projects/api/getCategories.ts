import {fetcher} from "@shared/index";
import {TDProjectCategory} from "../index";


export async function getCategories(): Promise<TDProjectCategory[] | undefined> {
    try {
        return await fetcher({host: 'API', path: 'PROJECTS_CATEGORIES'});
    } catch (err) {
        console.log(`[${process.env.PROJECT_SLUG}][getCategories()] > ` + err);
        return undefined;
    }
}