import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Header = ({location, handleConfigChange, theme }) => {
  const [error, setError] = useState('');
  const history = useHistory();
  const { currentUser, logout } = useAuth();

  const updateTheme = (themeName) => {
    handleConfigChange('theme', themeName);
  };
  const handleLogout = async () => {
    try {
      setError('');
      await logout();
      history.push('/login');
    } catch(err) {
      setError('Failed to log out');
      console.error(err);
    }
  };

  return (
    <div className='header'>
      <Link to='/'>
        <h1><u>motii</u></h1>
      </Link>
      { location.pathname === '/' ||
        location.pathname === '/settings' || 
        location.pathname === '/account' ?
        <div className='options'>
          <div className='account'>
            {currentUser ?
              <>
              <Link to='/account'>Account</Link>
              <span className='action' onClick={handleLogout}>Log out</span>
              </>
              :
              <>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign Up</Link>
              </>
            }
          </div>
          <span className='theme-toggle' role='img' aria-label={theme ? 'sun' : 'sunglasses'} onClick={() => updateTheme(theme ? '' : 'dark')}>{theme ? '☀️' : '😎'}</span>
          <Link to={location.pathname !== '/settings' ? '/settings' : '/'}><span className='settings-toggle' role='img' aria-label={'gear'}>{location.pathname !== '/settings' ? '⚙️' : '🗓️'}</span></Link>
        </div>
      : null}
      {error &&
        <h2 className='banner'>{error}! <span role='img' aria-label='police light'>🚨</span></h2>
      }
    </div>
  );
};

export default Header;
