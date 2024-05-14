import { useRoute } from "@react-navigation/native";
import React, { useEffect, useMemo, useState } from "react";
import { FlatList, ListRenderItem, Text, View } from "react-native";

import { StyledActivityIndicator } from "../../components/StyledActivityIndicator";
import { styles } from "./styles";
import { TCharacterDetailsScreenNavigatorType } from "../../navigation";

type TCharacterRouteProp = TCharacterDetailsScreenNavigatorType["route"];

interface IDataForTable {
  label: string;
  value: string;
}

export const CharactersDetails: React.FC = () => {
  const {
    params: { character },
  } = useRoute<TCharacterRouteProp>();
  const [dataForTable, setDataForTable] = useState<IDataForTable[] | null>(
    null
  );

  const getDataForTable = useMemo(() => {
    setDataForTable([
      { label: "Name", value: character.name },
      { label: "Birth year", value: character.birth_year },
      { label: "Eye color", value: character.eye_color },
      { label: "Gender", value: character.gender },
      { label: "Hair color", value: character.hair_color },
      { label: "Height", value: character.height },
      { label: "Mass", value: character.mass },
      { label: "Skin color", value: character.skin_color },
    ]);
  }, [character]);

  const renderItem: ListRenderItem<IDataForTable> = useMemo(
    () =>
      ({ item }) => {
        return (
          <View style={styles.itemContainer}>
            <Text style={[styles.textPadding, { padding: 0 }]}>
              {item.label}
            </Text>

            <Text style={styles.textPadding}>{item.value}</Text>
          </View>
        );
      },
    [character]
  );

  useEffect(() => getDataForTable, [character]);

  return (
    <View style={styles.container}>
      {!character || (!dataForTable && <StyledActivityIndicator />)}

      {character && dataForTable && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dataForTable}
          renderItem={renderItem}
          contentContainerStyle={{ gap: 20 }}
        />
      )}
    </View>
  );
};
