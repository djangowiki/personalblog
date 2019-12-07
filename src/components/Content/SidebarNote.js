import React from 'react';
import { Link } from 'gatsby';

const SidebarNote = ({ note }) => {
  const { title, slug } = note.frontmatter;
  return (
    <p>
      <Link to={slug}>{title}</Link>
    </p>
  );
};
export default SidebarNote;
