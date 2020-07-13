// Design: https://www.figma.com/file/PrWnDYzLv8PPxdlV5GauiD/MainScreen?node-id=0%3A1
import React from 'react';

import { getNumDays } from '../../shared/constants';

import Calendar from '../Calendar/Calendar.js';
import Header from '../Header/Header.js';
import HabitBox from '../HabitBox/HabitBox.js';
import StatsBox from '../StatsBox/StatsBox.js';

const Main = ({ handleRouteChange, handleConfigChange, setStreak, setMissed, today, data, streak, missed, theme }) => {

  const habit = 'Read Harry Potter'; // TODO Fix logic

  const getRemaining = () => {
    return getNumDays(today)[today.getMonth()] - today.getDate();
  };

  const calendarProps = {
    habit,
    today,
    streak,
    setMissed,
    setStreak
  };

  const statsBoxProps = {
    today,
    getRemaining,
    missed,
    streak
  };

  return (
    <div className='main'>
      <Header handleRouteChange={handleRouteChange} handleConfigChange={handleConfigChange} theme={theme} />
      <Calendar handleConfigChange={handleConfigChange} data={data} {...calendarProps} />
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
    </div>
  );
};

export default Main;
