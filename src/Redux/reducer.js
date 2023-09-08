import { LOGIN_FAILED, LOGIN_SUCCESS } from "./actionType";

let initState = {
  loggedIn: false,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loggedIn: false,
      };
    default:
      return state;
  }
};
