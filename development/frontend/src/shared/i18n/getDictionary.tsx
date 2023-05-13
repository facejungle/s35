import { Locale } from './i18n';

const dictionaries = {
   en: () => import('./dictionaries/en.json').then((module) => module.default),
   ru: () => import('./dictionaries/ru.json').then((module) => module.default),
};


export const getDictionary = (locale: Locale) => {
   return !locale || locale == 'ru' ? dictionaries.ru() : dictionaries.en();
};

