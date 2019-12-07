import React, { Fragment } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Layout from '../components/Global/Layout';

const noteTemplate = ({ data }) => {
  const { title, date, author, image } = data.mdx.frontmatter;
  const { body } = data.mdx;
  const img = image.childImageSharp.fluid;

  return (
    <Fragment>
      <Layout>
        <div className="article">
          <section className="blogContent note">
            <div>
              <Img fluid={img} />
              <h1>{title}</h1>
              <h5>
                <span>By {author}</span> | <span className="date">{date}</span>
              </h5>
            </div>
            <MDXRenderer>{body}</MDXRenderer>
          </section>
          <aside className="sidebar">
            <div className="sidebarContent">
              <h4 className="title">Latest Updates</h4>
              <ul>
                <li>Do I need NodeJs for Gatsby</li>
              </ul>
            </div>
          </aside>
        </div>
      </Layout>
    </Fragment>
  );
};

export const query = graphql`
  query getNoteSlug($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        date(formatString: "MMMM Do, YYYY")
        author
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
  }
`;
export default noteTemplate;
