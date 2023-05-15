import { Metadata } from 'next';
import { fetcher } from '@shared/index';

export async function getContactData() {
   const contactData = await fetcher({ host: 'API', path: 'CONTACTS' });
   if (contactData.data) {
      return contactData;
   } else {
      return null;
   }
}

export async function getSiteSettingsData() {
   const data = await fetcher({ host: 'API', path: 'SETTINGS' });
   if (!data) {
      return {
         title: 'SEO - Проблема с данными',
         keywords: 'SEO - Проблема с данными',
         description: '404',
      };
   }
   return data;
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
