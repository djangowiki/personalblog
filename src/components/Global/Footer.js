import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>
        copyright &copy; DjangoWiki {new Date().getFullYear()}. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
