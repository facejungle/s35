export default ({ env }) => ({
  host: env('HOST', process.env.API_HOST),
  port: env.int('PORT', process.env.API_PORT),
  url: process.env.API_URL,
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
