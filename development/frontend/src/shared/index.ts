// API
export { fetcher } from "./api/fetcher/fetcher";
export { getHost } from "./api/fetcher/getHost";
export { getPath } from "./api/fetcher/getPath";

// i18n
export { getLocales } from "./i18n/getLocales";

// TYPES
export type { Locale } from './i18n/i18n';
export type { FetcherLinkType, hostNameType, pathNameType, paginationType } from './model/type';
export { paths } from './model/type';

// HELPERS
export { AdaptiveDevice } from './helpers/AdaptiveDevice/AdaptiveDevice';
export { ImagePlaceholder } from "./helpers/ImagePlaceholder/ui/ImagePlaceholder";
export { ImageStrapi } from './helpers/ImageStrapi/ui/ImageStrapi';
export { MediaGallery } from './helpers/MediaGallery/ui/MediaGallery';
export { ImageCustom } from './helpers/ImageCustom/ImageCustom';
export { getDictionary } from './i18n/getDictionary';
