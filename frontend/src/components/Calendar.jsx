import React from 'react';
import Fullcalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { calendarFormat } from 'moment/moment';

export const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  const handleSelect = (info) => {
    const { start, end, allday } = info;
    const eventNamePrompt = prompt("Enter, event name");
    if (eventNamePrompt) {
      setEvents([
        ...events,
        {
          start,
          end,
          title: eventNamePrompt,
          id: uuid(),
        },
      ]);
    }
  };
  
  return (
    <div>
      <Fullcalendar
        editable
        selectable
        select={handleSelect}
        events={events}
        plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: 'today prev,next', // will normally be on the left. if RTL, will be on the right
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay', // will normally be on the right. if RTL, will be on the left
        }}
        eventClick={
          function(clickInfo){
          if (window.confirm(`Do you want to delete the event '${clickInfo.event.title}'`) == true) {
            clickInfo.event.remove()
            };
          
        }}
    
      />
    </div>
  );
};