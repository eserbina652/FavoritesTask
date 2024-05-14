import { StyleSheet } from "react-native";

import { commonContainerStyles } from "../../styles/commonStyles";

export const styles = StyleSheet.create({
  listItemContainer: {
    flex: 1,
    marginHorizontal: 10,
    ...commonContainerStyles,
  },
  listHeaderBox: {
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  statusText: { fontSize: 18, color: "red" },
  categoryText: { fontSize: 18, paddingLeft: 5 },
  nothingFoundContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  nothingFoundText: { fontSize: 20, color: "rgba(0, 0, 0, 0.3)" },
  headerTextSeparateLine: {
    borderRightColor: "rgba(0, 0, 0, 0.4)",
    borderRightWidth: 1,
    paddingRight: 5,
  },
});
