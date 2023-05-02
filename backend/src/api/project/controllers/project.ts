/**
 * Project controller
 */

import { factories } from '@strapi/strapi'

const { sanitize } = require('@strapi/utils')
const { contentAPI } = sanitize;

export default factories.createCoreController('api::project.project', ({ strapi }) => ({
   async findOneBySlug(ctx) {
      const contentType = strapi.contentType('api::project.project');

      // Finding a project by slug and getting the project ID.
      const { slug } = ctx.params;
      const project = await strapi.db.query(contentType.uid).findOne({
         select: ['id'],
         where: { slug }
      });

      const sanitizedQueryParams = await contentAPI.query(ctx.query, contentType, ctx.state.auth);
      const entry = await strapi.entityService.findOne(contentType.uid, project.id, sanitizedQueryParams);

      return await contentAPI.output(entry, contentType, ctx.state.auth);
   }
}));
