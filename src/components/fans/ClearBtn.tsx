import React from "react";
import { TouchableOpacity, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "./styles/clearBtnStyles";
import { StorageNames } from "../../api/Api";
import { resetFavorites, useAppDispatch } from "../../store";

export const ClearBtn: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleResetFavorites = async () => {
    await AsyncStorage.removeItem(StorageNames.FAVORITES);
    dispatch(resetFavorites());
  };

  return (
    <TouchableOpacity onPress={handleResetFavorites} style={styles.container}>
      <Text style={styles.text}>Clear fans</Text>
    </TouchableOpacity>
  );
};
