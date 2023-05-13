// API
export { fetcher } from "./api/fetcher/fetcher";
export { urlHost } from "./api/urlHost/urlHost";
export { urlPath } from "./api/urlPath/urlPath";

// TYPES
export type { Locale } from './i18n/i18n';
export type { FetcherLink, hostName, pathName } from './model/type';
export { paths, hosts } from './model/type';

// HELPERS
export { AdaptiveDevice } from './helpers/AdaptiveDevice/AdaptiveDevice';
export { ImagePlaceholder } from "./helpers/ImagePlaceholder/ui/ImagePlaceholder";
export { ImageStrapi } from './helpers/ImageStrapi/ui/ImageStrapi';
export { MediaGallery } from './helpers/MediaGallery/ui/MediaGallery';
export { ImageCustom } from './helpers/ImageCustom/ImageCustom';
export { getDictionary } from './i18n/getDictionary';
