const readingTime = require("reading-time");
/**
 * Read the documentation (https://docs.strapi.io/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  beforeCreate(event) {
    const { data } = event.params;
    const { content } = data;
    if (content && content?.length > 0) {
      data.readingTime = readingTime(content)?.text || null;
    }
  },
  beforeUpdate(event) {
    const { data } = event.params;
    const { content } = data;
    if (content && content?.length > 0) {
      data.readingTime = readingTime(content)?.text || null;
    }
  },

  afterCreate(event) {
    const { data } = event.params;
    const { content } = data;
    if (content && content?.length > 0) {
      data.readingTime = readingTime(content)?.text || null;
    }
  },
};
