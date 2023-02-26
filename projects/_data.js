export default {
  layout: "project.tmpl.js",
  type: "project",
  vocabulary: "entry",
  url: (page) => `/projects/${page.src.slug}/`,
};
