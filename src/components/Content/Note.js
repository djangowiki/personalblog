import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Note = ({ note }) => {
  console.log(note);
  const { title, slug } = note.frontmatter;
  const img = note.frontmatter.image.childImageSharp.fluid;

  return (
    <div className="card">
      <Link to={slug}>
        <Img fluid={img} />
      </Link>
      <h3 className="link">
        <Link to={slug}>{title}</Link>
      </h3>
      <p>{note.excerpt}</p>
      <Link to={slug} className="btn">
        Read more
      </Link>
    </div>
  );
};

export default Note;
