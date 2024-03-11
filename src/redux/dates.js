import actions from "./action";

const initialState = {
  disableDateList: [],
};

const dates = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_DATE:
      return {
        ...state,
        disableDateList: action.data,
      };
    default:
      return state;
  }
};

export default dates;
