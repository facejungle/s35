import {fetcher, TSiteSettingsData} from "../index";

export async function getSiteSettings(): Promise<TSiteSettingsData> {
    const siteSettings = await fetcher({host: 'API', path: 'SETTINGS'});
    if (!siteSettings) throw new Error(`[getSiteSettings] > Site settings data undefined`);
    return siteSettings;
}