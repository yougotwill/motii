import React from 'react';

const StatsBox = () => {
  return (
    <div className='statsbox border'>
      <h3>Stats</h3>
      <div id='streak'>
        <p>Streak</p>
        <h4>15 days</h4>
      </div>
      <div id='remaining'>
        <p>Remaining</p>
        <h4>15 days</h4>
      </div>
      <div id='missed'>
        <p>Missed</p>
        <h4>15 days</h4>
      </div>
    </div>
  );
};

export default StatsBox;
