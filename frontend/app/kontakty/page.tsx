import Sidebar from "@/widgets/Sidebar/Sidebar";
import { getContactsPage } from "@/shared/api/pages";
import style from '@shared/styles/pages/contacts.module.css';


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
