import {
  Box,
  Button,
  Grid,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  TableBody,
  Typography,
  TableFooter,
  TablePagination,
  Chip,
  IconButton,
  useTheme,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { AddCircle, Edit, Search } from "@material-ui/icons";
import { minWidth } from "@material-ui/system";
import React, { useState } from "react";
import { Trash2 } from "react-feather";
import { useSelector } from "react-redux";

export default function ListsFirstScreen() {
  const [search, setSearch] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      console.log(search);
    }
  };

  let dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const d = new Date("2015-03-25T12:00:00Z");

  function createData(id, list, active, unsubscribed, bounced, lastSent) {
    return { id, list, active, unsubscribed, bounced, lastSent };
  }
  const rows = [
    createData(
      1,
      ["sent", "List 1"],
      "420",
      ["0.1%", 10],
      ["1.41%", 6],
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createData(
      2,

      ["sent", "List 2"],
      "22",
      ["4.1%", 1],
      ["2.1%", 1],
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createData(
      3,
      ["sent", "List 3"],
      "398",
      ["0.1%", 16],
      ["0.1%", 20],
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createData(
      4,
      ["sent", "List 4"],
      "12312",
      ["0.1%", 12],
      ["0.1%", 14],
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createData(
      5,
      ["sent", "List 5"],
      "33312",
      ["0.1%", 36],
      ["0.1%", 77],
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createData(
      6,
      ["sent", "List 6"],
      "123321",
      ["0.1%", 21],
      ["0.1%", 26],
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createData(
      7,
      ["sent", "List 7"],
      "123323",
      ["0.1%", 328],
      ["0.1%", 196],
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createData(
      8,
      ["sent", "List 8"],
      "333",
      ["0.1%", 1],
      ["0.1%", 38],
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createData(
      9,
      ["sent", "List 9"],
      "123",
      ["0.1%", 2],
      ["0.1%", 9],
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createData(
      10,
      ["sent", "List 10"],
      "12333",
      ["0.1%", 10],
      ["0.1%", 10],
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createData(
      11,
      ["sent", "List 11"],
      "3333",
      ["0.1%", 10],
      ["0.1%", 10],
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createData(
      12,
      ["sent", "List 12"],
      "1111",
      ["0.1%", 10],
      ["0.1%", 10],
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createData(
      13,
      ["sent", "List 13"],
      "33",
      ["0.1%", 10],
      ["0.1%", 10],
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createData(
      14,
      ["sent", "List 14"],
      "5123",
      ["0.1%", 10],
      ["0.1%", 10],
      d.toLocaleDateString("en-US", dateOptions)
    ),
    createData(
      15,
      ["sent", "List 15"],
      "123554",
      ["0.1%", 10],
      ["0.1%", 10],
      d.toLocaleDateString("en-US", dateOptions)
    ),
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const theme = useSelector((state) => state.themeReducer.currentTheme);
  const usedTheme = useTheme();
  return (
    <Box p={3}>
      <Grid container={true}>
        <Box mb={4}>
          <Typography
            variant="h2"
            component="h2"
            style={{ fontWeight: 400 }}
            gutterBottom
          >
            Lists
          </Typography>
        </Box>
      </Grid>
      <Grid container={true} justify="space-between">
        <Grid item={true}>
          <Button style={styles.createButtonStyle} variant="outlined">
            <AddCircle style={styles.plusButtonStyle} />
            Add a new list
          </Button>
        </Grid>
        <Grid item={true}>
          <form onSubmit={handleSubmit}>
            <TextField
              size="small"
              variant="outlined"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <Button
              variant="outlined"
              type="submit"
              style={styles.searchButtonStyle}
            >
              <Search fontSize="small" />
              Search campaigns
            </Button>
          </form>
        </Grid>
      </Grid>{" "}
      <Box minWidth="1000px">
        <Table
          style={
            theme === "DARK"
              ? usedTheme.overrides.opacityBlack
              : usedTheme.overrides.opacityLight
          }
        >
          <TableHead>
            <TableRow>
              <TableCell>List</TableCell>
              <TableCell align="center">Active</TableCell>
              <TableCell align="center">Unsubscribed</TableCell>
              <TableCell align="center">Bounced</TableCell>
              <TableCell align="center">Last Sent</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Chip
                    label={row.list[0]}
                    size="small"
                    style={{
                      background: green[500],
                      color: "#ffffff",
                      marginRight: "5px",
                    }}
                  />
                  {row.list[1]}
                </TableCell>
                <TableCell align="center">
                  <Chip
                    label={row.active}
                    size="small"
                    style={{
                      background: green[500],
                      color: "#ffffff",
                      marginRight: "5px",
                    }}
                  />
                </TableCell>

                <TableCell align="center">
                  <Button
                    variant="outlined"
                    disabled
                    style={styles.marginRight1}
                  >
                    {row.unsubscribed[0]}
                  </Button>
                  {row.unsubscribed[1]}
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    disabled
                    style={styles.marginRight1}
                  >
                    {row.bounced[0]}
                  </Button>
                  {row.bounced[1]}
                </TableCell>
                <TableCell align="center">{row.lastSent}</TableCell>

                <TableCell align="center">
                  <IconButton>
                    <Edit />
                  </IconButton>
                </TableCell>
                <TableCell align="right">
                  <IconButton>
                    <Trash2 />
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
                count={rows.length}
                page={page}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </Box>
    </Box>
  );
}

const styles = {
  plusButtonStyle: {
    paddingRight: "5px",
  },
  createButtonStyle: {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.10)",
  },
  searchButtonStyle: {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.10)",
    marginLeft: "5px",
  },
  marginRight1: {
    marginRight: "8px",
  },
};
