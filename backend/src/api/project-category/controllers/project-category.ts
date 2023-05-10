/**
 * test controller
 */

import { factories } from '@strapi/strapi'
const { sanitize } = require('@strapi/utils')
const { contentAPI } = sanitize;

export default factories.createCoreController('api::project-category.project-category', ({ strapi }) => ({
   async v2findOne(ctx) {
      const contentType = strapi.contentType('api::project-category.project-category');

      // Finding a category by slug and getting the project ID.
      const { slug } = ctx.params;
      const category = await strapi.db.query(contentType.uid).findOne({
         select: ['id'],
         where: { slug }
      });

      const sanitizedQueryParams = await contentAPI.query(ctx.query, contentType, ctx.state.auth);
      const entry = await strapi.entityService.findOne(contentType.uid, category.id, sanitizedQueryParams);

      return await contentAPI.output(entry, contentType, ctx.state.auth);
   },
   async v2find(ctx) {
      const contentType = strapi.contentType('api::project-category.project-category');

      const sanitizedQueryParams = await contentAPI.query(ctx.query, contentType, ctx.state.auth);
      const entities = await strapi.entityService.findMany(contentType.uid, sanitizedQueryParams);

      return await contentAPI.output(entities, contentType, ctx.state.auth);
   }
}));