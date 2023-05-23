import {fetcher, ContactsDataType} from "../index";

export async function getContacts(): Promise<ContactsDataType> {
    const contactsData = await fetcher({host: 'API', path: 'CONTACTS'});
    if (!contactsData) throw new Error(`[getContacts] > Contacts data undefined`);
    return contactsData;
}