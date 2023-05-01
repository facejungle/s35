import { Metadata } from 'next';
import { apiURL, apiPaths } from '@shared/api/config';

export async function getContactData() {
   const contactData = await fetch(apiURL(apiPaths.contactsPath)).then((res) => res.json());
   if (contactData.data) {
      return contactData;
   } else {
      return null;
   }
}

export async function getSiteSettingsData() {
   const data = await fetch(apiURL(apiPaths.settingsPath));
   if (!data.ok) {
      console.log('Failed to fetch > site settings data | getSiteSettingsData()');
      return null;
   }
   const siteSettingsData = await data.json();
   if (siteSettingsData.data && siteSettingsData.data !== null) {
      return siteSettingsData;
   } else {
      return null;
   }
}

export function getSeo(seo: Metadata) {
   if (seo === null) {
      return {
         title: 'SEO - Проблема с данными',
         keywords: 'SEO - Проблема с данными',
         description: '404',
      };
   }
   const titleMeta = seo.title || 'SEO - Проблема с данными';
   const descriptionMeta = seo.description || 'SEO - Проблема с данными';
   const keywordsMeta = seo.keywords || '404';
   return {
      title: titleMeta,
      keywords: keywordsMeta,
      description: descriptionMeta,
   };
}
