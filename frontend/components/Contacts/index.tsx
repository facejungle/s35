import { apiPaths, apiURL } from "@shared/api/config";

type contactPromiseType = {
   default: {
      phone: contactType,
      email: contactType
   },
   phone: contactType[],
   email: contactType[],
}

type contactType = {
   url: string,
   text: string,
   description: string,
   default?: boolean;
}

export async function getContactData(): Promise<contactPromiseType> {
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

   const contactData = await fetch(apiURL(apiPaths.contactsPath)).then((res) => res.json());

   if (contactData.data) {
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
