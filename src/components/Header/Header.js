import React from 'react';

const Header = ({ handleRouteChange, handleConfigChange, theme }) => {
  const updateTheme = (themeName) => {
    handleConfigChange('theme', themeName);
  };

  return (
    <div className='header'>
      <h1>Motii</h1>
      <div className='options'>
        <div className='account'>
          <a onClick={() => handleRouteChange('login')}>Login</a>
          <a onClick={() => handleRouteChange('signup')}>Sign up</a>
        </div>
        <span className='theme' role='img' aria-label={theme ? 'sun' : 'sunglasses'} onClick={() => updateTheme(theme ? '' : 'dark')}>{theme ? '☀️' : '😎'}</span>
      </div>
    </div>
  );
};

export default Header;
