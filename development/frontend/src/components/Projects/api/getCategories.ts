import {fetcher} from "@shared/index";
import {TProjectCatsData} from "../index";


export async function getCategories(): Promise<TProjectCatsData | undefined> {
    try {
        return await fetcher({host: 'API', path: 'PROJECTS_CATEGORIES'});
    } catch (err) {
        console.log(`[${process.env.PROJECT_SLUG}][getCategories()] > ` + err);
        return undefined;
    }
}