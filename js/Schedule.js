const React = require('react')

import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import events from './events'

// require('style-loader!css-loader!../node_modules/react-big-calendar/lib/css/react-big-calendar.css')

// const ScheduleData = {
//   dates: [
//     // {'2017-01-03': [{1: "dog walk"}, {2: 'human walk'}]},
//     // {'2017-01-05': [{5: "dog walk 2"}, {8: 'human walk 2'}]},
//     {day: '2017-01-03', items: [{1: 'dog walk'}, {2: 'human walk'}]},
//     {day: '2017-01-05', items: [{5: 'dog walk 2'}, {8: 'human walk 2'}]}
//   ]
// }

BigCalendar.momentLocalizer(moment)

const Schedule = () => {
  return (
    <div className="container calendar-container">
      <BigCalendar
        events={events}
        defaultDate={new Date(2017, 1, 1)}
      />
    </div>
  )
}

module.exports = Schedule
