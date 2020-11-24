import React, { useState, useContext } from 'react';

const ConfigContext = React.createContext();

export const useConfig = () => {
  return useContext(ConfigContext);
};

export const ConfigProvider = ({ children }) => { 
  const today = new Date();

  const [habit, setHabit] = useState('');
  const [data, setData] = useState({});
  
  const [theme, setTheme] = useState('');
  const [hideIntro, setHideIntro] = useState(false);
  const [positivity, setPositivity] = useState(false);

  const [streak, setStreak] = useState(0);
  const [missed, setMissed] = useState(0);

  const updateHabit = (value) => {
    setHabit(value);
    updateConfig('habit', value);
    setData({});
  };

  const updateHideIntro = (value) => {
    setHideIntro(value);
    updateConfig('hideIntro', value);
  };

  const updatePositivity = (value) => {
    setPositivity(value);
    updateConfig('positivity', value);
  };

  const updateStreak = (value) => {
    const streakVal = value > 0 ? value : 0;
    setStreak(streakVal);
  };

  const updateMissedDays = (streak) => {
    const missedVal = today.getDate() - streak > 0 ? (today.getDate() - streak) : 0;
    setMissed(missedVal);
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

    setHabit(config.habit);
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
      positivity,
      habit
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

  const value = {
    today,
    habit,
    data,
    theme,
    hideIntro,
    positivity,
    streak,
    missed,
    updateHabit,
    updateSettings,
    updateConfig,
    updateStreak,
    updateHideIntro,
    updatePositivity,
    loadAppData
  };

  return (
    <ConfigContext.Provider value={value}>
      {children}
    </ConfigContext.Provider>
  );
};
