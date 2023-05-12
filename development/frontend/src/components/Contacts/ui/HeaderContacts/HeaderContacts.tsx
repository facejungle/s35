import style from './HeaderContacts.module.css';
import Link from 'next/link';
import { getContactsData } from '../..';

export async function HeaderContacts(): Promise<React.ReactElement> {
   const contact = await getContactsData();
   return (
      <>
         <div className="phone">
            {
               <Link href={contact.default.phone.url}>{contact.default.phone.text}</Link>
            }
         </div>
         <div className="email">
            {
               <Link href={contact.default.email.url}>{contact.default.email.text}</Link>
            }
         </div>
      </>
   );
}