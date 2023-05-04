export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', process.env.API_PORT),
  url: env('PUBLIC_URL', process.env.API_URL),
  proxy: env.bool('IS_PROXIED', true),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
