import React from 'react';

import { MONTHS, getNumDays } from '../../shared/datetime';

const StatsBox = ({
  today,
  missed,
  streak,
}) => {
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
      </fieldset>
    </form>
  );
};

export default StatsBox;
