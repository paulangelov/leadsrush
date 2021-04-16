import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Grid,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
  IconButton,
  TableBody,
  TablePagination,
  Table,
  TextField,
  TableFooter,
} from "@material-ui/core";
import {
  Globe,
  Mail,
  MapPin,
  Phone,
  PlusCircle,
  Search,
  Users,
} from "react-feather";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

export default function CompanyDataScreen() {
  const theme = useSelector((state) => state.themeReducer.currentTheme);
  const usedTheme = useTheme();
  const company = {
    headquarters:
      "One Apple Park Way, Cupertino, California, 95014, United States",
    phone: "(408) 996-1010",
    website: "www.apple.com",
    employees: "147,000",
  };

  function createData(id, name, role, location, options) {
    return { id, name, role, location, options };
  }

  const rows = [
    createData(1, "Test 1", "CEO", "Cupertino", [<PlusCircle />, <Mail />]),
    createData(2, "Test 2", "CEO", "Cupertino", [<PlusCircle />, <Mail />]),
    createData(3, "Test 3", "CEO", "Cupertino", [<PlusCircle />, <Mail />]),
    createData(4, "Test 4", "CEO", "Cupertino", [<PlusCircle />, <Mail />]),
    createData(5, "Test 5", "CEO", "Cupertino", [<PlusCircle />, <Mail />]),
    createData(6, "Test 6", "CEO", "Cupertino", [<PlusCircle />, <Mail />]),
    createData(7, "Test 7", "CEO", "Cupertino", [<PlusCircle />, <Mail />]),
    createData(8, "Test 8", "CEO", "Cupertino", [<PlusCircle />, <Mail />]),
    createData(9, "Test 9", "CEO", "Cupertino", [<PlusCircle />, <Mail />]),
    createData(10, "Test 10", "CEO", "Cupertino", [<PlusCircle />, <Mail />]),
    createData(11, "Test 11", "CEO", "Cupertino", [<PlusCircle />, <Mail />]),
    createData(12, "Test 12", "CEO", "Cupertino", [<PlusCircle />, <Mail />]),
    createData(13, "Test 13", "CEO", "Cupertino", [<PlusCircle />, <Mail />]),
    createData(14, "Test 14", "CEO", "Cupertino", [<PlusCircle />, <Mail />]),
    createData(15, "Test 15", "CEO", "Cupertino", [<PlusCircle />, <Mail />]),
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
      id: "location",
      numeric: false,
      label: "Location",
    },
    {
      id: "option",
      numeric: false,
      label: "Option",
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
              key={headCell.id}
              align={
                headCell.id === "option" || headCell.id === "location"
                  ? "right"
                  : "center"
              }
              style={headCell.id === "name" ? { textAlign: "left" } : {}}
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

  const useStyles = makeStyles(() => ({
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
      const newSelecteds = rows.map((n) => n.name);
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
    <React.Fragment>
      <Box mb={10}>
        <Card elevation={3}>
          <Box p={8} display="flex" alignContent="center" alignItems="center">
            <IconButton variant="outlined">
              <img
                src={"https://logo.clearbit.com/apple.com"}
                width="128px"
                height="128px"
                alt="company logo"
              />
            </IconButton>
            <Box ml={10}>
              <Typography variant="h2"> Apple </Typography>
            </Box>
          </Box>
        </Card>
      </Box>
      <Box mb={10}>
        <Card elevation={3}>
          <Box p={8} display="flex" flexWrap="wrap">
            <Grid container={true}>
              <Typography variant="h3" gutterBottom>
                Description
              </Typography>
            </Grid>
            <Grid container={true}>
              <Typography gutterBottom>
                Headquartered in Cupertino, California, Apple Inc. is a
                multinational technology company that designs, develops and
                sells consumer electronics, computer softwar...{" "}
                <Button color="primary">ReadMore</Button>
              </Typography>
            </Grid>

            <Box mt={5} width="100%" display="flex">
              <Grid container={true} alignItems="center" alignContent="center">
                <Box pl={2} pr={4}>
                  <MapPin />
                </Box>

                <Typography variant="subtitle2"> Headquarters: </Typography>
                <Box ml={1}>
                  <Typography variant="body2">
                    {company.headquarters}
                  </Typography>
                </Box>
              </Grid>
            </Box>
            <Box mt={5} width="100%" display="flex">
              <Grid container={true} alignItems="center" alignContent="center">
                <Box pl={2} pr={4}>
                  <Phone />
                </Box>

                <Typography variant="subtitle2"> Phone: </Typography>
                <Box ml={1}>
                  <Typography variant="body2"> {company.phone}</Typography>
                </Box>
              </Grid>
            </Box>
            <Box mt={5} width="100%" display="flex">
              <Grid container={true} alignItems="center" alignContent="center">
                <Box pl={2} pr={4}>
                  <Globe />
                </Box>

                <Typography variant="subtitle2"> Website: </Typography>
                <Box ml={1}>
                  <Typography variant="body2">
                    <Button color="primary"> {company.website} </Button>
                  </Typography>
                </Box>
              </Grid>
            </Box>
            <Box mt={5} width="100%" display="flex">
              <Grid container={true} alignItems="center" alignContent="center">
                <Box pl={2} pr={4}>
                  <Users />
                </Box>

                <Typography variant="subtitle2"> Employees: </Typography>
                <Box ml={1}>
                  <Typography variant="body2"> {company.employees}</Typography>
                </Box>
              </Grid>
            </Box>
          </Box>
        </Card>
      </Box>

      <Box display="flex" flexWrap="wrap" width="100%">
        <Card elevation={3} style={{ width: "100%" }}>
          <Box p={4} display="flex" justifyContent="space-between">
            <Typography variant="h3">Employees</Typography>
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
                    <TableCell align="center">{row.role}</TableCell>
                    <TableCell align="right">{row.location}</TableCell>
                    <TableCell align="right">
                      {" "}
                      <IconButton>{row.options[0]} </IconButton>
                      <IconButton>{row.options[1]} </IconButton>
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
    </React.Fragment>
  );
}
