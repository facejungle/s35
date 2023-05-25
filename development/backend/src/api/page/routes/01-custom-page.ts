export default {
  routes: [
    {
      method: 'GET',
      path: '/v2/pages/:slug',
      handler: 'page.v2findOne',
    },
  ]
}
