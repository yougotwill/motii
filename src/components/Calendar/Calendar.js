import React, { useState, useEffect } from 'react';

import { MONTHS, DAYS_OF_WEEK, getNumDays } from '../../shared/constants';

const Calendar = ({
  handleConfigChange,
  data,
  habit,
  today,
  streak,
  updateStreak,
  updateMissedDays
}) => {
  const getStartDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  const isToday = (d) => {
    return year === today.getFullYear() &&
      month === today.getMonth() &&
      d === today.getDate();
  };

  const handleDayClick = (event, d) => {
    // TODO Future days needs a better solution
    const selectedDate = new Date(year, month, d);
    if (selectedDate > today) {
      return;
    }

    const dateString = `${year}-${month}-${event.target.innerText}`;
    let value = 0;
    if (data[dateString]) {
      handleConfigChange(`data.${dateString}`, '', true);
      value = -1;
    } else {
      handleConfigChange(`data.${dateString}`, habit);
      value = 1;
    }
    event.target.classList.toggle('success');
    setDate(new Date(year, month, event.target.innerText));

    if (month === today.getMonth()) {
      updateStreak(streak += value);
    }
  };

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  return (
    <div className='calendar border'>
      <div className='header'>
        <button onClick={() => { setDate(new Date(year, month - 1, day)); }}>Prev</button>
        <div className='title'>{MONTHS[month]} {year}</div>
        <button onClick={() => { setDate(new Date(year, month + 1, day)); }}>Next</button>
      </div>
      <div className='content'>
        {DAYS_OF_WEEK.map((d, index) => {
          return (
            <div
              key={index}
              className='day'>
              <strong>{d}</strong>
            </div>
          );
        })}
        {Array(getNumDays(date)[month] + (startDay > 0 ? (startDay - 1) : (startDay + 6) ))
          .fill(null)
          .map((_, index) => {
            const d = index - ( startDay > 0 ? (startDay - 2) : (startDay + 5) );
            return (
              <div
                key={index}
                className={`day${isToday(d) ? ' today' : ''}${d === day ? ' selected': ''}${data[`${year}-${month}-${d}`] ? ' success' : ''}`}
                onClick={(event) => {
                  handleDayClick(event, d);
                }}>
                {d > 0 ? d : ''}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Calendar;
