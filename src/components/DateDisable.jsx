import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/action";
import { CalendarStyle } from "./CalendarStyle";
import { toast } from "react-toastify";

const { setDate } = actions;

const CalendarTime = () => {
  const [values, setValues] = useState({});

  const { disableDateList } = useSelector((s) => s.dates);

  const disableDateObjects = disableDateList.map(
    (dateString) => new Date(moment(dateString).format("YYYY-MM-DD"))
  );

  const dispatch = useDispatch();

  const disableClick = () => {
    if (!values.date) {
      toast.error("Please select a date.");
    } else {
      const selectedDate = moment(values.date).format("YYYY-MM-DD");

      if (disableDateList.includes(selectedDate)) {
        toast.error("This date is already disabled.");
      } else {
        dispatch(setDate([...disableDateList, selectedDate]));
        setValues({});
        toast.success("Date disabled successfully.");
      }
    }
  };

  return (
    <CalendarStyle>
      <h1>Select a date and click the button to disable that date</h1>
      <Calendar
        className={"REACT-CALENDAR p-2"}
        view="month"
        onClickDay={(date) => {
          setValues({ date: moment(date, "yyyy-MM-dd") });
        }}
        onChange={(date) => setValues({ date })}
        tileDisabled={({ date }) =>
          disableDateObjects.some((disabledDate) =>
            moment(date).isSame(disabledDate, "day")
          )
        }
      />
      <button onClick={disableClick} className="disable-btn">
        Disable Date
      </button>
    </CalendarStyle>
  );
};

export default CalendarTime;
