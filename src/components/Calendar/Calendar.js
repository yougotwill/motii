import React, { useState, useEffect } from 'react';

const Calendar = () => {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_WEEK = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const getStartDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 10 !== 0 && year % 400 === 0);
  };
  const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  return (
    <div className='calendar'>
      <div className='header'>
        <button onClick={() => { setDate(new Date(year, month - 1, day)); }}>Prev</button>
        <div className='title'>{MONTHS[month]} {year}</div>
        <button onClick={() => { setDate(new Date(year, month + 1, day)); }}>Next</button>
      </div>
      <div className='content'>
        {DAYS_OF_WEEK.map((d) => {
          return (
            <div className='day'>
              <strong>{d}</strong>
            </div>
          );
        })}
        {Array(days[month] + (startDay - 1))
          .fill(null)
          .map((_, index) => {
            const d = index - (startDay - 2);
            return (
              
              <div
                key={index}
                className={`
                  day
                  ${d === today.getDay() ? ' today' : ''}
                  ${d === day ? ' selected': ''}
                `}
                onClick={() => { setDate(new Date(year, month, d))}}>
                {d > 0 ? d : ''}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Calendar;
