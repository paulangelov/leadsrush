import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

export default function NewProspectScreen() {
  const [email, setEmail] = useState();
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [companyName, setCompanyName] = useState();
  const [position, setPosition] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [country, setCountry] = useState();
  const [companyDomain, setcompanyDomain] = useState();
  const [companyIndustryName, setCompanyIndustryName] = useState();
  const [linkedInUrl, setLinkedInUrl] = useState();
  const [twitter, setTwitter] = useState();
  const [list, setList] = useState();
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      email,
      fname,
      lname,
      companyName,
      phoneNumber,
      position,
      country,
      companyName,
      companyIndustryName,
      linkedInUrl,
      twitter,
      list,
      companyDomain
    );
  };

  const handleShow = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <Grid justify="center" container={true}>
      <Grid container={true} item={true} xs={12} sm={12} md={6} lg={6}>
        <Box display="flex" width="100%" alignItems="center" mb={4}>
          <IconButton>
            <KeyboardBackspaceIcon />
          </IconButton>
          <Typography variant="h3">New Prospect</Typography>
        </Box>

        <form onSubmit={handleSubmit} style={styles.formStyles}>
          <Box mb={4}>
            <FormControl fullWidth>
              <Typography variant="h5" gutterBottom>
                {" "}
                Email address(required)
              </Typography>
              <TextField
                variant="outlined"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
            </FormControl>
          </Box>

          <Box mb={1} width="100%">
            <Grid container={true} justify="center" spacing={5}>
              <Grid item={true} lg={6} md={6} sm={12} xs={12}>
                <FormControl fullWidth>
                  <Typography variant="h5" gutterBottom>
                    First name
                  </Typography>
                  <TextField
                    variant="outlined"
                    onChange={(e) => setFname(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid item={true} lg={6} md={6} sm={12} xs={12}>
                <FormControl fullWidth>
                  <Typography variant="h5" gutterBottom>
                    Last name
                  </Typography>
                  <TextField
                    variant="outlined"
                    onChange={(e) => setLname(e.target.value)}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Box>

          <Box mb={5}>
            <Grid container={true} spacing={5}>
              <Grid item={true} lg={6} md={6} sm={12} xs={12}>
                <FormControl fullWidth>
                  <Typography variant="h5" gutterBottom>
                    Company name
                  </Typography>
                  <TextField
                    variant="outlined"
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid item={true} lg={6} md={6} sm={12} xs={12}>
                <FormControl fullWidth>
                  <Typography variant="h5" gutterBottom>
                    Position
                  </Typography>
                  <TextField
                    variant="outlined"
                    onChange={(e) => setPosition(e.target.value)}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Box>
          <Box mb={5}>
            <Button color="primary" onClick={handleShow}>
              {show ? "Show less" : "Show more"}
            </Button>
          </Box>
          <Grid container={true} style={show ? null : { display: "none" }}>
            <Box mb={1} width="100%">
              <Grid container={true} spacing={5}>
                <Grid item={true} lg={6} md={6} sm={12} xs={12}>
                  <FormControl fullWidth>
                    <Typography variant="h5" gutterBottom>
                      Phone number
                    </Typography>
                    <TextField
                      variant="outlined"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </FormControl>
                </Grid>
                <Grid item={true} lg={6} md={6} sm={12} xs={12}>
                  <FormControl fullWidth>
                    <Typography variant="h5" gutterBottom>
                      Country
                    </Typography>
                    <TextField
                      variant="outlined"
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
            <Box mb={1} width="100%">
              <Grid container={true} spacing={5}>
                <Grid item={true} lg={6} md={6} sm={12} xs={12}>
                  <FormControl fullWidth>
                    <Typography variant="h5" gutterBottom>
                      Company Domain
                    </Typography>
                    <TextField
                      variant="outlined"
                      onChange={(e) => setcompanyDomain(e.target.value)}
                    />
                  </FormControl>
                </Grid>
                <Grid item={true} lg={6} md={6} sm={12} xs={12}>
                  <FormControl fullWidth>
                    <Typography variant="h5" gutterBottom>
                      Company Industry
                    </Typography>
                    <TextField
                      variant="outlined"
                      onChange={(e) => setCompanyIndustryName(e.target.value)}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
            <Box mb={3} width="100%">
              <Grid container={true} spacing={5}>
                <Grid item={true} lg={6} md={6} sm={12} xs={12}>
                  <FormControl fullWidth>
                    <Typography variant="h5" gutterBottom>
                      LinkedIn Url
                    </Typography>
                    <TextField
                      variant="outlined"
                      onChange={(e) => setLinkedInUrl(e.target.value)}
                    />
                  </FormControl>
                </Grid>
                <Grid item={true} lg={6} md={6} sm={12} xs={12}>
                  <FormControl fullWidth>
                    <Typography variant="h5" gutterBottom>
                      Twitter
                    </Typography>
                    <TextField
                      variant="outlined"
                      onChange={(e) => setTwitter(e.target.value)}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
            <Box mb={5} width="100%">
              <FormControl fullWidth>
                <Typography variant="h5" gutterBottom>
                  List
                </Typography>
                <TextField
                  variant="outlined"
                  onChange={(e) => setList(e.target.value)}
                />
              </FormControl>
            </Box>
          </Grid>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            size="large"
          >
            Create
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}

const styles = {
  formStyles: {
    width: "100%",
  },
};
