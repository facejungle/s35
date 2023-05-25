import {apiUrls, THostNames} from "../index";

export function getHost(host?: THostNames): string {
    if (host === 'API') {
        return `${apiUrls.DEFAULT}/api`;
    }
    if (host === 'API_EXT') {
        return `${apiUrls.EXTERNAL}/api`;
    }
    if (host === 'STRAPI') {
        return apiUrls.DEFAULT;
    }
    if (host === 'STRAPI_EXT') {
        return apiUrls.EXTERNAL;
    }
    return apiUrls.DEFAULT;
}