import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../reducers/auth/slice";
import TaxReducer from "../reducers/tax/slice"

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    tax: TaxReducer
  },
});
