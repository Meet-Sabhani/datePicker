import actions from "../action";

const initialState = {
  tripeDaysList: [],
};

const tripeDays = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_TRIPE_DAYS:
      return {
        ...state,
        tripeDaysList: action.data,
      };
    default:
      return state;
  }
};

export default tripeDays;
