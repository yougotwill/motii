// TODO move into modal
import React from 'react';

import Donate from '../../components/Donate/Donate.js';

import { version } from '../../../package.json';

const Settings = ({ handleConfigChange }) => {
  const clearConfig = () => {
    // TODO confirmation
    localStorage.removeItem('config');
    window.location.replace('/');
  };

  const handlePositivity = () => {
    // TODO toggle prop in config
    window.alert('Turning on positivity!');
  };

  return (
    <div className='settings'>
      <div className='panel border'>
        <h2>Settings</h2>
        <div className='setting'>
          <h3>Clear local data</h3>
          <button onClick={clearConfig}>Clear Data</button>
        </div>
        <div className='setting'>
          <h3>Positive reinforcement</h3>
          <button onClick={handlePositivity}>Turn On</button>
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
