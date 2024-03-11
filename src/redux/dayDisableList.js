import actions from "./action";

const initialState = {
  dayDisableDateList: [],
};

const dayDisable = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_DAY_DISABLE:
      return {
        ...state,
        dayDisableDateList: action.data,
      };
    default:
      return state;
  }
};

export default dayDisable;
