import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({location, handleConfigChange, theme }) => {
  const updateTheme = (themeName) => {
    handleConfigChange('theme', themeName);
  };

  return (
    <div className='header'>
      <Link to='/'>
        <h1><u>motii</u></h1>
      </Link>
      { location.pathname === '/' || location.pathname === '/settings' ?
        <div className='options'>
          <div className='account'>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign Up</Link>
          </div>
          <span className='theme-toggle' role='img' aria-label={theme ? 'sun' : 'sunglasses'} onClick={() => updateTheme(theme ? '' : 'dark')}>{theme ? '☀️' : '😎'}</span>
          <Link to={location.pathname !== '/settings' ? '/settings' : '/'}><span className='settings-toggle' role='img' aria-label={'gear'}>{location.pathname !== '/settings' ? '⚙️' : '🗓️'}</span></Link>
        </div>
      : null}
    </div>
  );
};

export default Header;
