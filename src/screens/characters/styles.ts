import { StyleSheet } from "react-native";

import { commonContainerStyles } from "../../components";

export const styles = StyleSheet.create({
  container: {
    gap: 20,
    justifyContent: "center",
    marginTop: 20,
  },
  itemContainer: {
    ...commonContainerStyles,
    marginHorizontal: 20,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 50,
  },
  textPadding: {
    paddingVertical: 15,
    fontSize: 16,
  },
});
