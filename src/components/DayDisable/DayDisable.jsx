import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/action";
import { toast } from "react-toastify";
import { DayDisableStyle } from "./DayDisableStyle";

const { setDayDisable } = actions;

const DayDisable = () => {
  const [values, setValues] = useState({});

  const { dayDisableDateList } = useSelector((s) => s.dates) || [];

  const disableDateObjects = dayDisableDateList?.map(
    (dateString) => new Date(moment(dateString).format("YYYY-MM-DD"))
  );

  const dispatch = useDispatch();

  const disableClick = () => {
    if (!values.date) {
      toast.error("Please select a date.");
    } else {
      const selectedDate = moment(values.date).format("YYYY-MM-DD");
      dispatch(setDayDisable([...dayDisableDateList, selectedDate]));
      setValues({});
      toast.success("Date disabled successfully.");
    }
  };

  const removeDisable = () => {
    dispatch(setDayDisable([]));
    toast.success("removed all disabled dates");
  };

  return (
    <DayDisableStyle>
      <h1>Select a date and click the button to disable that date</h1>
      <Calendar
        className={"REACT-CALENDAR p-2"}
        view="month"
        onClickDay={(date) => {
          setValues({ date: moment(date, "yyyy-MM-dd") });
        }}
        onChange={(date) => setValues({ date })}
        tileDisabled={({ date }) =>
          disableDateObjects &&
          disableDateObjects.length > 0 &&
          disableDateObjects.some((disabledDate) =>
            moment(date).isSame(disabledDate, "day")
          )
        }
      />
      <button onClick={disableClick} className="disable-btn">
        Disable Date
      </button>
      <button onClick={removeDisable} className="disable-btn">
        remove Disable
      </button>
    </DayDisableStyle>
  );
};

export default DayDisable;
