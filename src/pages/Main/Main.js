// Design: https://www.figma.com/file/PrWnDYzLv8PPxdlV5GauiD/MainScreen?node-id=0%3A1
import React from 'react';

import Calendar from '../../components/Calendar/Calendar.js';
import HabitBox from '../../components/HabitBox/HabitBox.js';
import StatsBox from '../../components/StatsBox/StatsBox.js';
import About from '../../components/About/About.js';
import Footer from '../../components/Footer/Footer.js';

const Main = ({
  handleConfigChange,
  updateStreak,
  updateMissedDays,
  today,
  data,
  streak,
  missed
}) => {
  const habit = 'Read Harry Potter'; // TODO Fix logic

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
    <div className='main'>
      <Calendar handleConfigChange={handleConfigChange} {...calendarProps} />
      <HabitBox />
      <StatsBox {...statsBoxProps} />
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
      <Footer />
    </div>
  );
};

export default Main;
