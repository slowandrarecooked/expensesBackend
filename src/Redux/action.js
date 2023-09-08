import axios from "axios";
import { LOGIN_FAILED, LOGIN_SUCCESS } from "./actionType";
export const handleLogged = (payload) => async (dispatch) => {
  try {
    const { email, password } = payload;
    let res = await axios.get(`http://localhost:8000/users`);
    res.data.forEach((element) => {
      if (email === element.email && password === element.password) {
        alert("logged in");
        dispatch({ type: LOGIN_SUCCESS });
      }
    });
  } catch (error) {
    dispatch({ type: LOGIN_FAILED });
  }
};
