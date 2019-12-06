import React from 'react';
import Layout from '../components/Global/Layout';
import NoteList from '../components/Content/NoteList';
import { graphql, useStaticQuery } from 'gatsby';

const getPosts = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            author
            date
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`;

export default () => {
  const response = useStaticQuery(getPosts);
  const notes = response.allMdx.edges;
  return (
    <Layout>
      <NoteList notes={notes} />
    </Layout>
  );
};
