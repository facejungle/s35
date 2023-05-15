import { hostNameType } from "@shared/index";
import config from '@shared/config.json';

export function getHost(host?: hostNameType): string {
   const API_HOSTS = config.API_HOSTS;
   if (host === 'API') {
      return `${API_HOSTS.DEFAULT}/api`;
   }
   if (host === 'API_EXT') {
      return `${API_HOSTS.EXTERNAL}/api`;
   }
   if (host === 'STRAPI') {
      return API_HOSTS.DEFAULT;
   }
   if (host === 'STRAPI_EXT') {
      return API_HOSTS.EXTERNAL;
   }
   return API_HOSTS.DEFAULT;
}