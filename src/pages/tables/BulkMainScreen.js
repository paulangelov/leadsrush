import {
  Box,
  Card,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import { CheckCircleOutline } from "@material-ui/icons";
import { ChevronRight } from "react-feather";

const useStyles = makeStyles((theme) => ({
  icon: {
    width: "40px",
    height: "40px",
    [theme.breakpoints.down("xs")]: {
      width: "20px",
      height: "20px",
    },
  },
  boxContainer: {
    [theme.breakpoints.down("xs")]: {
      padding: "15px 8px",
    },
  },
}));

export default function BulkMainScreen() {
  const classes = useStyles();
  return (
    <Grid container={true} justify="center">
      {" "}
      <Grid item={true} lg={6} md={12} sm={12} xs={12}>
        <Card>
          <Box width="100%" p={5} className={classes.boxContainer}>
            <Grid container={true}>
              <Box width="100%" mb={1}>
                <Typography variant="h3" gutterBottom={true}>
                  Bulk tasks
                </Typography>
              </Box>
              <Box width="100%" mb={5}>
                <Typography> Choose what task to do in bulk. </Typography>
              </Box>
            </Grid>
          </Box>
          <Grid container={true}>
            <Box
              display="flex"
              alignItems="center"
              borderBottom={"1px solid  " + grey[300]}
              width="100%"
            >
              <Box
                width="100%"
                display="flex"
                p={5}
                className={classes.boxContainer}
              >
                <Grid
                  container={true}
                  justify="space-around"
                  alignItems="center"
                >
                  <Grid item={true} lg={1} md={1} sm={1} xs={1}>
                    {" "}
                    <SearchIcon className={classes.icon} />
                  </Grid>
                  <Grid
                    container={true}
                    direction="column"
                    item={true}
                    lg={9}
                    md={9}
                    sm={8}
                    xs={8}
                  >
                    <Typography variant="h4" gutterBottom={true}>
                      {" "}
                      Domain Search
                    </Typography>
                    <Typography>
                      {" "}
                      Find a list of email addresses from a list of companies
                    </Typography>
                  </Grid>
                  <Grid item={true} lg={1} md={1} sm={1} xs={1}>
                    <IconButton>
                      {" "}
                      <ChevronRight />{" "}
                    </IconButton>{" "}
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Box borderBottom={"1px solid  " + grey[300]} width="100%">
              <Box
                width="100%"
                p={5}
                className={classes.boxContainer}
                display="flex"
              >
                <Grid
                  container={true}
                  justify="space-around"
                  alignItems="center"
                >
                  <Grid item={true} lg={1} md={1} sm={1} xs={1}>
                    {" "}
                    <ContactMailIcon className={classes.icon} />
                  </Grid>
                  <Grid
                    container={true}
                    direction="column"
                    item={true}
                    lg={9}
                    md={9}
                    sm={8}
                    xs={8}
                  >
                    <Typography variant="h4" gutterBottom={true}>
                      {" "}
                      Email Finder
                    </Typography>
                    <Typography>
                      {" "}
                      Find the email addresses from a list of names and
                      companies
                    </Typography>
                  </Grid>
                  <Grid item={true} lg={1} md={1} sm={1} xs={1}>
                    <IconButton>
                      {" "}
                      <ChevronRight />{" "}
                    </IconButton>{" "}
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Box width="100%">
              <Box
                width="100%"
                display="flex"
                p={5}
                className={classes.boxContainer}
              >
                <Grid
                  container={true}
                  justify="space-around"
                  alignItems="center"
                >
                  <Grid item={true} lg={1} md={1} sm={1} xs={1}>
                    {" "}
                    <CheckCircleOutline className={classes.icon} />
                  </Grid>
                  <Grid
                    container={true}
                    direction="column"
                    item={true}
                    lg={9}
                    md={9}
                    sm={8}
                    xs={8}
                  >
                    <Typography variant="h4" gutterBottom={true}>
                      {" "}
                      Email Verifier
                    </Typography>
                    <Typography> Verify a list of email addresses.</Typography>
                  </Grid>
                  <Grid item={true} lg={1} md={1} sm={1} xs={1}>
                    <IconButton>
                      {" "}
                      <ChevronRight />{" "}
                    </IconButton>{" "}
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
