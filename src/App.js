import React, { useState, useEffect } from 'react';

import './styles/App.scss';

import Login from './components/Login/Login.js';
import Signup from './components/Signup/Signup.js';
import Main from './components/Main/Main.js';
import About from './components/About/About.js';
import Footer from './components/Footer/Footer.js';

const App = (props) => {
  const [route, setRoute] = useState();
  const [theme, setTheme] = useState('');

  const loadConfig = () => {
    let config = JSON.parse(localStorage.getItem('config'));
    if (!config) {
      return {};
    }
    setTheme(config.theme);
    document.querySelector('body').className = '';
    if (config.theme) {
      document.querySelector('body').classList.add(config.theme);
    }
    return config;
  };
  const updateConfig = (property, value) => {
    const config = {
      theme: theme,
    };
    if (config[property] === value) {
      return;
    }
    config[property] = value;
    localStorage.setItem('config', JSON.stringify(config));
    loadConfig();
  };
  useEffect(() => {
    loadConfig();
  }, []);

  return (
    <div className='app'>
      {(() => {
        switch(route) {
          case 'login':
            return <Login />;
          case 'signup':
            return <Signup />
          default:
            return (
              <div>
                <Main handleRouteChange={setRoute} handleConfigChange={updateConfig} theme={theme} />
                <About />
                <Footer />
              </div>
              );
        }
      })()}
    </div>
  );
};

export default App;
