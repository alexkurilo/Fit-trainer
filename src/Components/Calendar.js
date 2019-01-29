import React from 'react';
import { render } from 'react-dom';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once
 
let today = new Date();

render(
  <InfiniteCalendar
    width={300}
    height={450}
    selected={today}
    disabledDays={[0,6]}
  />,
  document.getElementById('root')
);