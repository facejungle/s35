import {ImageDataType} from "../index";

export type ContactsDataType = {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    email: [
        {
            id: number;
            url: string;
            description: string;
            text: string;
            default: boolean;
        }
    ],
    phone: [
        {
            id: number;
            url: string;
            description: string;
            text: string;
            default: boolean;
        }
    ],
    social: [{
        id: number;
        url: string;
        text: string;
        image: ImageDataType;
    }]
} | undefined;