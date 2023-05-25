const {sanitize} = require('@strapi/utils')
const {contentAPI} = sanitize;

export async function getIdBySlug(slug, contentType) {
  const project = await strapi.db.query(contentType.uid).findOne({
    select: ['id'],
    where: {slug},
  });

  return project ? project.id : undefined;
}
