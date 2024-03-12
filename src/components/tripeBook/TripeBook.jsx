import React, { useState } from "react";
import Calendar from "react-calendar";
import { WeekDayStyle } from "./WeekDayStyle";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import actions from "../../redux/action";
import { toast } from "react-toastify";

const { setTripeDay } = actions;

export const TripeBook = () => {
  const { dayDisableDateList } = useSelector((state) => state.dayDisable);
  console.log("dayDisableDateList: ", dayDisableDateList);

  const disableDateObjects = dayDisableDateList.map(
    (dateString) => new Date(moment(dateString).format("YYYY-MM-DD"))
  );

  const [value, setValue] = useState();
  console.log("value: ", value);

  const vMap =
    Array.isArray(value) &&
    value.map((date) => moment(date).format("YYYY-MM-DD"));
  console.log("vMap: ", vMap);

  const dispatch = useDispatch();
  const { tripeDaysList } = useSelector((state) => state.tripeDays);
  console.log("tripeDaysList: ", tripeDaysList);

  const bookTripe = () => {
    if (!value) {
      toast.error("Please Select Tripe Date Range");
    }
    dispatch(setTripeDay([...tripeDaysList, vMap]));
    toast.success("Tripe Book Successfully");
  };

  return (
    <WeekDayStyle>
      <h1>Select Tripe Dates</h1>
      <Calendar
        selectRange={true}
        minDate={new Date()}
        onChange={(date) => setValue(date)}
        value={value}
        tileDisabled={({ date, view }) =>
          (view === "month" && date.getDay() === 0) ||
          date.getDay() === 6 ||
          (disableDateObjects.length > 0 &&
            disableDateObjects.some((disabledDate) =>
              moment(date).isSame(disabledDate, "day")
            ))
        }
      />
      <button onClick={bookTripe} className="tripe-book-btn">
        bookTripe
      </button>
    </WeekDayStyle>
  );
};
