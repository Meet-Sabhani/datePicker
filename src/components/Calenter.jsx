import moment from "moment";
import React, { useState } from "react";
import { Calendar } from "react-multi-date-picker";

export default function Calenter() {
  const reserved = [
    ["2024/03/07", "2024/03/09"],
    ["2024/03/21", "2024/03/25"],
  ];

  const initialValue = [...reserved];

  function isReserved(strDate) {
    return reserved.some(([start, end]) => strDate >= start && strDate <= end);
  }

  const [values, setValues] = useState(initialValue);

  return (
    <>
      <Calendar
        multiple
        range
        value={values}
        onChange={(ranges) => {
          console.log("ranges: ", ranges);
          const isClickedOutsideUnAvailbleDates = initialValue.every(
            ([start, end]) =>
              ranges.some(
                (range) =>
                  range[0]?.format?.() === start && range[1]?.format?.() === end
              )
          );

          if (!isClickedOutsideUnAvailbleDates) return false;

          setValues(ranges);
        }}
        mapDays={({ date }) => {
          let className;
          const strDate = date.format();

          if (isReserved(strDate)) className = "reserved";
          if (className) return { className };
        }}
      />
    </>
  );
}
