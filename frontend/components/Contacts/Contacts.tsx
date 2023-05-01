import style from './contacts.module.css';
import Link from 'next/link';
import { getContactData } from '.';

export default async function HeaderContacts(): Promise<React.ReactElement> {
   const contact = await getContactData();
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