// TODO move into modal
import React, { useState } from 'react';
import { useConfig } from '../../contexts/ConfigContext';

import { fireworks } from '../../shared/confetti';

import Donate from '../../components/Donate';
import Modal from '../../components/Modal';

import { version } from '../../../package.json';

const Settings = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { hideIntro, positivity, updateHideIntro, updatePositivity } = useConfig();

  const positivityHandler = () => {
    updatePositivity(!positivity);
    if (!positivity) {
      fireworks();
    }
  };

  const hideIntroHandler= () => {
    updateHideIntro(!hideIntro);
  };
   
  const handleModal = (modalState, modalHandler) => {
    modalHandler(!modalState);
  };

  const changeHandler = (agree) => {
    if (agree) {
      localStorage.removeItem('config');
      window.location.replace('/');
    }
    handleModal(isModalOpen, setModalOpen);
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
          <button onClick={() => { handleModal(isModalOpen, setModalOpen); } }>Clear Data</button>
        </div>
    		<Donate />
        <p className='version'>v{version}</p>
      </div>
      <Modal isOpen={isModalOpen} setModalOpen={setModalOpen} closeHandler={() => { changeHandler(false); }}>
        <h3>Clear data?</h3>
        <p>Delete your settings and habit data?</p>
        <p>This action cannot be undone.</p>
        <button className='dialog-button' onClick={() => { changeHandler(true); }}>Yes</button>
        <button className='dialog-button' onClick={() => { changeHandler(false); }}>No</button>
      </Modal>
    </div>
  );
};

export default Settings;
