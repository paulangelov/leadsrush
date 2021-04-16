import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Tabs,
  TextField,
  Typography,
  useTheme,
} from "@material-ui/core";
import BlockIcon from "@material-ui/icons/Block";
import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Search } from "react-feather";
import { useSelector } from "react-redux";

export default function MailListReport() {
  const theme = useSelector((state) => state.themeReducer.currentTheme);
  const usedTheme = useTheme();

  // BAR CHART
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Last year",
        backgroundColor: "#6068e0",
        borderColor: "#6068e0",
        hoverBackgroundColor: "#6068e0",
        hoverBorderColor: "#6068e0",
        data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
        barPercentage: 0.75,
        categoryPercentage: 0.5,
      },
      {
        label: "This year",
        backgroundColor: "#e0e0e0",
        borderColor: "#e0e0e0",
        hoverBackgroundColor: "#e0e0e0",
        hoverBorderColor: "#e0e0e0",
        data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
        barPercentage: 0.75,
        categoryPercentage: 0.5,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          stacked: false,
          ticks: {
            stepSize: 20,
          },
        },
      ],
      xAxes: [
        {
          stacked: false,
          gridLines: {
            color: "transparent",
          },
        },
      ],
    },
  };

  // LINE CHART

  const lineChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales ($)",
        fill: true,
        backgroundColor: "transparent",
        borderColor: "#6068e0",
        data: [
          2115,
          1562,
          1584,
          1892,
          1487,
          2223,
          2966,
          2448,
          2905,
          3838,
          2917,
          3327,
        ],
      },
    ],
  };

  const lineChartOptions = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      intersect: false,
    },
    hover: {
      intersect: true,
    },
    plugins: {
      filler: {
        propagate: false,
      },
    },
    scales: {
      xAxes: [
        {
          reverse: true,
          gridLines: {
            color: "rgba(0,0,0,0.05)",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            stepSize: 500,
          },
          display: true,
          borderDash: [5, 5],
          gridLines: {
            color: "rgba(0,0,0,0)",
            fontColor: "#fff",
          },
        },
      ],
    },
  };

  // TAB PANEL
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

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  const [value, setValue] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  function createBottomTableData(id, name, email) {
    return { id, name, email };
  }
  const bottomRows = [
    createBottomTableData(1, "Test test1", "test@test1@gmail.com"),
    createBottomTableData(2, "Test test2", "test@test2@gmail.com"),
    createBottomTableData(3, "Test test3", "test@test3@gmail.com"),
    createBottomTableData(4, "Test test4", "test@test4@gmail.com"),
    createBottomTableData(5, "Test test5", "test@test5@gmail.com"),
    createBottomTableData(6, "Test test6", "test@test6@gmail.com"),
    createBottomTableData(7, "Test test7", "test@test7@gmail.com"),
    createBottomTableData(8, "Test test8", "test@test8@gmail.com"),
    createBottomTableData(9, "Test test9", "test@test9@gmail.com"),
    createBottomTableData(10, "Test test10", "test@test10@gmail.com"),
    createBottomTableData(11, "Test test11", "test@test11@gmail.com"),
    createBottomTableData(12, "Test test12", "test@test12@gmail.com"),
    createBottomTableData(13, "Test test13", "test@test13@gmail.com"),
    createBottomTableData(14, "Test test14", "test@test14@gmail.com"),
    createBottomTableData(15, "Test test15", "test@test15@gmail.com"),
  ];

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  return (
    <Box>
      <Box display="flex" justifyContent="center" p={5}>
        <Grid container={true} justify="center" spacing={5}>
          <Grid item={true} lg={3} md={4} sm={6} xs={6}>
            <Box
              bgcolor="#2c2c2c"
              width="100%"
              p={2}
              borderRadius="10px 10px 0 0"
            >
              <Typography style={styles.headingTextStyles}>
                Subscribers
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
              <Box width="100%" display="flex" justifyContent="center">
                <Typography variant="h3">1245</Typography>
              </Box>
              <Box
                width="100%"
                display="flex"
                justifyContent="center"
                p={1}
              ></Box>
            </Box>
          </Grid>
          <Grid item={true} lg={3} md={4} sm={6} xs={6}>
            <Box
              bgcolor="#77c1d4"
              width="100%"
              p={2}
              borderRadius="10px 10px 0 0"
            >
              <Typography style={styles.headingTextStyles}>
                Open Rate
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
              <Box width="100%" display="flex" justifyContent="center">
                <Typography variant="h3">46.72%</Typography>
              </Box>
              <Box
                width="100%"
                display="flex"
                justifyContent="center"
                p={1}
              ></Box>
            </Box>
          </Grid>
          <Grid item={true} lg={3} md={4} sm={6} xs={6}>
            <Box
              bgcolor="#e89d38"
              width="100%"
              p={2}
              borderRadius="10px 10px 0 0"
            >
              <Typography style={styles.headingTextStyles}>
                Click Rate
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
              <Box width="100%" display="flex" justifyContent="center">
                <Typography variant="h3">6.92%</Typography>
              </Box>
              <Box
                width="100%"
                display="flex"
                justifyContent="center"
                p={1}
              ></Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box width="100%" p={3}>
        <Grid container={true}>
          <Grid container={true} item={true} lg={6} md={6} sm={12} xs={12}>
            <Box p={4} width="100%">
              {" "}
              <Typography variant="h5"> Emails Sent </Typography>
            </Box>
            <Box width="100%" height="300px">
              <Bar data={data} options={options} />
            </Box>
          </Grid>
          <Grid container={true} item={true} lg={6} md={6} sm={12} xs={12}>
            <Box p={4} width="100%">
              {" "}
              <Typography variant="h5"> List Growth </Typography>
            </Box>
            <Box width="100%" height="300px">
              <Line data={lineChartData} options={lineChartOptions} />
            </Box>
          </Grid>
        </Grid>
      </Box>
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
              <Tab label="Recipients" {...a11yProps(0)} />
              <Tab label="Active" {...a11yProps(1)} />
              <Tab label="Bounced" {...a11yProps(2)} />
              <Tab label="Unsubscribed" {...a11yProps(3)} />
              <Tab label="Complained" {...a11yProps(4)} />
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
                    <TableCell align="right">Unsubscribe</TableCell>
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
                      <TableCell align="right">
                        <IconButton>
                          {" "}
                          <BlockIcon />
                        </IconButton>
                      </TableCell>
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
                    <TableCell align="right">Unsubscribe</TableCell>
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
                      <TableCell align="right">
                        <IconButton>
                          {" "}
                          <BlockIcon />
                        </IconButton>
                      </TableCell>
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
                    <TableCell align="right">Unsubscribe</TableCell>
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
                      <TableCell align="right">
                        <IconButton>
                          {" "}
                          <BlockIcon />
                        </IconButton>
                      </TableCell>
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
                    <TableCell align="right">Unsubscribe</TableCell>
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
                      <TableCell align="right">
                        <IconButton>
                          {" "}
                          <BlockIcon />
                        </IconButton>
                      </TableCell>
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
                    <TableCell align="right">Unsubscribe</TableCell>
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
                      <TableCell align="right">
                        <IconButton>
                          {" "}
                          <BlockIcon />
                        </IconButton>
                      </TableCell>
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
};
