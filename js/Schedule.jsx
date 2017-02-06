const React = require('react')

import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import events from './events'
import MapView from './MapView'

BigCalendar.momentLocalizer(moment)

const Schedule = () => {
  let Alert = (event) => {
    alert(event.title)
  }
  return (
    <div className="container calendar-container">
      <BigCalendar
        selectable
        popup
        events={events}
        defaultDate={new Date(2017, 1, 1)}
        onSelectEvent={Alert}
        onView={(Calendar) => { console.log(Calendar.view) }}
      />
      <MapView />
    </div>
  )
}

module.exports = Schedule
