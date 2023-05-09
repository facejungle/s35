export default {
   routes: [
      {
         method: 'GET',
         path: '/v2/projects/:slug',
         handler: 'project.findOneBySlug',
      },
      {
         method: 'GET',
         path: '/v2/projects',
         handler: 'project.findMany',
      },
   ]
}