import {fetcher} from "@/shared";
import {TProjectSettings} from "../index";

export async function getProjectSettings(): Promise<TProjectSettings | undefined> {
    try {
        return await fetcher({host: 'API', path: 'PROJECT_SETTINGS'});
    } catch (err) {
        console.log(`[${process.env.PROJECT_SLUG}][getProjectSettings()] > ` + err);
        return undefined;
    }
}

export default getProjectSettings