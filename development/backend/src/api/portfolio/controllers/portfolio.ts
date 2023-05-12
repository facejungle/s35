/**
 * portfolio controller
 */

import { factories } from '@strapi/strapi'

const { sanitize } = require('@strapi/utils')
const { contentAPI } = sanitize;

export default factories.createCoreController('api::portfolio.portfolio', ({ strapi }) => ({
   async v2findOne(ctx) {
      const contentType = strapi.contentType('api::portfolio.portfolio');

      // Finding a portfolio by slug and getting the portfolio ID.
      const { slug } = ctx.params;
      const portfolio = await strapi.db.query(contentType.uid).findOne({
         select: ['id'],
         where: { slug }
      });

      const sanitizedQueryParams = await contentAPI.query(ctx.query, contentType, ctx.state.auth);
      const entry = await strapi.entityService.findOne(contentType.uid, portfolio.id, sanitizedQueryParams);

      return await contentAPI.output(entry, contentType, ctx.state.auth);
   },
   async v2find(ctx) {
      const contentType = strapi.contentType('api::portfolio.portfolio');

      const sanitizedQueryParams = await contentAPI.query(ctx.query, contentType, ctx.state.auth);
      const entities = await strapi.entityService.findMany(contentType.uid, sanitizedQueryParams);

      return await contentAPI.output(entities, contentType, ctx.state.auth);
   }
}));