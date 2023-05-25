/**
 * test controller
 */

import {factories} from '@strapi/strapi'
import {getIdBySlug} from "../../../helpers/getIdBySlug";

const {sanitize} = require('@strapi/utils')
const {contentAPI} = sanitize;

export default factories.createCoreController('api::project-category.project-category', ({strapi}) => ({
  async v2findOne(ctx) {
    const contentType = strapi.contentType('api::project-category.project-category');
    const {slug} = ctx.params;
    const projectId = await getIdBySlug(slug, contentType);

    ctx.params.id = projectId ? projectId : 0;

    const response = await super.findOne(ctx);
    return await contentAPI.output(response, contentType, ctx.state.auth);
  }
}));
