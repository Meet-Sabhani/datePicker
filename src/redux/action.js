const actions = {
  SET_DAY_DISABLE: "SET_DAY_DISABLE",
  SET_TRIPE_DAYS: "SET_TRIPE_DAYS",
  setDayDisable: (data) => ({
    type: actions.SET_DAY_DISABLE,
    data,
  }),
  setTripeDay: (data) => ({
    type: actions.SET_TRIPE_DAYS,
    data,
  }),
};

export default actions;
