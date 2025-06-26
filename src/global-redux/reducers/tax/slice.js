import { toast } from "react-toastify";
import {
  getToken,
  getCalculationId,
  getInsuranceNumber,
  getObligationDetail,
} from "./thunk";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isNinoInCorrect: false,
  code: sessionStorage.getItem("code") || "",
  token: sessionStorage.getItem("token") || "",
  calculationId: sessionStorage.getItem("calculationId") || "",
  hmrc: JSON.parse(sessionStorage.getItem("hmrc")) || {},
  obligation: JSON.parse(sessionStorage.getItem("obligation")) || [],
};

export const setupGetToken = createAsyncThunk(
  "tax/getToken",
  async (data, thunkAPI) => {
    return getToken(data, thunkAPI);
  }
);

export const setupGetCalculationId = createAsyncThunk(
  "tax/getCalculationId",
  async (data, thunkAPI) => {
    return getCalculationId(data, thunkAPI);
  }
);

export const setupGetInsuranceNumber = createAsyncThunk(
  "tax/getInsuranceNumber",
  async (data, thunkAPI) => {
    return getInsuranceNumber(data, thunkAPI);
  }
);

export const setupGetObligationDetail = createAsyncThunk(
  "tax/getObligationDetail",
  async (data, thunkAPI) => {
    return getObligationDetail(data, thunkAPI);
  }
);

export const slice = createSlice({
  name: "tax",
  initialState,
  reducers: {
    handleSetCode: (state, action) => {
      state.code = action.payload;
      sessionStorage.setItem("code", action.payload);
    },
  },
  extraReducers: (builder) => {
    // Get Token
    builder
      .addCase(setupGetToken.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupGetToken.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.token = payload || "";
        sessionStorage.setItem("token", payload);
      })
      .addCase(setupGetToken.rejected, (state) => {
        state.loading = false;
        toast.error("An error has occurred. Please try again later.");
      });
    // Get Calculation ID
    builder
      .addCase(setupGetCalculationId.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupGetCalculationId.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.calculationId = payload?.calculationId || "";
        sessionStorage.setItem("calculationId", payload?.calculationId);
        state.isNinoInCorrect = false;
      })
      .addCase(setupGetCalculationId.rejected, (state) => {
        state.loading = false;
        state.isNinoInCorrect = true;
      });
    // Get Insurance Number
    builder
      .addCase(setupGetInsuranceNumber.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupGetInsuranceNumber.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.hmrc = payload || {};
        sessionStorage.setItem("hmrc", JSON.stringify(payload));
        state.isNinoInCorrect = false;
      })
      .addCase(setupGetInsuranceNumber.rejected, (state) => {
        state.loading = false;
        toast.error("An error has occurred. Please try again later.");
        state.isNinoInCorrect = true;
      });
    // Get Obligation Detail
    builder
      .addCase(setupGetObligationDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupGetObligationDetail.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.obligation = payload?.obligations || [];
        sessionStorage.setItem(
          "obligation",
          JSON.stringify(payload?.obligations)
        );
      })
      .addCase(setupGetObligationDetail.rejected, (state) => {
        state.loading = false;
        toast.error("An error has occurred. Please try again later.");
      });
  },
});

export const { handleSetCode } = slice.actions;

export default slice.reducer;
