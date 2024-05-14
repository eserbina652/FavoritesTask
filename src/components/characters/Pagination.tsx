import React, { useMemo } from "react";
import { View, TouchableOpacity, Text, TextStyle } from "react-native";

import { styles } from "./styles/paginationStyles";
import {
  setCurrentPage,
  setInputSearchText,
  useAppDispatch,
  useAppSelector,
} from "../../store";

const perPageItems = 10;

const disableOrNotBtnBg = {
  true: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
  false: { backgroundColor: "rgba(0, 0, 0, 0.2)" },
};

const textBtnDisableOrNotWeight = {
  true: { fontWeight: "normal", color: "grey" } as TextStyle,
  false: { fontWeight: "bold" } as TextStyle,
};

export const Pagination: React.FC = () => {
  const isLoading = useAppSelector((state) => state.characters.loading);
  const currentPage = useAppSelector((state) => state.characters.currentPage);
  const serverData = useAppSelector((state) => state.characters.serverData);
  const dispatch = useAppDispatch();

  const disabledNextBtn = useMemo(
    () => (serverData ? Math.round(serverData?.count / perPageItems) : 0),
    [serverData, perPageItems]
  );

  const isDisabledNextButton = useMemo(
    () => currentPage >= disabledNextBtn,
    [currentPage, disabledNextBtn]
  );

  const isDisabledPrevButton = useMemo(
    () => isLoading || currentPage < 2,
    [currentPage, isLoading]
  );

  const handleDecreasePage = () => {
    dispatch(setInputSearchText(""));
    dispatch(setCurrentPage(currentPage - 1));
  };

  const handleIncreasePage = () => {
    dispatch(setInputSearchText(""));
    dispatch(setCurrentPage(currentPage + 1));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.btn, disableOrNotBtnBg[`${isDisabledPrevButton}`]]}
        disabled={isDisabledPrevButton}
        onPress={handleDecreasePage}
      >
        <Text style={textBtnDisableOrNotWeight[`${isDisabledPrevButton}`]}>
          {"<"}
        </Text>
      </TouchableOpacity>
      <Text>{currentPage}</Text>
      <TouchableOpacity
        style={[styles.btn, disableOrNotBtnBg[`${isDisabledNextButton}`]]}
        disabled={isDisabledNextButton}
        onPress={handleIncreasePage}
      >
        <Text style={textBtnDisableOrNotWeight[`${isDisabledNextButton}`]}>
          {">"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
