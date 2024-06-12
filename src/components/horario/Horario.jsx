import React from 'react'
import Header from '../Header/Header.jsx'
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import './horarioStyle.css'
import dayjs from 'dayjs'
const HorarioSemanal = () => {

  const localizer = dayjsLocalizer(dayjs);
  return (
    <>
        <Header/>
        <Calendar
          localizer={localizer}
          style={{
            height: 500,
            width: 500,
          }}
        />
    </>
  )
}

export default HorarioSemanal