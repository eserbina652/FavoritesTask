import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { ScreensName, TMainNavParamList } from "./types";
import { CharactersDetails, Home } from "../screens";

const Main = createStackNavigator<TMainNavParamList>();

export const MainNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Main.Navigator initialRouteName={ScreensName.HOME}>
        <Main.Screen name={ScreensName.HOME} component={Home} />
        <Main.Screen
          name={ScreensName.CHARACTER}
          component={CharactersDetails}
        />
      </Main.Navigator>
    </NavigationContainer>
  );
};
