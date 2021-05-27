import React, { useState, useEffect } from 'react';
import { useConfig } from '../../contexts/ConfigContext';

import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Header = ({ location }) => {
  const { theme, updateConfig, loadAppData } = useConfig();
  const [error, setError] = useState('');
  const history = useHistory();
  const { currentUser, logout } = useAuth();
  const silentRoutes = ['/login', '/signup', '/forgot-password' ,'/privacy'];

  const updateTheme = (themeName) => {
    updateConfig('theme', themeName);
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

  useEffect(() => {
    loadAppData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    let path = 'motii'
    switch(location.pathname) {
      case '/':
        break;
      case '/forgot-password':
        path += ' - password';
        break;
      default:
        path += (' - ' + location.pathname.substring(1, location.pathname.length));
    }
    document.title = path;
  }, [location.pathname]);

  return (
    <div className='header'>
      <Link to='/'>
        <h1><u>motii</u></h1>
      </Link>
      { silentRoutes.indexOf(location.pathname) === -1 ?
        <div className='options'>
          {/* <div className='account'>
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
          </div> */}
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
