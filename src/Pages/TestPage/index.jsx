import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const TestPage = ()=>{
  const myStyle = {
    padding: '100px 20px 0px 20px',
  };
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return <div style={myStyle}>
  <p>Hello</p>
  <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
      />
  </div>
}
export default TestPage;