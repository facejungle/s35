import { apiPaths2, apiURL } from "@shared/api/config";

export async function getContactsPage() {
   const data = await fetch(apiURL(apiPaths2({}).pageContacts));
   if (!data.ok) {
      console.log('Failed to fetch > Contacts Page data | getContactsPage()');
      return null;
   }
   return data.json();
}