import {fetcher, TContactsData} from "../index";

export async function getContacts(): Promise<TContactsData> {
    const contactsData = await fetcher({host: 'API', path: 'CONTACTS'});
    if (!contactsData) throw new Error(`[getContacts] > Contacts data undefined`);
    return contactsData;
}