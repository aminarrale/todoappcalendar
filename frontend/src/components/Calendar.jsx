import React from 'react';
import Fullcalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function Calendar() {
  return (
    <div>
      <Fullcalendar
        plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: 'today prev,next', // will normally be on the left. if RTL, will be on the right
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay', // will normally be on the right. if RTL, will be on the left
        }}
        eventClick={
          function(arg){
            alert(arg.event.title)
            alert(arg.event.start) 
          }
        }
        events={[
          { title: 'event 1', date: '2023-01-25', backgroundColor: "red"},
          { title: 'event 2', date: '2023-01-26', backgroundColor: "green"},
          { title: 'event 2', date: '2023-01-27', backgroundColor: "yellow"},
          { title: 'event 2', date: '2023-01-28', backgroundColor: "#000000"},
          { title: 'event 2', date: '2023-01-29', backgroundColor: "blue"},
          { title: 'event 2', date: '2023-01-30', backgroundColor: "pink"},
          { title: 'event 2', date: '2023-01-31', backgroundColor: "purple"},
        ]}
      />
    </div>
  );
}

export default Calendar;