import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import charactersSlice from "./charactersSlice.ts";

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
