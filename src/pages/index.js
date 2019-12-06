import React from 'react';
import Layout from '../components/Global/Layout';
import Hero from '../components/Home/Hero';
import Stacks from '../components/Home/Stacks';
import { graphql, useStaticQuery } from 'gatsby';
import NoteList from '../components/Content/NoteList';
import Me from '../components/Home/Me';

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
      <Hero />
      <Stacks />
      <NoteList notes={notes} />
      <Me />
    </Layout>
  );
};
