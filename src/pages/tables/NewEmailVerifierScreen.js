import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Chip,
  FormControl,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { Mail, Search } from "react-feather";
import { AddCircle, Email } from "@material-ui/icons";
import { green, grey, orange, red } from "@material-ui/core/colors";
import { useSelector } from "react-redux";

export default function NewEmailVerifierScreen() {
  const [search, setSearch] = useState();
  const [searchResults, setSearchResults] = useState();
  const theme = useSelector((state) => state.themeReducer.currentTheme);
  const usedTheme = useTheme();
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };
  const handleSearchResultSubmit = (e) => {
    e.preventDefault();
    console.log(searchResults);
  };

  function createData(id, email, validity) {
    return { id, email, validity };
  }

  const rows = [
    createData(1, "test1@gmail.com", "unverified"),
    createData(2, "test2@gmail.com", "valid"),
    createData(3, "test3@gmail.com", "invalid"),
    createData(4, "test4@gmail.com", "catch-all"),
    createData(5, "test5@gmail.com", "unverified"),
    createData(6, "test6@gmail.com", "valid"),
    createData(7, "test7@gmail.com", "invalid"),
    createData(8, "test8@gmail.com", "catch-all"),
    createData(9, "test9@gmail.com", "unverified"),
    createData(10, "test10@gmail.com", "valid"),
    createData(11, "test11@gmail.com", "invalid"),
    createData(12, "test12@gmail.com", "catch-all"),
    createData(13, "test13@gmail.com", "unverified"),
    createData(14, "test14@gmail.com", "valid"),
    createData(15, "test15@gmail.com", "invalid"),
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
      id: "email",
      numeric: false,
      label: "Email",
    },
    {
      id: "validity",
      numeric: false,
      label: "Validity",
    },
    {
      label: "Option",
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
                headCell.id === "option"
                  ? "right"
                  : headCell.id === "email"
                  ? "left"
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
    <Grid>
      <Grid container={true} justify="center">
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Card>
            <Box p={2} mb={2}>
              <Typography variant="h3" gutterBottom>
                Email Verifier
              </Typography>
              <form onSubmit={handleSearchSubmit}>
                <Grid
                  container={true}
                  justify="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item lg={9} md={9} sm={9} xs={12}>
                    <FormControl fullWidth>
                      <TextField
                        variant="outlined"
                        onChange={(e) => setSearch(e.target.value)}
                        required={true}
                        type="email"
                        size="medium"
                        label="joedoe@company.com"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item lg={3} md={3} sm={3} xs={12}>
                    <Button
                      type="submit"
                      size="large"
                      variant="contained"
                      color="primary"
                      p={2}
                      fullWidth={true}
                    >
                      Search
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Card>
          <Box mt={4}>
            <Card>
              <Box p={4} display="flex" alignItems="center">
                <Grid item={true} lg={6} md={8} sm={6} xs={6}>
                  <Typography variant="h3" gutterBottom>
                    test@domain.com
                  </Typography>
                </Grid>
                <Grid
                  container={true}
                  alignItems="center"
                  item={true}
                  lg={6}
                  md={6}
                  sm={6}
                  xs={6}
                >
                  <Grid item={true} lg={6} md={4} sm={6} xs={6}>
                    <Chip
                      label={"Valid"}
                      style={{
                        backgroundColor: green[500],
                        color: "#ffffff",
                      }}
                    />
                  </Grid>
                  <Grid
                    container={true}
                    justify="flex-end"
                    item={true}
                    lg={6}
                    md={8}
                    sm={6}
                    xs={6}
                  >
                    <IconButton>
                      {" "}
                      <AddCircle />
                    </IconButton>
                    <IconButton>
                      <Email />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Box>
        </Grid>
      </Grid>
      <Box display="flex" flexWrap="wrap" width="100%" mt={5}>
        <Card elevation={3} style={{ width: "100%" }}>
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
          style={
            theme === "DARK"
              ? usedTheme.overrides.opacityBlack
              : usedTheme.overrides.opacityLight
          }
          className={classes.table}
          aria-labelledby="tableTitle"
          size={dense ? "small" : "medium"}
          aria-label="enhanced table"
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
                const isItemSelected = isSelected(row.email);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.email)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.email}
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
                      {row.email}
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      style={styles.centerCell}
                      padding="none"
                    >
                      {row.validity === "unverified" ? (
                        <Box>
                          <Chip
                            label={"Unverified"}
                            style={{
                              backgroundColor: grey[500],
                              color: "#ffffff",
                            }}
                          />
                          <Button
                            color="primary"
                            style={styles.verifyButtonStyle}
                          >
                            Verify
                          </Button>
                        </Box>
                      ) : row.validity === "valid" ? (
                        <Chip
                          label={"Valid"}
                          style={{
                            backgroundColor: green[500],
                            color: "#ffffff",
                          }}
                        />
                      ) : row.validity === "invalid" ? (
                        <Chip
                          label={"Invalid"}
                          style={{
                            backgroundColor: red[500],
                            color: "#ffffff",
                          }}
                        />
                      ) : (
                        <Chip
                          label={"CatchAll"}
                          style={{
                            backgroundColor: orange[500],
                            color: "#ffffff",
                          }}
                        />
                      )}
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
  );
}

const styles = {
  verifyButtonStyle: {
    marginLeft: "10px",
  },
  centerCell: {
    transform: "translate(40%, 0%)",
  },
  centerHeaderCell: {
    transform: "translate(45%, 0%)",
  },
};
