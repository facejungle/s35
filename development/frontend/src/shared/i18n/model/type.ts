import { i18n } from "@i18n/index";

export type LocaleType = {
   defaultLocale: typeof i18n.defaultLocale;
   locales: typeof i18n.locales;
}
export type localeDataType = {
   id: number;
   name: string;
   code: string;
   isDefault: true
}