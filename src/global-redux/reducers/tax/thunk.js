import axios from "axios";
import { BASE_URL } from "../../../config/constants";
import { setupGetInsuranceNumber } from "./slice";

export const getToken = async (data, thunkAPI) => {
  try {
    let props = await axios.get(
      `${BASE_URL}/api/external/redirect?code=${data?.code}`,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const getCalculationId = async (data, thunkAPI) => {
  try {
    let props = await axios.post(
      `${BASE_URL}/api/external/individualCalculationsGetId?nino=${data?.nino}&token=${data?.token}&taxYear=2024-25&calculationType=in-year`,
      data.headerDto,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
    thunkAPI.dispatch(
      setupGetInsuranceNumber({
        nino: data?.nino,
        token: data?.token,
        calculationId: props?.data?.calculationId,
      })
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const getInsuranceNumber = async (data, thunkAPI) => {
  try {
    let props = await axios.get(
      `${BASE_URL}/api/external/individualCalculations?nino=${data?.nino}&token=${data?.token}&taxYear=2024-25&calculationId=${data?.calculationId}`,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const getObligationDetail = async (data, thunkAPI) => {
  try {
    let props = await axios.get(
      `${BASE_URL}/api/external/getObligationDetail?nino=${data?.nino}&token=${data?.token}`,
      {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
    return props.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};
