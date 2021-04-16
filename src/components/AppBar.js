import React, { useEffect, useState } from "react";
import styled, { withTheme } from "styled-components/macro";
import { darken } from "polished";
import { Moon, Search as SearchIcon, Sun } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import {
  Grid,
  Hidden,
  InputBase,
  AppBar as MuiAppBar,
  IconButton as MuiIconButton,
  Switch,
  Toolbar,
} from "@material-ui/core";
import { THEMES } from "../constants";

import { Menu as MenuIcon } from "@material-ui/icons";

import NotificationsDropdown from "./NotificationsDropdown";
import MessagesDropdown from "./MessagesDropdown";
import LanguagesDropdown from "./LanguagesDropdown";
import UserDropdown from "./UserDropdown";
import { setTheme } from "../redux/actions/themeActions";

const AppBar = styled(MuiAppBar)`
  background: ${(props) => props.theme.header.background};
  color: ${(props) => props.theme.header.color};
`;

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

const AppBarComponent = ({ onDrawerToggle }) => {
  const theme = localStorage.getItem("theme")
    ? localStorage.getItem("theme").slice(1, -1)
    : "DEFAULT";
  const [darkTheme, setDarkTheme] = useState(theme == "DARK" ? true : false);
  const dispatch = useDispatch();
  useEffect(() => {
    darkTheme
      ? dispatch(setTheme(THEMES.DARK))
      : dispatch(setTheme(THEMES.DEFAULT));
  }, [darkTheme]);

  return (
    <React.Fragment>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Grid container alignItems="center">
            <Hidden mdUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={onDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs />
            <Grid item>
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <Grid
                    component="label"
                    container
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item>
                      <Sun />
                    </Grid>
                    <Grid item>
                      <Switch
                        color="primary"
                        value={darkTheme}
                        checked={darkTheme}
                        onChange={() => {
                          setDarkTheme((prevState) => !prevState);
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Moon />
                    </Grid>
                  </Grid>
                </FormGroup>
              </FormControl>
              <NotificationsDropdown />
              <UserDropdown />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default withTheme(AppBarComponent);
