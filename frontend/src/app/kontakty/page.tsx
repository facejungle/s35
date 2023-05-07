import { Sidebar } from "@widgets/index";
import { getContactsPage } from "@components/StaticPages";
import style from '@components/StaticPages/ui/style/contacts.module.css';


export default async function PageContacts(): Promise<React.ReactElement> {
   const page = await getContactsPage();
   return (
      <>
         <article className={style.contacts}>
            {page.data.attributes.title}
         </article>
         <Sidebar />
      </>
   );
}
