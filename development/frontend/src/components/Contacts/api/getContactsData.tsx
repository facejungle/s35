import { contactType, contactPromiseType } from '../model/types';
import { fetcher } from '@shared/index';

export async function getContactsData(): Promise<contactPromiseType> {
   let defaultPhone: contactType = {
      url: '',
      text: 'default phone',
      description: ''
   };
   let defaultEmail: contactType = {
      url: '',
      text: 'default phone',
      description: ''
   };
   let phones: contactType[] = [{
      url: '',
      text: 'no phones',
      description: ''
   }];
   let emails: contactType[] = [{
      url: '',
      text: 'no emails',
      description: ''
   }];

   const contactData = await fetcher({ host: 'API', path: 'CONTACTS' });
   if (contactData) {
      phones = contactData.data.attributes.phone;
      emails = contactData.data.attributes.email;
      if (phones && Array.isArray(phones) && phones[0] !== null) {
         phones.map((phone: contactType) => {
            if (phone.default === true) {
               defaultPhone = {
                  url: phone.url || '',
                  text: phone.text || 'default phone',
                  description: phone.description || '',
                  default: true
               }
            }

         });
      }
      if (emails && Array.isArray(emails) && emails[0] !== null) {
         emails.map((email: contactType) => {
            if (email.default === true) {
               defaultEmail = {
                  url: email.url || '',
                  text: email.text || 'default email',
                  description: email.description || '',
                  default: true
               }
            }
         });
      }
      return {
         default: {
            phone: defaultPhone,
            email: defaultEmail,
         },
         phone: phones,
         email: emails,
      };
   } else {
      return {
         default: {
            phone: defaultPhone,
            email: defaultEmail,
         },
         phone: phones,
         email: emails,
      };
   }
}