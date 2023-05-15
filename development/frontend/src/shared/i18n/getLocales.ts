import { fetcher } from "@shared/index"
import { LocaleType, localeDataType, i18n } from "@i18n/index";


export async function getLocales(): Promise<LocaleType> {
   try {
      const locales: [localeDataType] = await fetcher({ host: 'API', path: 'LOCALES' });

      let apiLocales = {
         locales: [''],
         defaultLocale: ''
      }
      if (locales) {
         locales.map(locale => {
            if (locale.isDefault) apiLocales.defaultLocale = locale.code;
            apiLocales.locales.push(locale.code);
            return {
               defaultLocale: apiLocales.defaultLocale,
               locales: Array.from(new Set(apiLocales.locales)),
            }
         })
      }
   } catch (err) {
      console.log(`Error fetch locale data, using default locale: ${i18n.defaultLocale}
      error: ${err}`);
      return i18n;
   }
   return i18n
}

export default getLocales