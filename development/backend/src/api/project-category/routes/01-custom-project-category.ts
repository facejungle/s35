export default {
  routes: [
    {
      method: 'GET',
      path: '/v2/project-categories/:slug',
      handler: 'project-category.v2findOne',
    },
  ]
}
