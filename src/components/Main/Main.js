// Design: https://www.figma.com/file/PrWnDYzLv8PPxdlV5GauiD/MainScreen?node-id=0%3A1
import React from 'react';

// import AppHeader from '../AppHeader/AppHeader.js';
import Calendar from '../Calendar/Calendar.js';
// import HabitBox from '../HabitBox/HabitBox.js';
// import StatsBox from '../StatsBox/StatsBox.js';

const Main = () => {

  return (
    <div className='main'>
      {/* AppHeader - Motii */}
      <Calendar />
      {/* HabitBox - Read Harry Potter */}
      {/* StatsBox - Streak, Remaining, Missed days */}
    </div>
  );
};

export default Main;
