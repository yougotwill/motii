import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ handleConfigChange, theme }) => {
  const updateTheme = (themeName) => {
    handleConfigChange('theme', themeName);
  };

  return (
    <div className='header'>
      <Link to='/'>
        <h1>Motii</h1>
      </Link>
      <div className='options'>
        <div className='account'>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
        </div>
        <span className='theme' role='img' aria-label={theme ? 'sun' : 'sunglasses'} onClick={() => updateTheme(theme ? '' : 'dark')}>{theme ? '☀️' : '😎'}</span>
      </div>
    </div>
  );
};

export default Header;
