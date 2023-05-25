import {TApiData, TImageData} from "../index";

export type TEmailData = {
    id: number;
    url: string;
    description: string;
    text: string;
    default: boolean;
}
export type TPhoneData = {
    id: number;
    url: string;
    description: string;
    text: string;
    default: boolean;
}
export type TSocialData = {
    id: number;
    url: string;
    text: string;
    image: TImageData;
}
export type TContactsAttributes = {
    name: string;
    email: [TEmailData];
    phone: [TPhoneData];
    social: [TSocialData];
}
type ContactsData = {
    id: number;
    attributes: TContactsAttributes;
}
export type TContactsData = TApiData<ContactsData>;