import React, { useState } from 'react';

function Calendar() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  // Function to generate the calendar for a specific month and year
  function generateCalendar(year, month) {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();

    const calendar = [];

    // Create empty boxes for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendar.push(<div key={`empty-${i}`} />);
    }

    // Create boxes for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const selectedDate = new Date(year, month, day);
      const isSelected = selectedDate.toDateString() === new Date().toDateString();
      calendar.push(
        <div key={`day-${day}`} className={`text-center py-2 border cursor-pointer ${isSelected ? 'bg-blue-500 text-white' : ''}`}>
          {day}
        </div>
      );
    }

    return (
      <>
        <div className="flex items-center justify-between px-6 py-3 bg-gray-700">
          <button onClick={prevMonth} className="text-white">Previous</button>
          <h2 className="text-white">{monthNames[month]} {year}</h2>
          <button onClick={nextMonth} className="text-white">Next</button>
        </div>
        <div className="grid grid-cols-7 gap-2 p-4">
          {daysOfWeek.map(day => (
            <div key={`day-${day}`} className="text-center font-semibold">{day}</div>
          ))}
          {calendar}
        </div>
      </>
    );
  }

  function prevMonth() {
    setCurrentMonth(prevMonth => prevMonth === 0 ? 11 : prevMonth - 1);
    setCurrentYear(prevMonth => prevMonth === 0 ? currentYear - 1 : currentYear);
  }

  function nextMonth() {
    setCurrentMonth(prevMonth => prevMonth === 11 ? 0 : prevMonth + 1);
    setCurrentYear(prevMonth => prevMonth === 11 ? currentYear + 1 : currentYear);
  }

  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="lg:w-7/12 md:w-9/12 sm:w-10/12 mx-auto p-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {generateCalendar(currentYear, currentMonth)}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
