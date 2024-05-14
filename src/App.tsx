import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import "react-native-gesture-handler";

import { MainNavigator } from "./navigation";
import { store } from "./store/store";

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.app}>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  app: { flex: 1 },
});
