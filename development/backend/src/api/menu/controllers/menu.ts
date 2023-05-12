/**
 * menu controller
 */
import { factories } from '@strapi/strapi'

const { sanitize } = require('@strapi/utils')
const { contentAPI } = sanitize;

export default factories.createCoreController('api::menu.menu', ({ strapi }) => ({
   async v2find(ctx) {
      const contentType = strapi.contentType('api::menu.menu');

      const sanitizedQueryParams = await contentAPI.query(ctx.query, contentType, ctx.state.auth);
      const entities = await strapi.entityService.findMany(contentType.uid, sanitizedQueryParams);

      return await contentAPI.output(entities, contentType, ctx.state.auth);
   }
}));