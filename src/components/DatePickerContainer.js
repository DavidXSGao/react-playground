import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// https://reactdatepicker.com/
function DatePickerContainer() {
  const [date, setDate] = useState(null);

  // minDate - Date
  // maxDate - Date
  // date.getDay() !== 6 && date.getDay() !== 0 checking for weekends
  return (
    <>
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        dateFormat="dd/MM/yyyy"
        filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
        isClearable
        showMonthDropdown
        scrollableMonthDropdown
        showYearDropdown
        scrollableYearDropdown
      />
    </>
  );
}

export default DatePickerContainer;
