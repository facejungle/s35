import {getContactsPage} from "@components/StaticPages";
import style from '@components/StaticPages/style/contacts.module.scss';


export default async function PageContacts(): Promise<React.ReactElement> {
    const page = await getContactsPage();
    return (
        <article className={style.contacts}>
            {page.data.attributes.title}
        </article>
    );
}
