import React, { useState, useEffect, useRef } from 'react';

import Editable from '../Editable';
import Modal from '../Modal';

const HabitBox = ({
  habit,
  updateHabit,
  handleModal,
  handleConfigChange
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [text, setText] = useState('');
  const inputRef = useRef();

  const changeHandler = (agree) => {
    if (agree) {
      updateHabit(text);
    } else {
      setText(habit);
    }
    handleModal(isModalOpen, setModalOpen);
  };

  useEffect(() => {
    if (habit) {
      setText(habit);
    }
  }, [habit]);

  return (
    <form className='habitbox'>
      <fieldset className='border'>
        <legend>Habit</legend>
        <Editable
          text={text}
          placeholder='Enter your habit here'
          type='input'
          childRef={inputRef}
          isModalOpen={isModalOpen}
          setModalOpen={setModalOpen}
          handleModal={handleModal}
        >
          <input
            ref={inputRef}
            type='text'
            name='habit'
            placeholder='Enter your habit'
            value={text}
            onChange={(event) => { setText(event.target.value); }}
          />
        </Editable>
      </fieldset>
      <Modal isOpen={isModalOpen} setModalOpen={setModalOpen} closeHandler={() => { changeHandler(false); }}>
        <h3>Changing habits?</h3>
        <p>This will clear your streak</p>
        <button className='dialog-button' onClick={() => { changeHandler(true); }}>Yes</button>
        <button className='dialog-button' onClick={() => { changeHandler(false); }}>No</button>
      </Modal>
    </form>
  );
};

export default HabitBox;
