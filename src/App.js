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
  const [hideIntro, setHideIntro] = useState(false);
  const [positivity, setPositivity] = useState(false);

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

  const updateHideIntro = (value) => {
    setHideIntro(value);
    updateConfig('hideIntro', value);
  };

  const updatePositivity = (value) => {
    setPositivity(value);
    updateConfig('positivity', value);
  };

  const updateSettings = (property, value) => {
    if (value !== null) {
      switch (property) {
        case 'hideIntro':
          setHideIntro(value);
          break;
        case 'positivity':
          setPositivity(value);
          break;
        case 'theme':
          setTheme(value);
          document.querySelector('body').className = value;
          break;
        default:
          break;
      }
    }
  };

  const loadAppData = (existingConfig) => {
    let config = existingConfig ? existingConfig : JSON.parse(localStorage.getItem('config'));
    if (!config) { return {}; }

    config.data ? setData(config.data) : setData({});
    const streakVal = config.data ? Object.keys(config.data).filter((key) => {
        return Number(key.split('-')[1]) === today.getMonth();
      }).length : 0;
    updateStreak(streakVal);
    updateMissedDays(streakVal);

    updateSettings('hideIntro', config.hideIntro);
    updateSettings('positivity', config.positivity);
    updateSettings('theme', config.theme);

    return config;
  };

  const updateConfig = (property, value, clear=false) => {
    const config = {
      data,
      theme,
      hideIntro,
      positivity
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
    return loadAppData(config);
  };

  const HeaderWithRouter = withRouter(Header);

  const mainProps = {
    handleConfigChange: updateConfig,
    updateStreak: setStreak,
    updateMissedDays: updateMissedDays,
    hideIntro,
    today,
    data,
    streak,
    missed
  };

  const settingsProps = {
    handleConfigChange: updateConfig,
    handleHideIntro: updateHideIntro,
    handlePositivity: updatePositivity,
    hideIntro,
    positivity
  };

  useEffect(() => {
    loadAppData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <Settings {...settingsProps} />
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
