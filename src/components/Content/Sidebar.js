import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SidebarNote from '../Content/SidebarNote';

const Sidebar = () => {
  const response = useStaticQuery(query);
  const notes = response.allMdx.edges;
  console.log(notes);
  return (
    <aside className="sidebar">
      <div className="sidebarContent">
        <h4 className="title">Latest Updates</h4>
        <ul>
          <li>
            {notes.map(({ node }, index) => {
              return <SidebarNote note={node} key={index} />;
            })}
          </li>
        </ul>
      </div>
    </aside>
  );
};

export const query = graphql`
  query {
    allMdx(limit: 8, sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
export default Sidebar;
