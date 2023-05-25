import {fetcher} from "@shared/index";
import {TProjectData} from "../model/type";

export async function getProjectBySlug(projectSlug: string): Promise<TProjectData | undefined> {
    try {
        return await fetcher({host: 'API', path: 'PROJECT_BY_SLUG', slug: projectSlug});
    } catch (err) {
        console.log(`[${process.env.PROJECT_SLUG}][getProjectBySlug()] > ` + err);
        return undefined;
    }
}