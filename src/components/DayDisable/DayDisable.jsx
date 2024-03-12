import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/action";
import { toast } from "react-toastify";
import { DayDisableStyle } from "./DayDisableStyle";
import { Navbar } from "../navbar/Navbar";

const { setDayDisable } = actions;

const DayDisable = () => {
  const [values, setValues] = useState({});
  console.log("values: ", moment(values.date).format("YYYY-MM-DD"));

  const { dayDisableDateList } = useSelector((state) => state.dayDisable);
  console.log("dayDisableDateList: ", dayDisableDateList);

  const disableDateObjects = dayDisableDateList.map(
    (dateString) => new Date(moment(dateString).format("YYYY-MM-DD"))
  );

  const dispatch = useDispatch();

  const disableClick = () => {
    if (!values.date) {
      toast.error("Please select a date.");
    } else {
      dispatch(
        setDayDisable([
          ...dayDisableDateList,
          moment(values.date).format("YYYY-MM-DD"),
        ])
      );
      setValues({});
      toast.success("Date define holiday successfully.");
    }
  };

  const removeDisable = () => {
    dispatch(setDayDisable([]));
    toast.success("removed all disabled dates");
  };

  // const removeHoliday = () => {
  //   const dateToRemove = moment(values.date).format("YYYY-MM-DD");
  //   console.log("dateToRemove: ", dateToRemove);
  //   const indexToRemove = dayDisableDateList.indexOf(dateToRemove);
  //   console.log("indexToRemove: ", indexToRemove);

  //   if (indexToRemove !== -1) {
  //     const updatedDisableList = [...dayDisableDateList];
  //     updatedDisableList.splice(indexToRemove, 1);

  //     console.log("copyDisableList Before: ", dayDisableDateList);
  //     console.log("Date to Remove: ", dateToRemove);
  //     console.log("Updated Disable List: ", updatedDisableList);
  //   }
  // };

  return (
    <DayDisableStyle>
      <h1>Select a date and click to Define Holiday </h1>
      <Calendar
        onClickDay={(date) => {
          setValues({ date: moment(date, "YYYY-MM-DD") });
        }}
        minDate={new Date()}
        onChange={(date) => setValues({ date })}
        tileDisabled={({ date }) =>
          disableDateObjects.length > 0 &&
          disableDateObjects.some((disabledDate) =>
            moment(date).isSame(disabledDate, "day")
          ) &&
          !moment(date).isSame(moment(values.date), "day")
        }
      />
      <button onClick={disableClick} className="disable-btn">
        Define Holiday
      </button>
      {/* <button onClick={removeHoliday} className="disable-btn">
        remove holiday Disable
      </button> */}
      <button onClick={removeDisable} className="disable-btn">
        remove Disable all
      </button>
    </DayDisableStyle>
  );
};

export default DayDisable;
