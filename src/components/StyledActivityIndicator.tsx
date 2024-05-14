import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

export const StyledActivityIndicator: React.FC = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator color={"black"} size={"large"} />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: { alignItems: "center", justifyContent: "center", flex: 1 },
});
