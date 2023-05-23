export type {hostNameType, pathNameType, FetcherLinkType, paginationType, sortType} from './model/fetcher';
export {paths, apiUrls} from './model/fetcher';
export {getPath} from './helpers/getPath';
export {getHost} from './helpers/getHost';
export {fetcher} from './helpers/fetcher';

export type {ImageSizesType, ImageFormatsType, ImageDataType} from './model/image';
export {ImageSizes} from './model/image';
export {ImagePlaceholder} from './ui/ImagePlaceholder';
export {ImageStrapi} from './ui/ImageStrapi';
export {MediaGallery} from './ui/MediaGallery/MediaGallery';

export type {SiteSettingsDataType} from './model/settings';
export {getSiteSettings} from "@shared/api/getSiteSettings";

export type {ContactsDataType} from './model/contacts';
export {getContacts} from "./api/getContacts";
export {Contacts} from './ui/Contacts';