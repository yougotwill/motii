// Design: https://www.figma.com/file/PrWnDYzLv8PPxdlV5GauiD/MainScreen?node-id=0%3A1
import React, { useState } from 'react';

import Calendar from '../../components/Calendar';
import HabitBox from '../../components/HabitBox';
import StatsBox from '../../components/StatsBox';
import About from '../../components/About';

const Main = ({
  handleModal,
  handleConfigChange,
  updateStreak,
  updateMissedDays,
  hideIntro,
  today,
  data,
  streak,
  missed
}) => {
  const [habit, setHabit] = useState('');

  const calendarProps = {
    data,
    habit,
    today,
    streak,
    updateStreak,
    updateMissedDays,
    handleModal
  };

  const statsBoxProps = {
    today,
    missed,
    streak
  };

  return (
    <div className={hideIntro ? 'main' : 'main full'}>
      <h2 className='banner'>Under construction! 🚧</h2>
      <Calendar handleConfigChange={handleConfigChange} {...calendarProps} />
      <HabitBox habit={habit} setHabit={setHabit} handleModal={handleModal} />
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
