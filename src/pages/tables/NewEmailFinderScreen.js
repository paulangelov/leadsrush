import React, { useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Card,
  TextField,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  Checkbox,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AddCircle, Email } from "@material-ui/icons";

import { Mail, Search } from "react-feather";
import { useSelector } from "react-redux";

export default function NewEmailFinderScreen() {
  const theme = useSelector((state) => state.themeReducer.currentTheme);
  const usedTheme = useTheme();
  const [name, setName] = useState();
  const [at, setAt] = useState("@");
  const [website, setWebsite] = useState();
  const [profilePicture, setProfilePicture] = useState();
  const [searchResults, setSearchResults] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, at, website);
  };
  const handleSearchResultSubmit = (e) => {
    e.preventDefault();
  };

  // TABLE

  function createData(id, name, role, email) {
    return { id, name, role, email };
  }

  const rows = [
    createData(1, "Test 1 ", "IT Manager", "test1@gmail.com"),
    createData(2, "Test 2 ", "IT Manager", "test2@gmail.com"),
    createData(3, "Test 3 ", "IT Manager", "test3@gmail.com"),
    createData(4, "Test 4 ", "IT Manager", "test4@gmail.com"),
    createData(5, "Test 5 ", "IT Manager", "test5@gmail.com"),
    createData(6, "Test 6 ", "IT Manager", "test6@gmail.com"),
    createData(7, "Test 7 ", "IT Manager", "test7@gmail.com"),
    createData(8, "Test 8 ", "IT Manager", "test8@gmail.com"),
    createData(9, "Test 9 ", "IT Manager", "test9@gmail.com"),
    createData(10, "Test 10", "IT Manager", "test10@gmail.com"),
    createData(11, "Test 11", "IT Manager", "test11@gmail.com"),
    createData(12, "Test 12", "IT Manager", "test12@gmail.com"),
    createData(13, "Test 13", "IT Manager", "test13@gmail.com"),
    createData(14, "Test 14", "IT Manager", "test14@gmail.com"),
    createData(15, "Test 15", "IT Manager", "test15@gmail.com"),
    createData(16, "Test 16", "IT Manager", "test16@gmail.com"),
    createData(17, "Test 17", "IT Manager", "test17@gmail.com"),
    createData(18, "Test 18", "IT Manager", "test18@gmail.com"),
    createData(19, "Test 19", "IT Manager", "test19@gmail.com"),
    createData(20, "Test 20", "IT Manager", "test20@gmail.com"),
  ];

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const headCells = [
    {
      id: "name",
      numeric: false,
      label: "Name",
    },
    {
      id: "role",
      numeric: false,
      label: "Role",
    },
    {
      id: "email",
      numeric: false,
      label: "Email",
    },
    {
      label: "Option",
      numeric: false,
      id: "option",
    },
  ];

  function EnhancedTableHead(props) {
    const {
      classes,
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
      onRequestSort,
    } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ "aria-label": "select all desserts" }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.label}
              align={
                headCell.id === "role" || headCell.id === "email"
                  ? "center"
                  : headCell.id === "option"
                  ? "right"
                  : ""
              }
              style={headCell.id === "validity" ? styles.centerHeaderCell : {}}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1,
    },
  }));
  const classes = useStyles();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.email);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <Grid container={true} justify="center">
      <Grid item={true} lg={6} md={12} sm={12} xs={12}>
        <Box width="100%" mb={4}>
          <Card>
            <Box p={4} width="100%">
              <Typography variant="h3" gutterBottom={true}>
                Email Finder{" "}
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid container={true}>
                  <Grid
                    container={true}
                    item={true}
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                  >
                    {" "}
                    <Grid item={true} lg={10} md={10} sm={10} xs={9}>
                      {" "}
                      <TextField
                        variant="outlined"
                        fullWidth={true}
                        placeholder="John Doe"
                        onChange={(e) => setName(e.target.value)}
                      />{" "}
                    </Grid>
                    <Grid item={true} lg={2} md={2} sm={2} xs={3}>
                      {" "}
                      <TextField
                        variant="outlined"
                        style={styles.atInput}
                        inputProps={{ style: { textAlign: "center" } }}
                        justify="center"
                        disabled={true}
                        value={at}
                      />{" "}
                    </Grid>
                  </Grid>{" "}
                  <Grid
                    container={true}
                    alignItems="center"
                    justify="space-between"
                    item={true}
                    spacing={1}
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                  >
                    {" "}
                    <Grid item={true} lg={9} md={9} sm={9} xs={9}>
                      <TextField
                        variant="outlined"
                        fullWidth={true}
                        placeholder="Website"
                        onChange={(e) => setWebsite(e.target.value)}
                      />
                    </Grid>
                    <Grid item={true} lg={3} md={3} sm={3} xs={3}>
                      {" "}
                      <Button
                        size="large"
                        color="primary"
                        fullWidth={true}
                        variant="contained"
                        type="submit"
                      >
                        {" "}
                        Search{" "}
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Card>
        </Box>
        <Box width="100%" mb={4}>
          <Card>
            <Box p={4} width="100%">
              <Grid container={true}>
                <Grid item={true} xs={4} sm={2} md={2} lg={2}>
                  {" "}
                  <img
                    width="80px"
                    height="80px"
                    style={styles.profilePicture}
                    alt="Profile"
                    src={
                      profilePicture
                        ? profilePicture
                        : "http://www.girardatlarge.com/wp-content/uploads/2013/05/gravatar-60-grey.jpg"
                    }
                  />
                </Grid>

                <Grid
                  container={true}
                  item={true}
                  xs
                  sm
                  md
                  lg
                  direction="column"
                >
                  {" "}
                  <Typography variant="h3" gutterBottom={true}>
                    {" "}
                    Name Surname{" "}
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom={true}>
                    {" "}
                    IT manager at Amazon{" "}
                  </Typography>
                  <Typography variant="h6" gutterBottom={true}>
                    San Diego United States{" "}
                  </Typography>
                </Grid>
              </Grid>
              <Box width="100%" mt={5}>
                <Grid container={true} alignItems="center">
                  <Grid container={true}>
                    {" "}
                    <Typography variant="h4" gutterBottom={true}>
                      {" "}
                      Email: test@domain.com
                    </Typography>
                  </Grid>
                  <Grid item={true} lg={6} md={6} sm={6} xs={6}>
                    <Typography variant="h4" gutterBottom={true}>
                      {" "}
                      LinkedIn: www.linkedin.com/test
                    </Typography>
                  </Grid>
                  <Grid
                    container={true}
                    justify={"flex-end"}
                    item={true}
                    lg={6}
                    md={6}
                    sm={6}
                    xs={6}
                  >
                    <IconButton>
                      {" "}
                      <AddCircle />{" "}
                    </IconButton>
                    <IconButton>
                      {" "}
                      <Email />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>{" "}
            </Box>
          </Card>
        </Box>
      </Grid>
      <Grid container={true}>
        <Box width="100%">
          <Card>
            {" "}
            <Box
              p={4}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h3">Result History</Typography>
              <form onSubmit={handleSearchResultSubmit}>
                <TextField
                  variant="outlined"
                  size="small"
                  onChange={(e) => setSearchResults(e.target.value)}
                />
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
          </Card>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
            style={
              theme === "DARK"
                ? usedTheme.overrides.opacityBlack
                : usedTheme.overrides.opacityLight
            }
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        align="center"
                      >
                        {row.role}
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        align="center"
                      >
                        {row.email}
                      </TableCell>
                      <TableCell align="right">
                        <IconButton>
                          <AddCircle />
                        </IconButton>
                        <IconButton>
                          <Mail />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  count={rows.length}
                  rowsPerPage={10}
                  page={page}
                  onChangePage={handleChangePage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </Box>
      </Grid>
    </Grid>
  );
}

const styles = {
  atInput: {
    minWidth: "40px",
  },
  profilePicture: { borderRadius: "50%" },
};
