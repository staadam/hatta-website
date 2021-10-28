const path = require('path');
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const component = path.resolve(`src/layouts/Article.tsx`);

  const result = await graphql(`
    {
      allDatoCmsArticle {
        nodes {
          title
          id
        }
      }
    }
  `);

  result.data.allDatoCmsArticle.nodes.forEach((node) => {
    const slug = slugify(node.title, { lower: true });
    console.log(slug);
    createPage({
      path: `articles/${slug}`,
      component,
      context: {
        slug,
        id: node.id,
      },
    });
  });
};
