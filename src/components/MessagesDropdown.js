import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CodeIcon from "@material-ui/icons/Code";
import SettingsIcon from "@material-ui/icons/Settings";
import ShopIcon from "@material-ui/icons/Shop";

import {
  Avatar as MuiAvatar,
  Badge,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Popover as MuiPopover,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { User } from "react-feather";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "default" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: theme.palette.secondary.main,
  },
}))(LinearProgress);

// Inspired by the former Facebook spinners.
const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  top: {
    color: "#1a90ff",
    animationDuration: "550ms",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
}));

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Popover = styled(MuiPopover)`
  .MuiPaper-root {
    width: 300px;
    ${(props) => props.theme.shadows[1]};
    border: 1px solid ${(props) => props.theme.palette.divider};
  }
`;

const Indicator = styled(Badge)`
  .MuiBadge-badge {
    background: ${(props) => props.theme.header.indicator.background};
    color: ${(props) => props.theme.palette.common.white};
  }
`;

const Avatar = styled(MuiAvatar)`
  background: ${(props) => props.theme.palette.primary.main};
`;

const MessageHeader = styled(Box)`
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.palette.divider};
`;

function Message({ title, description, image }) {
  return (
    <ListItem divider component={Link} to="#">
      <ListItemAvatar>
        <Avatar src={image} alt="Avatar" />
      </ListItemAvatar>
      <ListItemText
        primary={title}
        primaryTypographyProps={{
          variant: "subtitle2",
          color: "textPrimary",
        }}
        secondary={description}
      />
    </ListItem>
  );
}

function MessagesDropdown() {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Tooltip title="Account">
        <IconButton color="inherit" ref={ref} onClick={handleOpen}>
          <Indicator badgeContent={0}>
            <User />
          </Indicator>
        </IconButton>
      </Tooltip>
      <Popover
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
      >
        <MessageHeader p={2}>
          <Grid container justify="center" spacing={4}>
            <Grid item xs={12} sm={9} md={9} xl={9}>
              <Typography variant="subtitle1" color="textPrimary">
                Free Plan
              </Typography>
            </Grid>
            <Grid item xs={12} sm={9} md={9} xl={9}></Grid>
          </Grid>
          <Grid container justify="center" spacing={0}>
            <Grid item xs={12} sm={9} md={9} xl={9}>
              <Grid container justify="space-between">
                <Grid item>
                  <Typography variant="body2" gutterBottom>
                    Searches
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" gutterBottom>
                    50/100
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={9} md={9} xl={9}>
              <BorderLinearProgress variant="determinate" value={50} />
            </Grid>
          </Grid>
          <Box my={6}></Box>
          <Grid container justify="center" spacing={0}>
            <Grid item xs={12} sm={9} md={9} xl={9}>
              <Grid container justify="space-between">
                <Grid item>
                  <Typography variant="body2" gutterBottom>
                    Verifications
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" gutterBottom>
                    10/100
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={9} md={9} xl={9}>
              <BorderLinearProgress variant="determinate" value={10} />
            </Grid>
          </Grid>
          <Box my={6}></Box>
        </MessageHeader>
        <React.Fragment>
          <List disablePadding>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Account" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <ShopIcon />
              </ListItemIcon>
              <ListItemText primary="Subscription" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <CodeIcon />
              </ListItemIcon>
              <ListItemText primary="API" />
            </ListItem>
            <Divider />
            <ListItemLink href="/auth/sign-in">
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Log out" />
            </ListItemLink>
          </List>
        </React.Fragment>
      </Popover>
    </React.Fragment>
  );
}

export default MessagesDropdown;
