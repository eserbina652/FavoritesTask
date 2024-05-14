import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { fetchAllCharacters } from "../../api/Api";
import { CharactersList, FansComponent } from "../../components";
import {
  setLoading,
  setServerData,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.characters.currentPage);

  const handleGetChosenItem = async () => {
    dispatch(setLoading(true));
    try {
      const data = await fetchAllCharacters(currentPage);

      if (data) {
        dispatch(setServerData(data));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch(setLoading(false));
    }
    dispatch(setLoading(false));
  };

  useEffect(() => {
    handleGetChosenItem();
  }, [currentPage]);

  return (
    <View style={styles.screen}>
      <FansComponent />
      <CharactersList />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, paddingVertical: 15, gap: 10 },
});
