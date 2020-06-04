import React from 'react';

const StatsBox = () => {
  return (
    <form className='statsbox'>
      <fieldset className='border'>
        <legend>Stats</legend>
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
      </fieldset>
    </form>
  );
};

export default StatsBox;
