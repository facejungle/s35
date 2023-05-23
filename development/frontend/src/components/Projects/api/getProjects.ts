import {fetcher} from "@shared/index";
import {TDProject} from '../model/type';

export async function getProjects(): Promise<TDProject[] | undefined> {
    try {
        return await fetcher({host: 'API', path: 'PROJECTS'});
    } catch (err) {
        console.log(`[${process.env.PROJECT_SLUG}][getProjects()] > ` + err);
        return undefined;
    }
}