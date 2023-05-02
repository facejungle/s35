/**
 * test controller
 */

import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::project-category.project-category');
const { sanitize } = require('@strapi/utils')
const { contentAPI } = sanitize;

export default factories.createCoreController('api::project-category.project-category', ({ strapi }) => ({
   async findOneBySlug(ctx) {
      const contentType = strapi.contentType('api::project-category.project-category');

      // Finding a category by slug and getting the project ID.
      const { slug } = ctx.params;
      const category = await strapi.db.query(contentType.uid).findOne({
         select: ['id'],
         where: { slug }
      });

      if (category === null) {
         return
      }

      const sanitizedQueryParams = await contentAPI.query(ctx.query, contentType, ctx.state.auth);
      const entry = await strapi.entityService.findOne(contentType.uid, category.id, sanitizedQueryParams);

      return await contentAPI.output(entry, contentType, ctx.state.auth);
   }
}));