import React from 'react';

const Calendar = () => {
  const getMonthData = (index) => {
    // { date: '', days: {0: false, 1: false, ... 31: false}}
    // const monthFromStorage = localStorage.getItem('2020-may');
    const monthFromStorage = {
      date: '2020-may',
      days: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false,
        16: false,
        17: false,
        18: false,
        19: false,
        20: false,
        21: false,
        22: false,
        23: false,
        24: false,
        25: false,
        26: false,
        27: false,
        28: false,
        29: false,
        30: false,
      }
    };
    return monthFromStorage;
  };
  const setMonthData = (data /* { dayNumber: todoState } */) => {
    const oldData = getMonthData();
    
  };
  const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
  ];
  let monthIndex = 4;
  const latestCells = Object.keys(getMonthData(5).days).map((key, index) => {
    return <div key={index} id={`day-${index+1}`} className='cell' onClick={(event) => { toggle(event); }} />;
  });
  const toggle = (event) => {
    const day = event.target.id.split('-')[1];
    updateDay(day);
    event.target.innerHTML = event.target.innerHTML ? '' : 'X';
  };
  const updateDay = (dayIndex) => {

  };
  const changeMonth = (i) => {
    if (i === -1 && monthIndex === 0) {
      monthIndex = 11;
    }
    if (i === 1 && monthIndex === 11) {
      monthIndex = 0;
    }
    monthIndex += i;
    latestCells();
  };

  return (
    <div className='calendar'>
      <div className='header'>
        <button className='btn-month prev' onClick={() => { changeMonth(-1); }}>PREV</button>
        <h2>{months[monthIndex]}</h2>
        <button className='btn-month next' onClick={() => { changeMonth(1); }}>NEXT</button>
      </div>
      <div className='cells'>{latestCells}</div>
    </div>
  );
};

export default Calendar;
