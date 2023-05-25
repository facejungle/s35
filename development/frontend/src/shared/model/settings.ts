import {TApiData, TImageData} from "../index";

export type TSiteSettingsAttributes = {
    title: string;
    description: string;
    image: TImageData;
}
type SiteSettingsData = {
    id: number;
    attributes: TSiteSettingsAttributes;
}
export type TSiteSettingsData = TApiData<SiteSettingsData>;
