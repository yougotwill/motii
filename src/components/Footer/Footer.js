import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <footer>
      <div className='sitemap'>
        <Link to='/'>Home</Link>
        <Link to='/privacy'>Privacy</Link>
      </div>
      <p>Built with <span role='img' aria-label='coffee'>☕️</span> and <span role='img' aria-label='heart'>❤️</span> by <a href='https://yougotwill.github.io' target='_blank' rel='noopener noreferrer'>William Grant</a></p>
    </footer>
  );
};

export default Footer;
