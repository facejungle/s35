export default {
   routes: [
      {
         method: 'GET',
         path: '/v2/projects/:slug',
         handler: 'project.v2findOne',
      },
      {
         method: 'GET',
         path: '/v2/projects',
         handler: 'project.v2find',
      },
   ]
}