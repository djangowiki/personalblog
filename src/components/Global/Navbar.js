import React from 'react';
import menuItems from '../../constants/menuItems';
import { Link } from 'gatsby';

const Navbar = () => {
  return (
    //   Navigational Menu
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">
            <h1>DjangoWiki</h1>
          </Link>
        </li>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
    //   End Navigation
  );
};

export default Navbar;
