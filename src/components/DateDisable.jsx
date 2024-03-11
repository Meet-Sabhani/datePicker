import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/action";
import { CalendarStyle } from "./CalendarStyle";

const { setDate } = actions;

const CalendarTime = () => {
  const [values, setValues] = useState({});
  console.log("values: ", moment(values).format("YYYY-MM-DD"));

  const { disableDateList } = useSelector((s) => s.dates);
  console.log("disableDateList: ", disableDateList);

  const disableDateObjects = disableDateList.map((dateString) =>
    new Date(moment(dateString).format("YYYY-MM-DD")).getDate()
  );

  console.log("disableDateObjects: ", disableDateObjects);

  const dispatch = useDispatch();

  const disableClick = () => {
    dispatch(setDate([...disableDateList, values]));
    setValues("");
  };

  return (
    <CalendarStyle>
      <h1>select Date and click button to disable that date</h1>
      <Calendar
        className={"REACT-CALENDAR p-2"}
        view="month"
        onClickDay={(date) => {
          setValues((prev) => ({ ...prev, date: moment(date, "yyyy-MM-dd") }));
        }}
        onChange={(date) => setValues(date)}
        tileDisabled={({ date }) => disableDateObjects.includes(date.getDate())}
      />
      <button onClick={disableClick} className="disable-btn">
        Disable Date
      </button>
    </CalendarStyle>
  );
};

export default CalendarTime;
