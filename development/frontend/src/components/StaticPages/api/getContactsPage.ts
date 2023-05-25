import {fetcher} from "@shared/index";
import {Metadata} from "next";
import {notFound} from "next/navigation";


interface contactsPagePromise extends Metadata {
    data: any;
    image?: {};
}

export async function getContactsPage(): Promise<contactsPagePromise> {
    const page = await fetcher({host: 'API', path: 'PAGE_CONTACTS'});
    console.log(page)
    if (!page) return notFound();

    return page;
}