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
      <h2 className="title">Story Behind DjangoWiki</h2>
      <section className="info">
        <Img fluid={img} />
        <div>
          <h2>I'm Ikenna Gabriel Ifenna</h2>
          <p>
            I develop modern websites and I play well in a team. I am very
            passionate about learning new technologies and writing about my
            mistakes and experiences.
          </p>
          <h2>About DjangoWiki</h2>
          <p>
            I enjoy spending alot of time with my computer figuring things out.
            The first language I used to build anything substantial was Python
            using Django as a framework. You might be thinking that this blog is
            going to be all about Python.
            <p>
              Well, that's not going to be the case. And that does not mean I
              won't write about Python or take on a Python job. As a web
              developer, I enjoyed working with Django and appreciated the fact
              that they took care of the generic stuff in any web application
              (User Authentication, Sessions, User Registration, Databases,
              etc.), making it easier for you to focus on the unique part of
              your project.
              <br />I also loved the fact that Django introduced and encouraged
              the ecosystem to use Django's CBV and GCBV (Class Based Views and
              Generic Class Based Views) in a non-opinionated manner. Although I
              enjoyed working with the FBV(Function Based Views) more. Well,
              with all these said, you might be wondering why I didn't develop
              this blog with Django.
            </p>
            <p>
              Well, it turns out that although working with Django is fun,
              hosting a Django project isn't so fun. I am not talking about
              launching your Django projects on Heroku, but getting your hands
              dirty by hosting your projects on Linode or Digital Ocean. Hosting
              apps on Heroku is pretty straight forward where you don't have to
              setup a webserver(Apache or Nginx) by yourself, SSL, connecting
              databases, in my case I used PostgresSQL.
              <br />
              Hosting my project on Linode is one of those things I am so proud
              of, and I give a huge shout out to the instructor
              <strong>Corey Schafer</strong>
              for his amazing guide.
              <h3>Why Choose Gatsby?</h3>
              I will say this right off the bat, hosting React or Gatsby project
              on netlify is a bliss and so simple that it actually feels
              ridiculous. Not to mention the fact that netlify hosting is
              actually free.
              <br />
              Again, I figured out that JavaScript is a great programming
              language to focus on if I really want to become a fullstack
              developer and earn more. Working with Gatsby introduced me to some
              new technologies I haven't used before like GraphQL, Contentful,
              netlify, etc.
            </p>
          </p>
        </div>
      </section>
    </Fragment>
    // End Info
  );
};

export default Me;
