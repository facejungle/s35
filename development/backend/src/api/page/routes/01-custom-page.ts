export default {
   routes: [
      {
         method: 'GET',
         path: '/v2/pages/:slug',
         handler: 'page.v2findOne',
      },
      {
         method: 'GET',
         path: '/v2/pages',
         handler: 'page.v2find',
      },
   ]
}