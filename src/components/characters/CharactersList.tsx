import React, { useEffect, useMemo } from "react";
import { FlatList, ListRenderItem, Text, View } from "react-native";

import { StyledActivityIndicator } from "../StyledActivityIndicator.tsx";
import { StorageNames, getDataFromStorage } from "../../api/Api.ts";
import { SearchComponent } from "./SearchComponent.tsx";
import { CharactersListItem } from "./CharactersListItem.tsx";
import { styles } from "./styles/charactersListStyles.ts";
import { Pagination } from "./Pagination.tsx";
import {
  useAppDispatch,
  useAppSelector,
  ICharacter,
  setFavoriteList,
} from "../../store";

export const CharactersList: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.characters.loading);
  const favoriteList = useAppSelector((state) => state.characters.favoriteList);
  const charactersList = useAppSelector(
    (state) => state.characters.charactersList
  );

  const inputSearchText = useAppSelector(
    (state) => state.characters.inputSearchText
  );

  const searchedData = useAppSelector(
    (state) => state.characters.filteredCharactersList
  );

  const getFavorites = async () => {
    const storageFavoriteList = await getDataFromStorage(
      StorageNames.FAVORITES
    );
    if (storageFavoriteList) {
      dispatch(setFavoriteList(storageFavoriteList));
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

  const renderItem: ListRenderItem<ICharacter> = ({ item }) => {
    return <CharactersListItem item={item} getFavorites={getFavorites} />;
  };

  const renderContent = useMemo(() => {
    if (isLoading) {
      return <StyledActivityIndicator />;
    }
    if (inputSearchText && !searchedData.length) {
      return (
        <View style={styles.nothingFoundContainer}>
          <Text style={styles.nothingFoundText}>Nothing was found</Text>
        </View>
      );
    }
    if (charactersList && charactersList.length > 0) {
      return (
        <View style={{ flex: 1 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={inputSearchText ? searchedData : charactersList}
            renderItem={renderItem}
            keyExtractor={(i, index) => index.toString()}
          />
          <Pagination />
        </View>
      );
    }
  }, [isLoading, charactersList, inputSearchText, favoriteList.length]);

  return (
    <View style={styles.listItemContainer}>
      <SearchComponent />
      <View style={styles.listHeaderBox}>
        <View style={styles.headerTextSeparateLine}>
          <Text style={styles.statusText}>Love</Text>
        </View>
        <Text style={styles.categoryText}>Character's name</Text>
      </View>
      {renderContent}
    </View>
  );
};
