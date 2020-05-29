import React from 'react';

const Footer = () => {

  return (
    <footer>
      <div className='sitemap'>
        {/* Routing to index page */}
        <a>Home</a>
        {/* Routing to privacy policy */}
        <a>Privacy</a>
      </div>
      <p>Built with <span role='img' aria-label='coffee'>☕️</span> and <span role='img' aria-label='heart'>❤️</span> by <a href='https://yougotwill.github.io' target='_blank' rel='noopener noreferrer'>William Grant</a></p>
    </footer>
  );
};

export default Footer;
