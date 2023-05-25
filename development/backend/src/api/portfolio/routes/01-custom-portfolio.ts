export default {
  routes: [
    {
      method: 'GET',
      path: '/v2/portfolio/:slug',
      handler: 'portfolio.v2findOne',
    },
  ]
}
