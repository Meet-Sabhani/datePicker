const actions = {
  SET_DATE: "SET_DATE",
  setDate: (data) => ({
    type: actions.SET_DATE,
    data,
  }),
};

export default actions;
