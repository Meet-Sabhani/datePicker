import { Button, DatePicker, Flex, Space } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/action";

const { setDate } = actions;

export const DateP = () => {
  const [selectedDate, setSelectedDate] = useState("");
  console.log("selectedDate: ", selectedDate);
  const dispatch = useDispatch();

  const { disableDateList } = useSelector((s) => s.dates);
  console.log("disableDateList: ", disableDateList);

  const handleChange = (date, dateString) => {
    setSelectedDate(moment(dateString).format("DD/MM/YYYY"));
  };

  const disableClick = () => {
    dispatch(setDate([...disableDateList, selectedDate]));
    setSelectedDate("");
  };

  const disabledDate = (currentDate) => {
    const inDisableList = disableDateList.some((disabledDate) =>
      disabledDate.isSame(currentDate, "day")
    );

    return inDisableList;
  };

  return (
    <Flex align="center" vertical justify="center" gap={30}>
      <Flex justify="center" gap={20}>
        <DatePicker onChange={handleChange} disableDate={disabledDate} />
        <Button type="primary" onClick={disableClick}>
          Disable Date
        </Button>
      </Flex>
      <Flex justify="center" gap={10} vertical>
        disable list
        {disableDateList.map((e, i) => (
          <div key={i}>{e}</div>
        ))}
      </Flex>
    </Flex>
  );
};
