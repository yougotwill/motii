import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  withRouter
} from 'react-router-dom';

import './styles/App.scss';

import Login from './pages/Login/Login.js';
import Signup from './pages/Signup/Signup.js';
import Main from './pages/Main/Main.js';
import Privacy from './pages/Privacy/Privacy.js';
import Settings from './pages/Settings/Settings.js';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

const App = (props) => {
  const today = new Date();

  const [theme, setTheme] = useState('');
  const [data, setData] = useState({});
  const [streak, setStreak] = useState(0);
  const [missed, setMissed] = useState(0);

  const updateStreak = (value) => {
    const streakVal = value > 0 ? value : 0;
    setStreak(streakVal);
  };

  const updateMissedDays = (streak) => {
    const missedVal = today.getDate() - streak > 0 ? (today.getDate() - streak) : 0;
    setMissed(missedVal);
  };

  const loadConfig = () => {
    let config = JSON.parse(localStorage.getItem('config'));
    if (!config) { return {}; }

    // load properties
    config.data ? setData(config.data) : setData({});
    const streakVal = config.data ? Object.keys(config.data).filter((key) => {
        return Number(key.split('-')[1]) === today.getMonth();
      }).length : 0;
    updateStreak(streakVal);
    updateMissedDays(streakVal);

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

  const HeaderWithRouter = withRouter(Header);

  const mainProps = {
    handleConfigChange: updateConfig,
    updateStreak: setStreak,
    updateMissedDays: updateMissedDays,
    today: today,
    data: data,
    streak: streak,
    missed: missed
  };

  useEffect(() => {
    loadConfig();
  }, []);

  return (
    <BrowserRouter>
      <div className='app'>
        <HeaderWithRouter handleConfigChange={updateConfig} theme={theme} />
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/privacy'>
            <Privacy />
          </Route>
          <Route path='/settings'>
            <>
              <Settings handleConfigChange={updateConfig} />
              <Footer />
            </>
          </Route>
          <Route path='/'>
            <>
              <Main {...mainProps} />
              <Footer />
            </>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
