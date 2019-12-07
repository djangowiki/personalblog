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

  // // total number of notes
  // const totalNotes = notes;
  // // notes per page
  // const notesPerPage = 2;
  // // Get How Many Pages
  // const numPages = Math.ceil(totalNotes.length / notesPerPage);
  // // Array from
  // Array.from({ length: numPages }).forEach((_, i) => {
  //   createPage({
  //     path: i === 0 ? `/notes` : `/notes/${i + 1}`,
  //     component: require.resolve('./src/templates/note-template.js'),
  //     context: {
  //       limit: notesPerPage,
  //       skip: i * notesPerPage,
  //       numPages,
  //       currentPage: i + 1,
  //     },
  //   });
  // });
  // console.log(pages);
};
