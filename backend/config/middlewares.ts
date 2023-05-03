export default [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  // {
  //   name: 'strapi::cors',
  //   config: {
  //     enabled: true,
  //     headers: '*',
  //     origin: ['http://localhost', 'http://localhost:1337', 'http://localhost/strapi', 'http://backend:1337']
  //   }
  // },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
