import React, { useState, useEffect } from 'react';
import { useConfig } from '../../contexts/ConfigContext';

import { fireworks } from '../../shared/confetti';
import { MONTHS, DAYS_OF_WEEK, getNumDays } from '../../shared/datetime';

import Modal from '../Modal';

const Calendar = ({
  handleModal
}) => {
  const { today, habit, data, positivity, streak, updateConfig, updateStreak } = useConfig();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const getStartDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  const [isWarningModalOpen, setWarningModalOpen] = useState(false);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);

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
      updateConfig(`data.${dateString}`, '', true);
      value = -1;
    } else {
      if (habit && habit.length > 0) {
        updateConfig(`data.${dateString}`, habit);
        value = 1;
        
        event.target.classList.toggle('success');
        setDate(new Date(year, month, event.target.innerText));

        handleModal(isSuccessModalOpen, setSuccessModalOpen);

        if (positivity) {
          fireworks();
        }

        if (month === today.getMonth()) {
          updateStreak(streak + value);
        }
      } else {
        handleModal(isWarningModalOpen, setWarningModalOpen);
      }
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
        <button onClick={() => { setDate(new Date(year, month - 1, day)); }}>&larr;</button>
        <div className='title'>{MONTHS[month]} {year}</div>
        <button onClick={() => { setDate(new Date(year, month + 1, day)); }}>&rarr;</button>
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
      <Modal isOpen={isWarningModalOpen} closeHandler={() => { handleModal(isWarningModalOpen, setWarningModalOpen); }}>
        <h4>Please fill in your habit.</h4>
      </Modal>
      <Modal isOpen={isSuccessModalOpen && positivity} closeHandler={() => { handleModal((isSuccessModalOpen && positivity), setSuccessModalOpen); }} shake={positivity}>
        <h4>Great job!</h4>
        <img src='https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg' alt='cat' />
        <p>Ginger is proud of you.</p>
        <p>See you tomorrow <span role='img' aria-label='flex'>💪</span></p>
      </Modal>
    </div>
  );
};

export default Calendar;
