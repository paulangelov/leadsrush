import React, { useRef } from "react";
import {
  Card,
  Grid,
  Box,
  IconButton,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { ArrowBack } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { Folder } from "react-feather";

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    [theme.breakpoints.down("xs")]: {
      padding: "15px 8px",
    },
  },
  headerStyle: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
  },
}));
export default function BulkEmailVerifierScreen() {
  const classes = useStyles();
  const uploadButton = useRef(null);
  const handleUploadClick = () => {
    uploadButton.current.click();
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
                  <Typography variant="h3" className={classes.headerStyle}>
                    New Bulk Email Verifier
                  </Typography>
                </Box>
                <Box width="100%" display="flex" flexDirection="column">
                  <Box width="100%" mb={2} mt={3}>
                    <Typography variant="h5" gutterBottom={true}>
                      List name
                    </Typography>
                  </Box>
                  <TextField fullWidth={true} variant="outlined" />
                </Box>
              </Grid>
            </Box>
          </Box>
          <Box width="100%">
            <Box width="100%" p={5} className={classes.boxContainer}>
              <Box width="100%" mb={4}>
                <Typography variant="h5">
                  Enter your list of email addresses
                </Typography>
              </Box>
              <Box width="100%" display="flex" flexDirection="column" mb={3}>
                <Box width="100%" mb={2}>
                  <Typography variant="h6" gutterBottom={true}>
                    Enter the email address{" "}
                    <Typography variant="caption">
                      (comma-separated or one per line)
                    </Typography>
                  </Typography>
                </Box>
                <TextField
                  fullWidth={true}
                  multiline={true}
                  rows={3}
                  variant="outlined"
                />
              </Box>
              <Box width="100%" display="flex" flexDirection="column">
                <Box width="100%" mb={2}>
                  <Typography variant="h6">
                    Or load the list form a file{" "}
                    <Typography variant="caption">(CSV or TXT)</Typography>
                  </Typography>
                </Box>
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
                <Box width="100%">
                  <Typography variant="caption">
                    If your file contains multiple columns, we'll automatically
                    detect the one containing the email addresses.
                  </Typography>
                </Box>
              </Box>
            </Box>
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
