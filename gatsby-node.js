exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const {
    data: {
      allMdx: { edges: notes },
    },
  } = await graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);
  notes.forEach(({ node }) => {
    const { slug } = node.frontmatter;
    createPage({
      path: slug,
      component: require.resolve('./src/templates/note-template.js'),
      context: {
        slug: slug,
      },
    });
  });
};
