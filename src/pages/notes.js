import React from 'react';
import Layout from '../components/Global/Layout';
import NoteList from '../components/Content/NoteList';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/Global/SEO';

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
      <SEO title="Notes" description="Let's become fullstack together" />
      <NoteList notes={notes} />
    </Layout>
  );
};
