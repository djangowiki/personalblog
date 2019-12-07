import React, { Fragment } from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const getImage = graphql`
  {
    file(relativePath: { eq: "me.jpg" }) {
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
          <h2>I'm Gabriel Ikenna</h2>
          <p>
            I develop modern websites and I play well in a team. I am very
            passionate about learning new technologies and writing about my
            mistakes and experiences.
          </p>
          <h2>About DjangoWiki</h2>
          <p>
            I enjoy spending alot of time with my computer figuring things out.
            The first language I used to build anything substantial was Python
            using Django as a framework. As you rightly guessed, my site is
            going to be all about Python.
            <p>
              Well, that's not going to be the case. I enjoyed working with
              Django and I loved the fact that Django makes life a lot easier
              for you. It's as though Django doesn't do enough, then the
              developers of Django encouraged the ecosystem to use Django's CBV
              and GCBV (Class Based Views and Generic Class Based Views).
            </p>
            <p>
              As you might thought, I should have developed this blog using
              Django. Actually, I did, hosted it on Linode using Apache web
              server. But I must confess, hosting a Django project is not fun.
              Compared to hosting this blog on netlify, hosting Django apps
              can't be done by a beginner without any help.
            </p>
            <p></p>
          </p>
        </div>
      </section>
    </Fragment>
    // End Info
  );
};

export default Me;
