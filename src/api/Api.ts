import AsyncStorage from "@react-native-async-storage/async-storage";

import { IFavList, TCharactersListPromise } from "../store";

export enum StorageNames {
  FAVORITES = "favorites",
}

export const getDataFromStorage = async (key: string): Promise<any> => {
  try {
    const jsonDataString = await AsyncStorage.getItem(key);
    if (jsonDataString !== null) {
      const data = JSON.parse(jsonDataString);

      return data;
    }

    return null;
  } catch (error) {
    console.log("An error occurred by getting data", error);
    return null;
  }
};

export const setDataToStorage = async (key: string, data: any) => {
  try {
    const jsonDataString = JSON.stringify(data);
    await AsyncStorage.setItem(key, jsonDataString);
  } catch (error) {
    console.log("An error occurred by data saving", error);
  }
};

export const fetchAllCharacters = async (
  page: number
): Promise<TCharactersListPromise | null> => {
  try {
    const response = await fetch(
      `https://swapi.py4e.com/api/people/?page=${page}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch characters");
    }
    const data: TCharactersListPromise = await response.json();
    return data;
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
    return null;
  }
};

export const setFavoriteToAsyncStorage = async (created: IFavList) => {
  try {
    const favorites: IFavList[] | null = await getDataFromStorage(
      StorageNames.FAVORITES
    );

    if (
      favorites &&
      favorites?.findIndex((el) => el.id === created.id) !== -1
    ) {
      await setDataToStorage(
        StorageNames.FAVORITES,
        favorites.filter((el) => el.id !== created.id)
      );

      return;
    } else if (favorites) {
      await setDataToStorage(StorageNames.FAVORITES, [...favorites, created]);
      return;
    }

    await setDataToStorage(StorageNames.FAVORITES, [created]);
  } catch (error) {
    console.error("An error occurred while favorite saving:", error);
    return null;
  }
};
