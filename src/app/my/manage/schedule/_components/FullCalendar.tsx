'use client';
import 'moment/locale/ko';
import { isSameDay } from 'date-fns';
import format from 'date-fns/format';
import koLocale from 'date-fns/locale/ko';
import { useState, useCallback } from 'react';
import { Calendar, View, Views, SlotInfo } from 'react-big-calendar';
import {
  localizer,
  formats,
  eventStyleGetter,
  messages,
} from '@/utils/fullCalendarUtils';
import CalendarDetail from './CalendarDetail';
import eventList from './Event';
import ToolBar from './ToolBar';
import { IFullCalendarEvent } from '@/types/types';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '@/styles/fullCalendar.css';

const FullCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<View>(Views.MONTH);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<IFullCalendarEvent[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const onNavigate = useCallback(
    (newDate: Date) => setDate(newDate),
    [setDate],
  );
  const onView = useCallback(
    (newView: View) => {
      setView(newView);
    },
    [setView],
  );

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSelect = (eventOrSlotInfo: IFullCalendarEvent | SlotInfo) => {
    const date =
      (eventOrSlotInfo as IFullCalendarEvent).id !== undefined
        ? eventOrSlotInfo.start
        : eventOrSlotInfo.start;

    setSelectedDate(date);

    const eventsOnSelectedDate = eventList.filter((event) =>
      isSameDay(date, event.start),
    );

    setSelectedEvent(eventsOnSelectedDate);
    setModalIsOpen(true);
  };

  return (
    <div className="relative mx-auto mb-[0.88rem] mt-[1.47rem] w-full max-w-[60.67rem] pr-8">
      <Calendar
        localizer={localizer}
        formats={formats}
        events={eventList}
        onSelectSlot={handleSelect}
        onSelectEvent={handleSelect}
        selectable={true}
        views={['month', 'week', 'day']}
        defaultView={Views.MONTH}
        date={date}
        view={view}
        onView={onView}
        onNavigate={onNavigate}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        drilldownView={null}
        showMultiDayTimes
        popup
        eventPropGetter={eventStyleGetter}
        components={{
          toolbar: ToolBar,
        }}
        style={{ minHeight: '375px', minWidth: '425px', height: 637 }}
      />

      {modalIsOpen && selectedEvent && selectedDate && (
        <CalendarDetail
          closeModal={closeModal}
          events={selectedEvent}
          selectedDate={format(selectedDate, 'yyyy년 MM월 dd일 eeee', {
            locale: koLocale,
          })}
        />
      )}
    </div>
  );
};

export default FullCalendar;
