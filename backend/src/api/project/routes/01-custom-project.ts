export default {
   routes: [
      {
         method: 'GET',
         path: '/projects/slug/:slug',
         handler: 'project.findOneBySlug',
         config: {
            auth: false
         },
      }
   ]
}