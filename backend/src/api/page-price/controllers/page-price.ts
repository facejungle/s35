/**
 * test controller
 */

import { factories } from '@strapi/strapi'

const { sanitize } = require('@strapi/utils')
const { contentAPI } = sanitize;

export default factories.createCoreController('api::page-price.page-price', ({ strapi }) => ({
   async v2find(ctx) {
      const contentType = strapi.contentType('api::page-price.page-price');

      const sanitizedQueryParams = await contentAPI.query(ctx.query, contentType, ctx.state.auth);
      const entry = await strapi.entityService.findOne(contentType.uid, 1, sanitizedQueryParams);

      return await contentAPI.output(entry, contentType, ctx.state.auth);
   },
}));