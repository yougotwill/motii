// TODO move into modal
import React from 'react';

import Donate from '../../components/Donate/Donate.js';

import { version } from '../../../package.json';

const Settings = ({
  handleConfigChange,
  handleHideIntro,
  hideIntro,
  handlePositivity,
  positivity
}) => {
  const clearConfig = () => {
    // TODO confirmation
    localStorage.removeItem('config');
    window.location.replace('/');
  };

  const positivityHandler = () => {
    handlePositivity(!positivity);
    // TODO
    window.alert('Toggling positivity!');
  };

  const hideIntroHandler= () => {
    handleHideIntro(!hideIntro);
  };

  return (
    <div className='settings border'>
      <div className='panel'>
        <h2>Settings</h2>
        <div className='setting'>
          <h3>Clear local data</h3>
          <button onClick={clearConfig}>Clear Data</button>
        </div>
        <div className='setting'>
          <h3>Positive reinforcement</h3>
          <input type='checkbox' name='positivity' value={positivity} checked={positivity} onChange={positivityHandler} />
        </div>
        <div className='setting'>
          <h3>Hide Motii introduction</h3>
          <input type='checkbox' name='hideIntro' value={hideIntro} checked={hideIntro} onChange={hideIntroHandler} />
        </div>
        <div className='setting'>
          <h3>See source code</h3>
          <a href='https://github.com/yougotwill/motii' target='_blank' rel='noopener noreferrer'><button>View Code</button></a>
        </div>
    		<Donate />
        <p className='version'>v{version}</p>
      </div>
    </div>
  );
};

export default Settings;
