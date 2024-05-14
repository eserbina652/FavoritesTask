import { StackScreenProps } from "@react-navigation/stack";

import { ICharacter } from "../store";

export type TMainNavParamList = {
  HOME: undefined;
  CHARACTER: { character: ICharacter };
};

export type THomeScreenNavigatorType = StackScreenProps<
  TMainNavParamList,
  "HOME"
>;

export type TCharacterDetailsScreenNavigatorType = StackScreenProps<
  TMainNavParamList,
  "CHARACTER"
>;

export const ScreensName = {
  HOME: "HOME",
  CHARACTER: "CHARACTER",
} as const;
