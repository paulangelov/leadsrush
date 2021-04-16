import * as types from "../../constants";

export const setTheme = (value) => async (dispatch, getState) => {
  dispatch({
    type: types.THEME_SET,
    payload: value,
  });
  localStorage.setItem(
    "theme",
    JSON.stringify(getState().themeReducer.currentTheme)
  );
};
