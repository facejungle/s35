import {fetcher, TSiteSettingsData} from "../index";

export async function getSiteSettings(): Promise<TSiteSettingsData> {
    return await fetcher({host: 'API', path: 'SETTINGS'});
}