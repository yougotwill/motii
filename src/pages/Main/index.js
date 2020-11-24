// Design: https://www.figma.com/file/PrWnDYzLv8PPxdlV5GauiD/MainScreen?node-id=0%3A1
import React from 'react';
import { useConfig } from '../../contexts/ConfigContext';

import Calendar from '../../components/Calendar';
import HabitBox from '../../components/HabitBox';
import StatsBox from '../../components/StatsBox';
import About from '../../components/About';

const Main = ({
  handleModal,
}) => {
  const { hideIntro } = useConfig();

  return (
    <div className={hideIntro ? 'main' : 'main full'}>
      <h2 className='banner'>Under construction! <span role='img' aria-label='road block'>🚧</span></h2>
      <Calendar handleModal={handleModal} />
      <HabitBox handleModal={handleModal} />
      <StatsBox handleModal={handleModal} />
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
