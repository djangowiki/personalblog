import React from 'react';
import menuItems from '../../constants/menuItems';
import { Link } from 'gatsby';
import logo from '../../images/logo.png';

const Navbar = () => {
  return (
    //   Navigational Menu
    <nav className="menu">
      <ul>
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
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
