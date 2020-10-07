import React, { useState } from 'react';

import Modal from '../Modal';
import Share from '../Share';

import { MONTHS, getNumDays } from '../../shared/datetime';

const StatsBox = ({
  today,
  missed,
  streak,
  handleModal
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const getRemainingDays = () => {
    return getNumDays(today)[today.getMonth()] - today.getDate();
  };

  return (
    <form className='statsbox'>
      <fieldset className='border'>
        <legend>{MONTHS[today.getMonth()]}'s Stats</legend>
        <div id='streak'>
          <p>Streak</p>
          <h4>{streak} days</h4>
        </div>
        <div id='remaining'>
          <p>Remaining</p>
          <h4>{getRemainingDays()} days</h4>
        </div>
        <div id='missed'>
          <p>Missed</p>
          <h4>{missed} days</h4>
        </div>
        <p className='share-button border' onClick={() => { handleModal(isModalOpen, setModalOpen); }}><b>Share</b></p>
      </fieldset>
      <Modal isOpen={isModalOpen} closeHandler={() => { handleModal(isModalOpen, setModalOpen); }}>
        <Share streak={streak} closeHandler={() => { handleModal(isModalOpen, setModalOpen); }}/>
      </Modal>
    </form>
  );
};

export default StatsBox;
