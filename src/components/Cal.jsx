import React, { useState, useEffect } from "react";
import DatePicker from "react-multi-date-picker";
import { toast } from "react-toastify";
import { CalStyle } from "./CalStyle";

export const Cal = () => {
  const [selectedDates, setSelectedDates] = useState(
    JSON.parse(localStorage.getItem("seat")) || []
  );

  const [values, setValues] = useState([]);
  console.log("values: ", values);

  const handleDateChange = (eDate) => {
    const formattedDates = eDate.map((date) => date.format("DD/MM/YYYY"));
    setValues(formattedDates);
  };

  const handleDoneClick = () => {
    const newRange = [values[0], values[1]];
    const updatedDates = [...selectedDates, newRange];
    console.log("updatedDates: ", updatedDates);

    setSelectedDates(updatedDates);
    localStorage.setItem("seat", JSON.stringify(updatedDates));
    setValues([]);
    toast.success("Date range selected successfully");
  };

  return (
    <CalStyle>
      <DatePicker
        range
        value={values}
        onChange={handleDateChange}
        format="DD/MM/YYYY"
      />
      <button onClick={handleDoneClick}>Done</button>

      {selectedDates.length > 0 && (
        <div>
          <p>Selected Date Ranges:</p>
          <ul>
            {selectedDates.map((range, index) => (
              <li key={index}>{`${range[0]} - ${range[1]}`}</li>
            ))}
          </ul>
        </div>
      )}
    </CalStyle>
  );
};
