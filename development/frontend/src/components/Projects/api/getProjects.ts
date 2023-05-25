import {fetcher} from "@shared/index";
import {TProjectsData} from '../model/type';

export async function getProjects(): Promise<TProjectsData> {
    return await fetcher({host: 'API', path: 'PROJECTS'});
}