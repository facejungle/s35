import { Locale, i18n } from '@i18n/i18n';

const dictionaries = {
   en: () => import('./dictionaries/en.json').then((module) => module.default),
   ru: () => import('./dictionaries/ru.json').then((module) => module.default),
};

export async function getDictionary(locale: Locale) {
   if (i18n.locales.includes(locale)) {
      return dictionaries[locale]();
   }
   return dictionaries[i18n.defaultLocale]()
}