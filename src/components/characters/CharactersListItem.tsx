import React from "react";
import { TouchableOpacity, Text, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { setFavoriteToAsyncStorage } from "../../api/Api";
import { styles } from "./styles/charactersItemStyles";
import { ICharacter, useAppSelector } from "../../store";
import {
  ScreensName,
  TCharacterDetailsScreenNavigatorType,
} from "../../navigation";

export const IS_ANDROID = Platform.OS === "android";

interface IProps {
  item: ICharacter;
  getFavorites: () => void;
}

type THomeScreenNavType = TCharacterDetailsScreenNavigatorType["navigation"];

export const CharactersListItem = ({ item, getFavorites }: IProps) => {
  const navigation = useNavigation<THomeScreenNavType>();
  const favoriteList = useAppSelector((state) => state.characters.favoriteList);

  const handleChoseCharacter = async (item: ICharacter) => {
    await setFavoriteToAsyncStorage({ id: item.created, gender: item.gender });
    getFavorites();
  };

  const isCharacterChosen =
    favoriteList.findIndex((el) => el.id === item.created) !== -1;

  const chosenColorForAndroid = IS_ANDROID ? "pink" : "red";

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() =>
        navigation.navigate(ScreensName.CHARACTER, { character: item })
      }
    >
      <TouchableOpacity
        hitSlop={10}
        style={{
          ...styles.choseBtn,
          backgroundColor: isCharacterChosen ? chosenColorForAndroid : "white",
        }}
        onPress={() => handleChoseCharacter(item)}
      >
        <Text
          style={{
            color: isCharacterChosen ? "white" : "red",
            fontSize: 20,
          }}
        >
          ♥
        </Text>
      </TouchableOpacity>
      <Text style={{ color: "black" }}>{item.name}</Text>
    </TouchableOpacity>
  );
};
