
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment-timezone'; // Import moment-timezone

const DatePicker_02 = () => {
  const [apiDate, setApiDate] = useState('1999-03-20'); // Assuming date format from your API
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    if (apiDate) {
      const dhakaDate = moment(apiDate).tz('Asia/Dhaka').toDate(); // Convert to Asia/Dhaka time zone
      setSelectedDate(dhakaDate);
    }
  }, [apiDate]); // Run this effect whenever apiDate changes

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setApiDate(null);
  };

  return (
    <div>
      <h2>Select a Date</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd-MM-yyyy"
        placeholderText="Select date"
      />
      {!apiDate && selectedDate && <p>Selected date: {selectedDate.toLocaleDateString()}</p>}
    </div>
  );
};

export default DatePicker_02;
