import React, { useMemo } from "react";
import { View, Text } from "react-native";

import { ClearBtn } from "./ClearBtn";
import { styles } from "./styles/fansListStyles";
import { commonContainerStyles } from "../styles/commonStyles";
import { useAppSelector } from "../../store";

export const FansComponent: React.FC = () => {
  const favoritesData = useAppSelector(
    (state) => state.characters.favoriteList
  );

  const genderMap = useMemo(() => {
    const initialMap = { male: 0, female: 0, "n/a": 0 };

    return favoritesData.reduce(
      (acc, curr) => {
        const genderKey = curr.gender as keyof typeof initialMap;
        acc[genderKey]++;
        return acc;
      },
      { ...initialMap }
    );
  }, [favoritesData.length]);

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.text}>Fans</Text>
        <ClearBtn />
      </View>
      <View style={styles.itemList}>
        <View style={[styles.itemWrapper, commonContainerStyles]}>
          <Text style={styles.itemText}>male: {genderMap.male}</Text>
        </View>
        <View style={[styles.itemWrapper, commonContainerStyles]}>
          <Text style={styles.itemText}>female: {genderMap.female}</Text>
        </View>
        <View style={[styles.itemWrapper, commonContainerStyles]}>
          <Text style={styles.itemText}>others: {genderMap["n/a"]}</Text>
        </View>
      </View>
    </View>
  );
};
