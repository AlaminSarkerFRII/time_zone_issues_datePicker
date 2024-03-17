import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment-timezone';

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const convertToDhakaTime = () => {
      const apiDate = '1999-03-20'; 
      const localDate = moment(apiDate).tz('Asia/Dhaka').toDate(); 
      setSelectedDate(localDate);
    };

    convertToDhakaTime();
  }, []);


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  console.log("apiDate" ,selectedDate)


  return (
    <div>
      <h2>Select a Date</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd-MM-yyyy"
      />
      {selectedDate && <p>Selected date: {selectedDate.toLocaleDateString()}</p>}
    </div>
  );
};

export default MyDatePicker;
