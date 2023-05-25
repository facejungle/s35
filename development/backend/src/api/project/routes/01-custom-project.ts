export default {
  routes: [
    {
      method: 'GET',
      path: '/v2/projects/:slug',
      handler: 'project.v2findOne',
    },
  ]
}
