import React, { useRef } from 'react';

import Editable from '../Editable/Editable.js';

const HabitBox = ({ habit, setHabit }) => {
  const inputRef = useRef();
  return (
    <form className='habitbox'>
      <fieldset className='border'>
        <legend>Habit</legend>
        <Editable
          text={habit}
          placeholder='Enter your habit'
          type='input'
          childRef={inputRef}
        >
          <input
            ref={inputRef}
            type='text'
            name='habit'
            placeholder='Enter your habit'
            value={habit}
            onChange={(event) => { setHabit(event.target.value); }}
          />
        </Editable>
      </fieldset>
    </form>
  );
};

export default HabitBox;
