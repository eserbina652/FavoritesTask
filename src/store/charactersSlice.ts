import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ICharactersSliceState,
  IFavoriteList,
  TCharactersListPromise,
} from "./types";

const initialState: ICharactersSliceState = {
  serverData: null,
  charactersList: [],
  filteredCharactersList: [],
  currentPage: 1,
  loading: false,
  inputSearchText: "",
  favoriteList: [],
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setServerData: (state, payload: PayloadAction<TCharactersListPromise>) => {
      state.serverData = payload.payload;
      state.charactersList = payload.payload.results;
    },
    setCurrentPage: (state, payload: PayloadAction<number>) => {
      state.currentPage = payload.payload;
    },
    setLoading: (state, payload: PayloadAction<boolean>) => {
      state.loading = payload.payload;
    },
    resetFavorites: (state) => {
      state.favoriteList = [];
    },
    setInputSearchText: (state, payload: PayloadAction<string>) => {
      state.loading = true;
      state.inputSearchText = payload.payload;
      if (payload.payload === "") {
        state.filteredCharactersList = state.charactersList;
      } else {
        state.filteredCharactersList = state.charactersList.filter(
          (character) =>
            character.name.toLowerCase().includes(payload.payload.toLowerCase())
        );
      }

      state.loading = false;
    },
    setFavoriteList: (state, payload: PayloadAction<IFavoriteList[]>) => {
      state.favoriteList = payload.payload;
    },
  },
});

export const {
  setServerData,
  setCurrentPage,
  setLoading,
  resetFavorites,
  setInputSearchText,
  setFavoriteList,
} = charactersSlice.actions;

export default charactersSlice.reducer;
