// TODO move into modal
import React from 'react';

const Settings = ({ handleConfigChange }) => {

  return (
    <div className='settings'>
      <h2>Settings</h2>
      <div>
        <h3>Clear local data</h3>
        <button>Clear Data</button>
      </div>
      <div>
        <h3>Positive reinforcement</h3>
        <button>Turn On</button>
      </div>
      <div>
        <h3>See Motii's source code</h3>
        <button>See Source</button>
      </div>
    </div>
  );
};

export default Settings;
