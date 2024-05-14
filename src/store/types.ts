export interface ICharacter {
  name: string;
  gender: string;
  birth_year: string;
  height: string;
  mass: string;
  hair_color: string;
  eye_color: string;
  skin_color: string;
  homeworld: string;
  created: string;
  edited: string;
  url: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  isChosen?: boolean;
  id?: string;
}

export type TCharactersList = ICharacter[];

export type TCharactersListPromise = {
  count: number;
  next: string | null;
  previous: string | null;
  results: TCharactersList;
};

export interface IFavoriteList {
  gender: string;
  id: string;
}

export interface ICharactersSliceState {
  serverData: TCharactersListPromise | null;
  charactersList: TCharactersList;
  favoriteList: IFavoriteList[];
  currentPage: number;
  loading: boolean;
  filteredCharactersList: TCharactersList;
  inputSearchText: string;
}
