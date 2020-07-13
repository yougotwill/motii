import React, { useState, useEffect } from 'react';

import { getNumDays } from './shared/constants';

import './styles/App.scss';

import Login from './components/Login/Login.js';
import Signup from './components/Signup/Signup.js';
import Main from './components/Main/Main.js';
import About from './components/About/About.js';
import Footer from './components/Footer/Footer.js';

const App = (props) => {
  const today = new Date();
  console.log('Today is', today);

  const [route, setRoute] = useState();
  const [theme, setTheme] = useState('');
  const [data, setData] = useState({});
  const [streak, setStreak] = useState(0);
  const [missed, setMissed] = useState(0);

  const loadConfig = () => {
    let config = JSON.parse(localStorage.getItem('config'));
    if (!config) {
      return {};
    }
    config.data ? setData(config.data) : setData({});

    const streakVal = Object.keys(config.data).filter((key) => {
      return Number(key.split('-')[1]) === today.getMonth();
    }).length;
    setStreak(streakVal);
    const missedVal = today.getDate() - streak - 1 > 0 ? today.getDate() - streak - 1 : 0;
    setMissed(missedVal);

    setTheme(config.theme);
    document.querySelector('body').className = '';
    if (config.theme) {
      document.querySelector('body').classList.add(config.theme);
    }
    return config;
  };
  const updateConfig = (property, value, clear=false) => {
    const config = {
      theme: theme,
      data: data
    };
    const props = property.split('.');
    if (props.length > 1) {
      if (config[props[0]][props[1]] === value) {
        return;
      }
      if (clear) {
        delete config[props[0]][props[1]];
      } else {
        config[props[0]][props[1]] = value;
      }
    } else {
      if (config[property] === value) {
        return;
      }
      if (clear) {
        delete config[property];
      } else {
        config[property] = value;
      }
    }
    localStorage.setItem('config', JSON.stringify(config));
    return loadConfig();
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
                <Main
                  handleRouteChange={setRoute}
                  handleConfigChange={updateConfig}
                  setStreak={setStreak}
                  setMissed={setMissed}
                  today={today}
                  data={data}
                  streak={streak}
                  missed={missed}
                  theme={theme}
                />
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
