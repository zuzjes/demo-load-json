const json = require("./pages.json");

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    out = {
      "/": { page: "/" }
    };
    json.map(el => {
      out[`/${el.slug}`] = { page: "/[slug]", query: { slug: el.slug } };
    });
    return out;
  }
};
