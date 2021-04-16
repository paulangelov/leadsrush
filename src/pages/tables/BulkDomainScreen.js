import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  TextField,
  Typography,
  FormControl,
  Checkbox,
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { Folder, HelpCircle } from "react-feather";
import { useRef } from "react";
import { Dropdown } from "semantic-ui-react";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  avatarStyle: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    textAlign: "center",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontSize: "0.8rem",
    [theme.breakpoints.down("xs")]: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      fontSize: "0.6rem",
    },
  },
  icon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginLeft: "5px",
  },
  boxContainer: {
    [theme.breakpoints.down("xs")]: {
      padding: "15px 8px",
    },
  },
  longText: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "5px",
      "& h5": {
        fontSize: "0.8rem",
      },
    },
  },
  longCaption: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  headerStyle: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
}));
export default function BulkDomainScreen() {
  const classes = useStyles();
  const uploadButton = useRef(null);
  const handleUploadClick = () => {
    uploadButton.current.click();
  };
  const [emailPerPage, setEmailPerPage] = useState("");
  const [verifyEmailAddress, setVerifyEmailAddress] = useState("");
  const [emailAddressType, setEmailAddressType] = useState("");
  const [includeSources, setIncludeSources] = useState(false);
  const theme = useSelector((state) => state.themeReducer);

  const handleEmailPerPageChange = (event) => {
    setEmailPerPage(event.target.value);
  };
  const handleVerifyEmailAddress = (event) => {
    setVerifyEmailAddress(event.target.value);
  };
  const handleEmailAddressTypeChange = (event) => {
    setEmailAddressType(event.target.value);
  };

  const handleIncludeSourcesChange = (event) => {
    setIncludeSources(event.target.checked);
  };

  const verifyEmailOptions = [
    { key: "yes", value: "yes", text: "Yes" },
    { key: "no", value: "no", text: "No" },
  ];

  const maximumEmailOptions = [
    { key: 10, value: 10, text: 10 },
    { key: 20, value: 20, text: 20 },
    { key: 30, value: 30, text: 30 },
  ];

  const emailTypeOptions = [
    { key: "generic", value: "generic", text: "Generic" },
    { key: "personal", value: "personal", text: "Personal" },
  ];

  return (
    <Grid container={true} justify="center">
      <Grid item={true} lg={6} md={12} sm={12} xs={12}>
        <Card>
          <Box width="100%" borderBottom={"1px solid  " + grey[300]}>
            <Box width="100%" p={5} className={classes.boxContainer}>
              <Grid container={true} alignItems="center">
                <IconButton>
                  <ArrowBack />
                </IconButton>
                <Box ml={2}>
                  <Typography variant="h3" className={classes.headerStyle}>
                    {" "}
                    New Bulk Domain Search{" "}
                  </Typography>
                </Box>
              </Grid>
              <Box width="100%" display="flex" flexDirection="column">
                <Box width="100%" mb={2} mt={3}>
                  <Typography variant="h5">List name</Typography>
                </Box>
                <TextField fullWidth={true} variant="outlined" />
              </Box>
            </Box>
          </Box>
          <Box width="100%" borderBottom={"1px solid  " + grey[300]}>
            <Box width="100%" p={5} className={classes.boxContainer}>
              <Grid container={true} alignItems="center">
                <Avatar className={classes.avatarStyle}>1</Avatar>
                <Box ml={4} className={classes.longText}>
                  <Typography variant="h5">
                    Enter your list of domains or company names
                  </Typography>
                </Box>
              </Grid>

              <Box display="flex" flexDirection="column" width="100%" mt={5}>
                <Box display="flex" width="100%">
                  <Typography variant="h6" gutterBottom={true}>
                    Enter the domain names
                  </Typography>
                  <Typography>(one per line)</Typography>
                </Box>

                <TextField multiline={true} rows={3} variant="outlined" />
              </Box>

              <Grid container={true} direction="column">
                <Box
                  display="flex"
                  className={classes.longCaption}
                  alignItems="center"
                  mt={5}
                >
                  <Typography variant="h6">
                    Or load the list from a file
                    <Typography variant="caption">
                      (CSV, Excel, Numbers or TXT file)
                    </Typography>
                  </Typography>
                </Box>
                <Button onClick={handleUploadClick}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    border="1px dashed grey"
                    p={5}
                    borderRadius="6px"
                  >
                    <input
                      type="file"
                      ref={uploadButton}
                      style={{ display: "none" }}
                    />
                    <IconButton>
                      <Folder />
                    </IconButton>
                    <Typography> Select a file </Typography>
                  </Box>
                </Button>
              </Grid>
            </Box>
          </Box>
          <Box width="100%">
            <Box width="100%" p={5} className={classes.boxContainer}>
              <Grid container={true} alignItems="center">
                <Avatar className={classes.avatarStyle}>2</Avatar>
                <Box ml={4}>
                  <Typography variant="h5">Set filters and options</Typography>
                </Box>
              </Grid>

              <Box
                width="100%"
                flexDirection="column"
                display="flex"
                flexWrap="wrap"
                mt={5}
              >
                <Box display="flex">
                  <Typography variant="h6" gutterBottom={true}>
                    Maximum email addresses per domain
                  </Typography>
                  <HelpCircle fontSize="small" className={classes.icon} />
                </Box>

                <FormControl variant="outlined" fullWidth={true}>
                  <Dropdown
                    placeholder="10"
                    fluid
                    search
                    selection
                    options={maximumEmailOptions}
                    style={
                      theme.currentTheme === "DARK"
                        ? styles.darkDownloadDropdown
                        : styles.lightDownloadDropdown
                    }
                  />
                </FormControl>
              </Box>
              <Box width="100%" display="flex" flexWrap="wrap" mt={5}>
                <Box width="100%" display="flex">
                  <Typography variant="h6" gutterBottom={true}>
                    Verify Email Address
                  </Typography>
                  <HelpCircle fontSize="small" className={classes.icon} />
                </Box>

                <FormControl variant="outlined" fullWidth={true}>
                  <Dropdown
                    placeholder="Select Country"
                    fluid
                    search
                    selection
                    options={verifyEmailOptions}
                    style={
                      theme.currentTheme === "DARK"
                        ? styles.darkDownloadDropdown
                        : styles.lightDownloadDropdown
                    }
                  />
                </FormControl>
              </Box>
              <Box width="100%" display="flex" flexWrap="wrap" mt={5} mb={5}>
                <Typography
                  variant="h3"
                  gutterBottom={true}
                  className={classes.headerStyle}
                >
                  Filters
                </Typography>
              </Box>
              <Box
                width="100%"
                display="flex"
                flexDirection="column"
                flexWrap="wrap"
              >
                <Typography variant="h6" gutterBottom={true}>
                  Email Address Type
                </Typography>
                <FormControl variant="outlined" fullWidth={true}>
                  <Dropdown
                    placeholder="generic"
                    fluid
                    search
                    selection
                    style={
                      theme.currentTheme === "DARK"
                        ? styles.darkDownloadDropdown
                        : styles.lightDownloadDropdown
                    }
                    options={emailTypeOptions}
                  />
                </FormControl>
              </Box>
            </Box>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            width="100%"
            pt={0}
            p={5}
            className={classes.boxContainer}
          >
            <Checkbox
              checked={includeSources}
              onChange={handleIncludeSourcesChange}
            />
            <Typography> Include the sources in the result </Typography>
            <HelpCircle fontSize="small" className={classes.icon} />
          </Box>
        </Card>
        <Box width="100%" p={5} className={classes.boxContainer}>
          <Button variant="contained" color="primary" size="large">
            Upload
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

const styles = {
  lightDownloadDropdown: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    color: "#4c4c4c",
  },
  darkDownloadDropdown: {
    backgroundColor: "#4c4c4c",
    color: "rgba(255, 255, 255, 0.95)",
    borderColor: "rgba(255, 255, 255, 0.23)",
  },
};
