import {TApiData, TImageData} from "../index";
import {TSeoData} from "@components/MetaSeo";
import {TPageData} from "@components/DynamicPages";


export type TSiteSettingsAttributes = {
    createdAt: string;
    updatedAt: string;
    seo: TSeoData | null;
    frontPage: TPageData;
    projectsPage: TPageData;
    portfolioPage: TPageData;
}
type SiteSettingsData = {
    id: number;
    attributes: TSiteSettingsAttributes;
}
export type TSiteSettingsData = TApiData<SiteSettingsData>;
