import {
  Box,
  Grid,
  Table,
  TableHead,
  TableRow,
  Typography,
  TableCell,
  TableBody,
  Chip,
  AppBar,
  Tabs,
  Tab,
  TableFooter,
  TablePagination,
  TextField,
  Button,
  IconButton,
  useTheme,
} from "@material-ui/core";
import { Search } from "react-feather";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { green, red } from "@material-ui/core/colors";

import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";

export default function CampaignReport() {
  const data = {
    labels: ["Unique Opens", "Not Open", "Bounced", "Unsubscribes"],
    datasets: [
      {
        data: [260, 125, 54, 146],
        backgroundColor: ["#77c1d4", "#e89d38", "#2c2c2c", "#d65440"],
        borderColor: "transparent",
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
  };

  function createTopRightTableData(id, name, email, status) {
    return { id, name, email, status };
  }
  const topRightRows = [
    createTopRightTableData(
      1,
      "Test test1",
      "test@test1@gmail.com",
      "subscribed"
    ),
    createTopRightTableData(
      2,
      "Test test2",
      "test@test2@gmail.com",
      "subscribed"
    ),
    createTopRightTableData(
      3,
      "Test test3",
      "test@test3@gmail.com",
      "subscribed"
    ),
    createTopRightTableData(
      4,
      "Test test4",
      "test@test4@gmail.com",
      "unsubscribed"
    ),
    createTopRightTableData(
      5,
      "Test test5",
      "test@test5@gmail.com",
      "subscribed"
    ),
    createTopRightTableData(
      6,
      "Test test6",
      "test@test6@gmail.com",
      "subscribed"
    ),
    createTopRightTableData(
      7,
      "Test test7",
      "test@test7@gmail.com",
      "subscribed"
    ),
    createTopRightTableData(
      8,
      "Test test8",
      "test@test8@gmail.com",
      "subscribed"
    ),
    createTopRightTableData(
      9,
      "Test test9",
      "test@test9@gmail.com",
      "subscribed"
    ),
    createTopRightTableData(
      10,
      "Test test10",
      "test@test10@gmail.com",
      "subscribed"
    ),
  ];

  // TABS

  function createBottomTableData(id, name, email, date) {
    return { id, name, email, date };
  }

  let dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const d = new Date("2015-03-25T12:00:00Z");

  const bottomRows = [
    createBottomTableData(
      1,
      "Test test1",
      "test@test1@gmail.com",
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createBottomTableData(
      2,
      "Test test2",
      "test@test2@gmail.com",
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createBottomTableData(
      3,
      "Test test3",
      "test@test3@gmail.com",
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createBottomTableData(
      4,
      "Test test4",
      "test@test4@gmail.com",
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createBottomTableData(
      5,
      "Test test5",
      "test@test5@gmail.com",
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createBottomTableData(
      6,
      "Test test6",
      "test@test6@gmail.com",
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createBottomTableData(
      7,
      "Test test7",
      "test@test7@gmail.com",
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createBottomTableData(
      8,
      "Test test8",
      "test@test8@gmail.com",
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createBottomTableData(
      9,
      "Test test9",
      "test@test9@gmail.com",
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createBottomTableData(
      10,
      "Test test10",
      "test@test10@gmail.com",
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createBottomTableData(
      11,
      "Test test11",
      "test@test11@gmail.com",
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createBottomTableData(
      12,
      "Test test12",
      "test@test12@gmail.com",
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createBottomTableData(
      13,
      "Test test13",
      "test@test13@gmail.com",
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createBottomTableData(
      14,
      "Test test14",
      "test@test14@gmail.com",
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createBottomTableData(
      15,
      "Test test15",
      "test@test15@gmail.com",
      d.toLocaleDateString("en-US", dateOptions)
    ),
  ];

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3} width="100%" display="flex">
            {children}
          </Box>
        )}
      </div>
    );
  }

  // BOTTOM ROWS

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  // PAGINATION

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  // THEME
  const theme = useSelector((state) => state.themeReducer.currentTheme);
  const usedTheme = useTheme();

  return (
    <Box>
      <Box mb={4} p={3}>
        <Box mb={8}>
          <Typography variant="h2"> Campaign report</Typography>
        </Box>
        <Grid container={true}>
          <Typography variant="h4">
            Title: Not set{" "}
            <IconButton>
              {" "}
              <EditIcon />
            </IconButton>
          </Typography>
        </Grid>
        <Box mb={8}>
          <Typography variant="h4">
            {" "}
            Subject: welcome1
            <IconButton>
              {" "}
              <VisibilityIcon />{" "}
            </IconButton>
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="h4">
            Sent on Fri, Jan 29,2021, 11:29AM to
            <Button
              variant="contained"
              disabled
              style={styles.disabledButtonStyles}
            >
              2 subscribers
            </Button>
          </Typography>
        </Box>
        <Grid container={true}>
          <Typography variant="h4" gutterBottom>
            To:
            <Button
              variant="contained"
              disabled
              style={styles.disabledButtonStyles}
            >
              List: Sean-Test
            </Button>
          </Typography>
        </Grid>
        <Grid container={true}>
          <Typography variant="h4" gutterBottom>
            Excluded: No data
          </Typography>
        </Grid>
      </Box>

      <Box display="flex" justifyContent="center" p={3}>
        <Grid container={true} spacing={5}>
          <Grid item={true} lg={3} md={3} sm={6} xs={6}>
            <Box
              bgcolor="#2c2c2c"
              width="100%"
              p={2}
              borderRadius="10px 10px 0 0"
            >
              <Typography style={styles.headingTextStyles}>
                Recipients
              </Typography>
            </Box>
            <Box
              display="flex"
              p={5}
              justifyContent="center"
              justifyItems="center"
              style={
                theme === "DARK"
                  ? usedTheme.overrides.opacityBlack
                  : usedTheme.overrides.opacityLight
              }
              borderRadius="0 0 10px 10px"
              flexDirection="column"
              height="90px"
            >
              <Box display="flex" justifyContent="center">
                <Typography variant="h3">12.348</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item={true} lg={3} md={3} sm={6} xs={6}>
            <Box bgcolor="#77c1d4" p={2} borderRadius="10px 10px 0 0">
              <Typography style={styles.headingTextStyles}>Opens</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              justifyItems="center"
              flexDirection="column"
              p={5}
              borderRadius="0 0 10px 10px"
              style={
                theme === "DARK"
                  ? usedTheme.overrides.opacityBlack
                  : usedTheme.overrides.opacityLight
              }
              height="90px"
            >
              <Box display="flex" justifyContent="center">
                <Typography variant="h3">38%</Typography>
              </Box>
              <Box display="flex" justifyContent="center">
                <Typography style={{ color: "#77c1d4", marginRight: "5px" }}>
                  {" "}
                  1.380{" "}
                </Typography>{" "}
                <Typography> unique opens </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item={true} lg={3} md={3} sm={6} xs={6}>
            <Box bgcolor="#e89d38" p={2} borderRadius="10px 10px 0 0">
              <Typography style={styles.headingTextStyles}>Clicks</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              justifyItems="center"
              p={5}
              style={
                theme === "DARK"
                  ? usedTheme.overrides.opacityBlack
                  : usedTheme.overrides.opacityLight
              }
              borderRadius="0 0 10px 10px"
              flexDirection="column"
              height="90px"
            >
              <Box display="flex" justifyContent="center">
                {" "}
                <Typography variant="h3">38%</Typography>
              </Box>
              <Box display="flex" justifyContent="center">
                {" "}
                <Typography style={{ color: "#e1ba59", marginRight: "5px" }}>
                  270
                </Typography>
                <Typography> unique clicks </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item={true} lg={3} md={3} sm={6} xs={6}>
            <Box bgcolor="#d65440" p={2} borderRadius="10px 10px 0 0">
              <Typography style={styles.headingTextStyles}>
                Unsubscribes
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              justifyItems="center"
              p={5}
              borderRadius="0 0 10px 10px"
              style={
                theme === "DARK"
                  ? usedTheme.overrides.opacityBlack
                  : usedTheme.overrides.opacityLight
              }
              flexDirection="column"
              height="90px"
            >
              <Box display="flex" justifyContent="center">
                <Typography variant="h3">1%</Typography>
              </Box>

              <Box display="flex" justifyContent="center">
                {" "}
                <Typography style={{ color: "#c86959", marginRight: "5px" }}>
                  14
                </Typography>
                <Typography> unsubscribes </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid container={true}>
        <Grid container={true} item={true} lg={6} md={12} sm={12} xs={12}>
          <Grid container={true} item={true} lg={6} md={6} sm={6} xs={6}>
            <Pie height={350} data={data} options={options} />
          </Grid>
          <Grid
            container={true}
            item={true}
            justify="center"
            alignContent="center"
            lg={6}
            md={6}
            sm={6}
            xs={6}
          >
            {data.labels.map((item, i) => (
              <Box
                display="flex"
                p={2}
                width="100%"
                justifyContent="center"
                key={i}
              >
                <Grid item={true} lg={1} md={2} sm={1} xs={1}>
                  <Box
                    style={{
                      height: "15px",
                      width: "15px",
                      backgroundColor: data.datasets[0].backgroundColor[i],
                      borderRadius: "50%",
                    }}
                  ></Box>
                </Grid>
                <Grid item={true} lg={7} md={7} sm={7} xs={7}>
                  <Typography variant="h5">{item}</Typography>
                </Grid>
              </Box>
            ))}
          </Grid>
        </Grid>
        <Grid container={true} item={true} lg={6} md={12} sm={12} xs={12}>
          <Box pt={5} pb={5} pl={3}>
            <Typography variant="h6"> Last 10 opened</Typography>
          </Box>
          <Table
            style={
              theme === "DARK"
                ? usedTheme.overrides.opacityBlack
                : usedTheme.overrides.opacityLight
            }
          >
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {topRightRows.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>
                    <Chip
                      label={item.status}
                      size="small"
                      style={
                        item.status === "unsubscribed"
                          ? { background: red[500], color: "#ffffff" }
                          : { background: green[500], color: "#ffffff" }
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
      <Grid container={true}>
        <Box width="100%" mt={5}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Sent" {...a11yProps(0)} />
              <Tab label="Opened" {...a11yProps(1)} />
              <Tab label="Not Opened" {...a11yProps(2)} />
              <Tab label="Clicked" {...a11yProps(3)} />
              <Tab label="Bounced" {...a11yProps(4)} />
              <Tab label="Unsubscribed" {...a11yProps(5)} />
              <Tab label="Complained" {...a11yProps(6)} />
            </Tabs>
          </AppBar>

          <TabPanel value={value} index={0} style={{ width: "100%" }}>
            <Grid container={true}>
              <Grid container={true} justify="flex-end">
                <Box mt={2} mb={2}>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      console.log("submitted");
                    }}
                  >
                    <TextField variant="outlined" size="small" />
                    <Button
                      type="submit"
                      style={{ marginLeft: "10px" }}
                      variant="outlined"
                    >
                      <Search />
                      Search
                    </Button>
                  </form>
                </Box>
              </Grid>
              <Table
                style={
                  theme === "DARK"
                    ? usedTheme.overrides.opacityBlack
                    : usedTheme.overrides.opacityLight
                }
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="right" style={{ paddingRight: "75px" }}>
                      Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? bottomRows.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : bottomRows
                  ).map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell align="center">{row.email}</TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      onChangePage={handleChangePage}
                      rowsPerPage={rowsPerPage}
                      count={bottomRows.length}
                      page={page}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1} style={{ width: "100%" }}>
            <Grid container={true}>
              <Grid container={true} justify="flex-end">
                <Box mt={2} mb={2}>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      console.log("submitted");
                    }}
                  >
                    <TextField variant="outlined" size="small" />
                    <Button
                      type="submit"
                      style={{ marginLeft: "10px" }}
                      variant="outlined"
                    >
                      <Search />
                      Search
                    </Button>
                  </form>
                </Box>
              </Grid>
              <Table
                style={
                  theme === "DARK"
                    ? usedTheme.overrides.opacityBlack
                    : usedTheme.overrides.opacityLight
                }
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="right" style={{ paddingRight: "75px" }}>
                      Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? bottomRows.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : bottomRows
                  ).map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell align="center">{row.email}</TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      onChangePage={handleChangePage}
                      rowsPerPage={rowsPerPage}
                      count={bottomRows.length}
                      page={page}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2} style={{ width: "100%" }}>
            <Grid container={true}>
              <Grid container={true} justify="flex-end">
                <Box mt={2} mb={2}>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      console.log("submitted");
                    }}
                  >
                    <TextField variant="outlined" size="small" />
                    <Button
                      type="submit"
                      style={{ marginLeft: "10px" }}
                      variant="outlined"
                    >
                      <Search />
                      Search
                    </Button>
                  </form>
                </Box>
              </Grid>
              <Table
                style={
                  theme === "DARK"
                    ? usedTheme.overrides.opacityBlack
                    : usedTheme.overrides.opacityLight
                }
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="right" style={{ paddingRight: "75px" }}>
                      Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? bottomRows.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : bottomRows
                  ).map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell align="center">{row.email}</TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      onChangePage={handleChangePage}
                      rowsPerPage={rowsPerPage}
                      count={bottomRows.length}
                      page={page}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={3} style={{ width: "100%" }}>
            <Grid container={true}>
              <Grid container={true} justify="flex-end">
                <Box mt={2} mb={2}>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      console.log("submitted");
                    }}
                  >
                    <TextField variant="outlined" size="small" />
                    <Button
                      type="submit"
                      style={{ marginLeft: "10px" }}
                      variant="outlined"
                    >
                      <Search />
                      Search
                    </Button>
                  </form>
                </Box>
              </Grid>
              <Table
                style={
                  theme === "DARK"
                    ? usedTheme.overrides.opacityBlack
                    : usedTheme.overrides.opacityLight
                }
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="right" style={{ paddingRight: "75px" }}>
                      Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? bottomRows.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : bottomRows
                  ).map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell align="center">{row.email}</TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      onChangePage={handleChangePage}
                      rowsPerPage={rowsPerPage}
                      count={bottomRows.length}
                      page={page}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={4} style={{ width: "100%" }}>
            <Grid container={true}>
              <Grid container={true} justify="flex-end">
                <Box mt={2} mb={2}>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      console.log("submitted");
                    }}
                  >
                    <TextField variant="outlined" size="small" />
                    <Button
                      type="submit"
                      style={{ marginLeft: "10px" }}
                      variant="outlined"
                    >
                      <Search />
                      Search
                    </Button>
                  </form>
                </Box>
              </Grid>
              <Table
                style={
                  theme === "DARK"
                    ? usedTheme.overrides.opacityBlack
                    : usedTheme.overrides.opacityLight
                }
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="right" style={{ paddingRight: "75px" }}>
                      Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? bottomRows.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : bottomRows
                  ).map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell align="center">{row.email}</TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      onChangePage={handleChangePage}
                      rowsPerPage={rowsPerPage}
                      count={bottomRows.length}
                      page={page}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={5} style={{ width: "100%" }}>
            <Grid container={true}>
              <Grid container={true} justify="flex-end">
                <Box mt={2} mb={2}>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      console.log("submitted");
                    }}
                  >
                    <TextField variant="outlined" size="small" />
                    <Button
                      type="submit"
                      style={{ marginLeft: "10px" }}
                      variant="outlined"
                    >
                      <Search />
                      Search
                    </Button>
                  </form>
                </Box>
              </Grid>
              <Table
                style={
                  theme === "DARK"
                    ? usedTheme.overrides.opacityBlack
                    : usedTheme.overrides.opacityLight
                }
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="right" style={{ paddingRight: "75px" }}>
                      Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? bottomRows.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : bottomRows
                  ).map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell align="center">{row.email}</TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      onChangePage={handleChangePage}
                      rowsPerPage={rowsPerPage}
                      count={bottomRows.length}
                      page={page}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={6} style={{ width: "100%" }}>
            <Grid container={true}>
              <Grid container={true} justify="flex-end">
                <Box mt={2} mb={2}>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      console.log("submitted");
                    }}
                  >
                    <TextField variant="outlined" size="small" />
                    <Button
                      type="submit"
                      style={{ marginLeft: "10px" }}
                      variant="outlined"
                    >
                      <Search />
                      Search
                    </Button>
                  </form>
                </Box>
              </Grid>
              <Table
                style={
                  theme === "DARK"
                    ? usedTheme.overrides.opacityBlack
                    : usedTheme.overrides.opacityLight
                }
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="right" style={{ paddingRight: "75px" }}>
                      Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? bottomRows.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : bottomRows
                  ).map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell align="center">{row.email}</TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      onChangePage={handleChangePage}
                      rowsPerPage={rowsPerPage}
                      count={bottomRows.length}
                      page={page}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </Grid>
          </TabPanel>
        </Box>
      </Grid>
    </Box>
  );
}

const styles = {
  headingTextStyles: {
    color: "#ffffff",
    textAlign: "center",
  },

  disabledButtonStyles: {
    marginLeft: "5px",
  },
};
