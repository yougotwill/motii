import React, { useState, useRef } from 'react';

import Editable from '../Editable';

const HabitBox = ({ habit, setHabit, handleModal }) => {
  const [text, setText] = useState(habit);
  const inputRef = useRef();

  const changeHandler = (agree) => {
    if (agree) {
      setHabit(text);
    } else {
      setText(habit);
    }
  };

  return (
    <form className='habitbox'>
      <fieldset className='border'>
        <legend>Habit</legend>
        <Editable
          text={text}
          placeholder='Enter your habit here'
          type='input'
          childRef={inputRef}
          yesHandler={() => { changeHandler(true); }}
          noHandler={() => { changeHandler(false); }}
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
    </form>
  );
};

export default HabitBox;
