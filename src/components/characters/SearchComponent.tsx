import React from "react";
import { TextInput, View } from "react-native";
import Svg, { Path } from "react-native-svg";

import {
  setInputSearchText,
  useAppDispatch,
  useAppSelector,
} from "../../store";

export const SearchComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const inputSearchText = useAppSelector(
    (state) => state.characters.inputSearchText
  );

  const handleSearch = (value: string) => {
    dispatch(setInputSearchText(value));
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
      }}
    >
      <TextInput
        onBlur={() => dispatch(setInputSearchText(""))}
        value={inputSearchText}
        onChangeText={handleSearch}
        placeholder="Want to find someone?"
        style={{
          paddingLeft: 10,
          width: "90%",
          borderBottomColor: "rgba(0, 0, 0, 0.1)",
          borderBottomWidth: 1,
        }}
      />
      <View style={{ alignItems: "flex-end" }}>
        <Svg width={30} height={30} viewBox="0 0 50 50">
          <Path d="M21 3C11.621 3 4 10.621 4 20s7.621 17 17 17c3.71 0 7.14-1.195 9.938-3.219l13.156 13.125 2.812-2.812-13-13.032A16.923 16.923 0 0 0 38 20c0-9.379-7.621-17-17-17Zm0 2c8.297 0 15 6.703 15 15s-6.703 15-15 15S6 28.297 6 20 12.703 5 21 5Z" />
        </Svg>
      </View>
    </View>
  );
};
