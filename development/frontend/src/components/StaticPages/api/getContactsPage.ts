import {fetcher} from "@shared/index";
import {Metadata} from "next";
import {notFound} from "next/navigation";


interface contactsPagePromise extends Metadata {
    data: any;
    slug?: string;
    image?: {};
}

export async function getContactsPage(): Promise<contactsPagePromise> {
    const page = await fetcher({host: 'API', path: 'PAGE_CONTACTS'});
    if (!page) return notFound();

    return page;
}