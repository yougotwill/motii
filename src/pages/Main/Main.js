// Design: https://www.figma.com/file/PrWnDYzLv8PPxdlV5GauiD/MainScreen?node-id=0%3A1
import React, { useState } from 'react';

import Calendar from '../../components/Calendar/Calendar.js';
import HabitBox from '../../components/HabitBox/HabitBox.js';
import StatsBox from '../../components/StatsBox/StatsBox.js';
import About from '../../components/About/About.js';

const Main = ({
  handleConfigChange,
  updateStreak,
  updateMissedDays,
  hideIntro,
  today,
  data,
  streak,
  missed
}) => {
  const [habit, setHabit] = useState('Read Harry Potter');

  const calendarProps = {
    data,
    habit,
    today,
    streak,
    updateStreak,
    updateMissedDays
  };

  const statsBoxProps = {
    today,
    missed,
    streak
  };

  return (
    <div className={hideIntro ? 'main' : 'main full'}>
      <Calendar handleConfigChange={handleConfigChange} {...calendarProps} />
      <HabitBox habit={habit} setHabit={setHabit} />
      <StatsBox {...statsBoxProps} />
      {hideIntro ? null :
        <>
          <div className='arrow'>
            <p>__________________</p>
            <p>________________</p>
            <p>______________</p>
            <p>____________</p>
            <p>__________</p>
            <p>________</p>
            <p>______</p>
            <p>____</p>
            <p>__</p>
            <p>_</p>
          </div>
          <About />
        </>
      }
    </div>
  );
};

export default Main;
