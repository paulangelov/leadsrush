import {
  Card,
  Grid,
  Box,
  IconButton,
  Typography,
  TextField,
  Button,
  Checkbox,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { ArrowBack } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React, { useRef, useState } from "react";
import { Folder, HelpCircle } from "react-feather";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  boxContainer: {
    [theme.breakpoints.down("xs")]: {
      padding: "15px 8px",
    },
  },
  smallTextStyle: {
    fontSize: "13px",
  },
  sampleFormat: {
    [theme.breakpoints.down("xs")]: {
      padding: "8px !important",
    },
  },
  icon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginLeft: "5px",
  },
  headerText: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
  },
}));
export default function BulkEmailFinderScreen() {
  const [skipRows, setSkipRows] = useState();
  const theme = useSelector((state) => state.themeReducer.currentTheme);
  const classes = useStyles();
  const uploadButton = useRef(null);
  const handleUploadClick = () => {
    uploadButton.current.click();
  };
  const handleSkipRowsChange = (event) => {
    setSkipRows(event.target.checked);
  };

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
                  <Typography variant="h3" className={classes.headerText}>
                    {" "}
                    New Bulk Email Finder{" "}
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
              <Box width="100%" mb={5}>
                <Typography variant="h4">
                  Upload your file to enrich (CSV or TXT)
                </Typography>
              </Box>
              <Grid container={true}>
                <Grid
                  container={true}
                  direction="column"
                  item={true}
                  lg={7}
                  md={7}
                  sm={7}
                  xs={12}
                >
                  <Box mb={2}>
                    <Typography gutterBottom={true}>
                      Your file must use commas or semicolons as column
                      delimiters.
                    </Typography>
                  </Box>
                  <Box mb={2}>
                    <Typography gutterBottom={true}>
                      To find the email addresses, you need columns with:
                    </Typography>
                  </Box>
                  <Box mb={5} p={1}>
                    <ul>
                      <li>
                        <Typography variant="h6">
                          The company:{" "}
                          <Typography
                            className={classes.smallTextStyle}
                            variant="caption"
                          >
                            one column with the company name or the website
                            (domain name).
                          </Typography>
                        </Typography>
                      </li>
                    </ul>
                  </Box>
                </Grid>
                <Grid container={true} item={true} lg={5} md={5} sm={5} xs={12}>
                  <Box
                    border={"1px solid  " + grey[500]}
                    borderRight="none"
                    width="10%"
                    height="90%"
                    bgcolor={
                      theme === "DARK" ? "rgba(76,76,76,0.3)" : grey[200]
                    }
                    display="flex"
                    justifyContent="space-around"
                    flexDirection="column"
                    className={classes.sampleFormat}
                  >
                    <Typography variant="body2" align="center">
                      1
                    </Typography>
                    <Typography variant="body2" align="center">
                      2
                    </Typography>
                    <Typography variant="body2" align="center">
                      3
                    </Typography>
                    <Typography variant="body2" align="center">
                      4
                    </Typography>
                    <Typography variant="body2" align="center">
                      5
                    </Typography>
                  </Box>
                  <Box
                    border={"1px solid  " + grey[500]}
                    width="90%"
                    height="90%"
                    bgcolor={
                      theme === "DARK" ? "rgba(76,76,76,0.5)" : grey[200]
                    }
                    display="flex"
                    pl={1}
                    justifyContent="space-around"
                    flexDirection="column"
                    className={classes.sampleFormat}
                  >
                    <Typography variant="h6">
                      First name, Last name, Domain
                    </Typography>
                    <Typography variant="h6">
                      Jeff, Weiner, linkedin.com
                    </Typography>
                    <Typography variant="h6">
                      Brian, Halligan, hubspot.com
                    </Typography>
                    <Typography variant="h6">
                      Ryan, Hoover, producthunt.io
                    </Typography>
                    <Typography variant="h6">
                      Eoghan, McCable, intercom.io
                    </Typography>
                  </Box>
                </Grid>

                <Button onClick={handleUploadClick} fullWidth={true}>
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
          <Box width="100%" p={5} className={classes.boxContainer}>
            {" "}
            <Box width="100%" display="flex" alignItems="center">
              <Checkbox checked={skipRows} onChange={handleSkipRowsChange} />
              <Typography>
                Skip rows already containing an email address
              </Typography>
              <HelpCircle fontSize="small" className={classes.icon} />
            </Box>
          </Box>{" "}
        </Card>
        <Box width="100%" p={5} className={classes.boxContainer}>
          {" "}
          <Button variant="contained" color="primary" size="large">
            Upload
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
