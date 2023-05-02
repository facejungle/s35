export default {
   routes: [
      {
         method: 'GET',
         path: '/project-categories/slug/:slug',
         handler: 'project-category.findOneBySlug',
         config: {
            auth: false
         },
      }
   ]
}