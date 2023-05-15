export const i18n = {
   "locales": [
      "en",
      "ru"
   ],
   "defaultLocale": "ru"
} as const

export type Locale = typeof i18n['locales'][number];

