export type {
  IFavoriteList as IFavList,
  TCharactersListPromise,
  ICharacter,
} from "./types";

export * from "./hooks";

export {
  setServerData,
  setCurrentPage,
  setLoading,
  resetFavorites,
  setInputSearchText,
  setFavoriteList,
} from "./charactersSlice";
