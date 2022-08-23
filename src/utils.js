import { setUser } from "redux/authSlice/auth";
import store from "redux/store";

export const userHandle = (data) => {
  store.dispatch(setUser(data));
};
