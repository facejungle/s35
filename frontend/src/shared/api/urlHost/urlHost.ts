import { urlHostType } from "@/shared/model/type";

export const urlHost = (host: urlHostType) => {
   if (host === 'api') return `${process.env.API_URL || 'http://localhost:1337'}/api`;
   if (host === 'apiExt') return `${process.env.API_EXT_URL || 'http://localhost:1337'}/api`;
   if (host === 'apiProxy') return `${process.env.PROXY_URL || 'http://localhost:1337'}/api`;
   if (host === 'strapi') return `${process.env.API_URL || 'http://localhost:1337'}`;
   if (host === 'strapiExt') return `${process.env.API_EXT_URL || 'http://localhost:1337'}`;
   throw new SyntaxError('urlHost: host unknown');
}