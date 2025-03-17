import axios from "axios";
import { BASE_URL } from "../../../config/constants";

export const login = async (data, thunkAPI) => {
  try {
    let props = await axios.post(`${BASE_URL}/api/user/authenticate`, {
      nino: data?.nino,
      username: data?.email,
      password: data?.password,
    });
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const register = async (data, thunkAPI) => {
  try {
    let props = await axios.post(`${BASE_URL}/api/user/addUser`, {
      username: data?.email,
      password: data?.password,
      nino: data?.nino,
    });
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};
