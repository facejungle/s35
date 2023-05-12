export default {
   routes: [
      {
         method: 'GET',
         path: '/v2/portfolio-categories/:slug',
         handler: 'portfolio-category.v2findOne',
      },
      {
         method: 'GET',
         path: '/v2/portfolio-categories',
         handler: 'portfolio-category.v2find',
      },
   ]
}