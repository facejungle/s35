export default {
   routes: [
      {
         method: 'GET',
         path: '/v2/project-categories/:slug',
         handler: 'project-category.findOneBySlug',
      },
      {
         method: 'GET',
         path: '/v2/project-categories',
         handler: 'project-category.findMany',
      },
   ]
}