import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  withRouter
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './styles/App.scss';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main';
import Privacy from './pages/Privacy';
import Settings from './pages/Settings';

import Header from './components/Header';
import Footer from './components/Footer';

const App = (props) => {
  const today = new Date();

  const toggleModal = (modalState, modalHandler) => {
    modalHandler(!modalState);
  };

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
    handleModal: toggleModal,
    handleConfigChange: updateConfig,
    updateStreak: setStreak,
    updateMissedDays: updateMissedDays,
    hideIntro,
    today,
    data,
    streak,
    missed,
    positivity
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
            <Helmet>
              <title>motii - login</title>
            </Helmet>
            <Login />
          </Route>
          <Route path='/signup'>
            <Helmet>
              <title>motii - signup</title>
            </Helmet>
            <Signup />
          </Route>
          <Route path='/privacy'>
              <Helmet>
              <title>motii - privacy</title>
            </Helmet>
            <Privacy />
          </Route>
          <Route path='/settings'>
            <>
              <Helmet>
                <title>motii - settings</title>
              </Helmet>
              <Settings {...settingsProps} />
              <Footer />
            </>
          </Route>
          <Route path='/'>
            <>
              <Helmet>
                <title>motii</title>
              </Helmet>
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
