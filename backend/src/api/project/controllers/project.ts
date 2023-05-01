/**
 * test controller
 */

import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::project.project');
export default factories.createCoreController('api::project.project', ({ strapi }) => ({
   async findOneBySlug(ctx) {
      const { slug } = ctx.params;
      const entity = await strapi.db.query('api::project.project').findOne({
         where: { slug }
      });
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
   }
}));
