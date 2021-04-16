import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Grid,
  makeStyles,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  TextField,
  Typography,
  Table,
  TableBody,
  TableFooter,
  TablePagination,
  IconButton,
  useTheme,
} from "@material-ui/core";
import { Dropdown } from "semantic-ui-react";
import { Mail, Search } from "react-feather";
import { AddCircle } from "@material-ui/icons";
import { useSelector } from "react-redux";

export default function NewLocalBusinessesScreen() {
  const theme = useSelector((state) => state.themeReducer.currentTheme);
  const usedTheme = useTheme();
  const countryOptions = [
    {
      text: "United States",
      flag: "us",
      key: "us",
      value: "us",
      alias: "America",
    },
    { text: "Australia", flag: "au", key: "au", value: "au" },
    { text: "Canada", flag: "ca", key: "ca", value: "ca" },
    { text: "France", flag: "fr", key: "fr", value: "fr" },
    { text: "Germany", flag: "de", key: "de", value: "de" },
    { text: "Netherlands", flag: "nl", key: "nl", value: "nl" },
    { text: "Spain", flag: "es", key: "es", value: "es" },
    {
      text: "United Kingdom",
      flag: "gb",
      key: "gb",
      value: "gb",
      alias: "uk",
    },
  ];
  const downloadOptions = [
    {
      text: "CSV Format",
      key: "csv",
      value: "csv",
    },
    {
      text: "Excel Format",
      key: "excel",
      value: "excel",
    },
  ];

  const [results, setResults] = useState();
  const handleResultSubmit = (e) => {
    e.preventDefault();
    console.log(results);
  };

  // TABLE

  function createData(id, businessName, phone, website, email) {
    return { id, businessName, phone, website, email };
  }

  const rows = [
    createData(
      1,
      "Company 1",
      "83-259-22-890",
      "http://www.website/com/asdhisdhfpiasdhfpioasdhfpoiashdfhasdpiufhasdipufhasdifhasdifhspodhfousdahfpuiasdhfiasdhfiasdhfisdhifdshiufhsadifhasdipfhu",
      "email@company.com"
    ),
    createData(
      2,
      "Company 2",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      3,
      "Company 3",
      "83-259-22-890",
      "http://www.website/com/12309218023095858345809348509348095834905823094820384-092384908dosfhusdhfisjdfbiudsbf9usdbfiudshfiu2h349u32984u234rhj9udfh9suwdhf9sudhf9sudhf9usdhf9usdhf9udshf9udshf9uhdsw9u",
      "email@company.com"
    ),
    createData(
      4,
      "Company 4",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      5,
      "Company 5",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      6,
      "Company 6",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      7,
      "Company 7",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      8,
      "Company 8",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      9,
      "Company 9",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      10,
      "Company 10",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      11,
      "Company 11",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      12,
      "Company 12",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      13,
      "Company 13",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      14,
      "Company 14",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      15,
      "Company 15",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      16,
      "Company 16",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      17,
      "Company 17",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      18,
      "Company 18",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      19,
      "Company 19",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      20,
      "Company 20",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      21,
      "Company 21",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      22,
      "Company 22",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      23,
      "Company 23",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      24,
      "Company 24",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      25,
      "Company 25",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      26,
      "Company 26",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      27,
      "Company 27",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      28,
      "Company 28",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      29,
      "Company 29",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      30,
      "Company 30",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
    createData(
      31,
      "Company 31",
      "83-259-22-890",
      "http://www.website/com",
      "email@company.com"
    ),
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
      id: "businessName",
      numeric: false,
      label: "Business Name",
    },
    {
      id: "phone",
      numeric: true,
      label: "Phone",
    },
    {
      id: "website",
      numeric: false,
      label: "Website",
    },
    {
      id: "email",
      numeric: false,
      label: "Email",
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
                  : headCell.id === "businessName"
                  ? "left"
                  : "center"
              }
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
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.businessName);
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
      <Grid container={true} item={true} lg={6} md={12} sm={12} xs={12}>
        <Box
          width="100%"
          display="flex"
          flexWrap="wrap"
          p={5}
          style={theme === "DARK" ? styles.dark : styles.light}
          borderRadius="6px"
          boxShadow="rgb(50 50 93 / 3%) 0px 2px 5px -1px, rgb(0 0 0 / 5%) 0px 1px 3px -1px"
        >
          <Grid container={true} item={true} lg={6} md={6} sm={6} xs={12}>
            <Grid item={true} lg={6} md={6} sm={6} xs={6}>
              <TextField fullWidth={true} variant="outlined" label="Company" />
            </Grid>
            <Grid item={true} lg={6} md={6} sm={6} xs={6}>
              <TextField fullWidth={true} variant="outlined" label="City" />
            </Grid>
          </Grid>
          <Grid container={true} item={true} lg={6} md={6} sm={6} xs={12}>
            <Grid item={true} lg={9} md={9} sm={9} xs={6}>
              <Dropdown
                placeholder="Select Country"
                search
                selection
                inline
                options={countryOptions}
                style={
                  theme === "DARK" ? styles.darkDropdown : styles.lightDropdown
                }
              />
            </Grid>
            <Grid item={true} lg={3} md={3} sm={3} xs={6}>
              <Button
                fullWidth={true}
                type="submit"
                color="primary"
                variant="contained"
                size="large"
                style={{ height: "100%" }}
              >
                {" "}
                Search
              </Button>
            </Grid>
          </Grid>
        </Box>{" "}
      </Grid>
      <Box display="flex" width="100%" mt={5}>
        <Dropdown
          placeholder="Download"
          search
          selection
          options={downloadOptions}
          style={
            theme === "DARK"
              ? styles.darkDownloadDropdown
              : styles.lightDownloadDropdown
          }
        />
      </Box>
      <Box display="flex" flexWrap="wrap" width="100%" mt={5}>
        <Card elevation={3} style={{ width: "100%" }}>
          <Box
            p={4}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h3">Results</Typography>
            <form onSubmit={handleResultSubmit}>
              <TextField
                variant="outlined"
                size="small"
                onChange={(e) => setResults(e.target.value)}
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
                const isItemSelected = isSelected(row.businessName);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.businessName)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.businessName}
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
                      {row.businessName}
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      align="center"
                    >
                      {row.phone}
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      align="center"
                      style={{ maxWidth: "150px" }}
                    >
                      <Typography variant="body2" noWrap={true}>
                        {" "}
                        {row.website}{" "}
                      </Typography>
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
                rowsPerPage={25}
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
  light: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    color: "#4c4c4c",
  },
  dark: {
    backgroundColor: "#4c4c4c",
    color: "rgba(255, 255, 255, 0.95)",
  },
  lightDropdown: {
    height: "100%",
    minHeight: "50px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    color: "#4c4c4c",
  },
  darkDropdown: {
    height: "100%",
    minHeight: "50px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#4c4c4c",
    color: "rgba(255, 255, 255, 0.95)",
    borderColor: "rgba(255, 255, 255, 0.23)",
  },
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
