import {fetcher, TContactsData} from "../index";

export async function getContacts(): Promise<TContactsData> {
    return await fetcher({host: 'API', path: 'CONTACTS'});
}