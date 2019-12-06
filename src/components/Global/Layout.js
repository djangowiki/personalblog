import React from 'react';
import '../../css/layout.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="siteWrapper">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
