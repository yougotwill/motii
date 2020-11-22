// TODO move into modal
import React from 'react';

import { fireworks } from '../../shared/confetti';

import Donate from '../../components/Donate';

import { version } from '../../../package.json';

const Settings = ({
  handleConfigChange,
  handleHideIntro,
  handlePositivity,
  hideIntro,
  positivity
}) => {
  const clearConfig = () => {
    // TODO confirmation
    localStorage.removeItem('config');
    window.location.replace('/');
  };

  const positivityHandler = () => {
    handlePositivity(!positivity);
    if (!positivity) {
      fireworks();
    }
  };

  const hideIntroHandler= () => {
    handleHideIntro(!hideIntro);
  };

  return (
    <div className='settings border'>
      <div className='panel'>
        <h2>Settings</h2>
        <div className='setting'>
          <h3>Positive reinforcement</h3>
          <input type='checkbox' name='positivity' value={positivity} checked={positivity} onChange={positivityHandler} />
        </div>
        <div className='setting'>
          <h3>Hide explanation</h3>
          <input type='checkbox' name='hideIntro' value={hideIntro} checked={hideIntro} onChange={hideIntroHandler} />
        </div>
        <div className='setting'>
          <h3>Want to request a feature?</h3>
          <a href='https://github.com/yougotwill/motii/issues/new?labels=enhancement&template=feature_request.md' target='_blank' rel='noopener noreferrer'><button>Feature Request</button></a>
        </div>
        <div className='setting'>
          <h3>Found a problem or bug?</h3>
          <a href='https://github.com/yougotwill/motii/issues/new?labels=bug&template=bug_report.md' target='_blank' rel='noopener noreferrer'><button>Report Issue</button></a>
        </div>
        <div className='setting'>
          <h3>See source code</h3>
          <a href='https://github.com/yougotwill/motii' target='_blank' rel='noopener noreferrer'><button>View Code</button></a>
        </div>
        <div className='setting'>
          <h3>Clear app data</h3>
          <button onClick={clearConfig}>Clear Data</button>
        </div>
    		<Donate />
        <p className='version'>v{version}</p>
      </div>
    </div>
  );
};

export default Settings;
