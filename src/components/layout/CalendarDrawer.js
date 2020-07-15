import React from 'react';
import { Calendar } from './../Calendar';
import { Suggestions } from './../Suggestions';

export function CalendarDrawer({ suggestions = [] }) {
  return (
    <aside className='CalendarDrawer'>
      <h3>Calendar</h3>
      <Calendar />
      <Suggestions suggestions={suggestions} />
    </aside>
  );
}