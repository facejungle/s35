import {fetcher} from "@/shared";
import {TPagesData} from "@components/DynamicPages";

export async function getPages(): Promise<TPagesData> {
    return await fetcher({host: 'API', path: 'PAGES'});
}