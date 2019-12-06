import React, { Fragment } from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const getImage = graphql`
  {
    file(relativePath: { eq: "bg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const Me = () => {
  const response = useStaticQuery(getImage);
  const img = response.file.childImageSharp.fluid;
  //   console.log(response);
  return (
    //   Info
    <Fragment>
      <h2 className="title">Hire Me</h2>
      <section className="info">
        <Img fluid={img} />
        <div>
          <h1>Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in
            dignissimos ea dolores adipisci ullam earum sunt quod perspiciatis,
            ipsa, eos eius nihil omnis. Impedit sint exercitationem cumque quae?
            Magnam.
          </p>
        </div>
      </section>
    </Fragment>
    // End Info
  );
};

export default Me;
