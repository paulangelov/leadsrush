import {
  Typography,
  Box,
  Grid,
  Button,
  TextField,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  TablePagination,
  Chip,
  useTheme,
} from "@material-ui/core";
import { blue, green } from "@material-ui/core/colors";
import { AddCircle, Search } from "@material-ui/icons";
import React, { useState } from "react";
import { Copy, Trash2 } from "react-feather";
import { useSelector } from "react-redux";

export default function Campaigns() {
  function createData(
    id,
    campaign,
    recipients,
    sent,
    uniqueOpens,
    uniqueClicks
  ) {
    return { id, campaign, recipients, sent, uniqueOpens, uniqueClicks };
  }
  let dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const d = new Date("2015-03-25T12:00:00Z");
  const rows = [
    createData(
      1,
      ["Sent", "Campaign1"],
      2,
      d.toLocaleDateString("en-US", dateOptions),
      ["50%", "1 opened"],
      ["100%", "1 clicked"]
    ),
    createData(
      2,
      ["Sent", "Campaign2"],
      1,
      d.toLocaleDateString("en-US", dateOptions),
      ["50%", "1 opened"],
      ["0%", "0 clicked"]
    ),
    createData(
      3,
      ["Sent", "Campaign3"],
      1,
      d.toLocaleDateString("en-US", dateOptions),
      ["50%", "1 opened"],
      ["0%", "0 clicked"]
    ),
    createData(
      4,
      ["Sent", "Campaign4"],
      1,
      d.toLocaleDateString("en-US", dateOptions),
      ["50%", "1 opened"],
      ["0%", "0 clicked"]
    ),
    createData(
      5,
      ["Sent", "Campaign5"],
      1,
      d.toLocaleDateString("en-US", dateOptions),
      ["50%", "1 opened"],
      ["0%", "0 clicked"]
    ),
    createData(
      6,
      ["Sent", "Campaign6"],
      1,
      d.toLocaleDateString("en-US", dateOptions),
      ["50%", "1 opened"],
      ["0%", "0 clicked"]
    ),
    createData(
      7,
      ["Sent", "Campaign7"],
      1,
      d.toLocaleDateString("en-US", dateOptions),
      ["50%", "1 opened"],
      ["0%", "0 clicked"]
    ),
    createData(
      8,
      ["Sent", "Campaign8"],
      1,
      d.toLocaleDateString("en-US", dateOptions),
      ["50%", "1 opened"],
      ["0%", "0 clicked"]
    ),
    createData(
      9,
      ["Sent", "Campaign9"],
      1,
      d.toLocaleDateString("en-US", dateOptions),
      ["50%", "1 opened"],
      ["0%", "0 clicked"]
    ),
    createData(
      10,
      ["Sent", "Campaign10"],
      1,
      d.toLocaleDateString("en-US", dateOptions),
      ["50%", "1 opened"],
      ["0%", "0 clicked"]
    ),
    createData(
      11,
      ["Sent", "Campaign11"],
      1,
      d.toLocaleDateString("en-US", dateOptions),
      ["50%", "1 opened"],
      ["0%", "0 clicked"]
    ),
    createData(
      12,
      ["Sent", "Campaign12"],
      1,
      d.toLocaleDateString("en-US", dateOptions),
      ["50%", "1 opened"],
      ["0%", "0 clicked"]
    ),
    createData(
      13,
      ["Sent", "Campaign13"],
      1,
      d.toLocaleDateString("en-US", dateOptions),
      ["50%", "1 opened"],
      ["0%", "0 clicked"]
    ),
    createData(
      14,
      ["Sent", "Campaign14"],
      1,
      d.toLocaleDateString("en-US", dateOptions),
      ["50%", "1 opened"],
      ["0%", "0 clicked"]
    ),
    createData(
      15,
      ["Sent", "Campaign15"],
      1,
      d.toLocaleDateString("en-US", dateOptions),
      ["50%", "1 opened"],
      ["0%", "0 clicked"]
    ),
  ];

  const [search, setSearch] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const theme = useSelector((state) => state.themeReducer.currentTheme);
  const usedTheme = useTheme();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      console.log(search);
    }
  };

  return (
    <Box>
      <Box p={3}>
        <Grid container={true}>
          <Box mb={4}>
            <Typography
              variant="h2"
              component="h2"
              style={{ fontWeight: 400 }}
              gutterBottom
            >
              All campaigns
            </Typography>
          </Box>
        </Grid>
        <Grid container={true} justify="space-between">
          <Grid item={true}>
            <Button style={styles.createButtonStyle} variant="outlined">
              <AddCircle style={styles.plusButtonStyle} />
              Create &amp; send new campaign
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
        </Grid>
        <Grid container={true} style={{ marginTop: "50px" }}>
          <TableContainer
            style={
              theme === "DARK"
                ? usedTheme.overrides.opacityBlack
                : usedTheme.overrides.opacityLight
            }
          >
            <Table style={{ minWidth: "1000px" }}>
              <TableHead>
                <TableRow>
                  <TableCell>Campaign</TableCell>
                  <TableCell align="right">Recipients</TableCell>
                  <TableCell>Sent</TableCell>
                  <TableCell align="right">Unique Opens</TableCell>
                  <TableCell align="right">Unique Clicks</TableCell>
                  <TableCell align="right">Duplicate</TableCell>
                  <TableCell align="right">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? rows.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : rows
                ).map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Chip
                        label={row.campaign[0]}
                        size="small"
                        style={{
                          background: green[500],
                          color: "#ffffff",
                          marginRight: "5px",
                        }}
                      />
                      {row.campaign[1]}
                    </TableCell>
                    <TableCell align="right">{row.recipients}</TableCell>
                    <TableCell>{row.sent}</TableCell>
                    <TableCell align="right">
                      <Chip
                        label={row.uniqueOpens[0]}
                        size="small"
                        style={{
                          background: green[500],
                          color: "#ffffff",
                          marginRight: "5px",
                        }}
                      />
                      {row.uniqueOpens[1]}
                    </TableCell>
                    <TableCell align="right">
                      <Chip
                        label={row.uniqueClicks[0]}
                        size="small"
                        style={{
                          background: blue[500],
                          color: "#ffffff",
                          marginRight: "5px",
                        }}
                      />{" "}
                      {row.uniqueClicks[1]}
                    </TableCell>
                    <TableCell align="right">
                      <Button>
                        <Copy />
                      </Button>
                    </TableCell>
                    <TableCell align="right">
                      <Button>
                        <Trash2 />
                      </Button>
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
          </TableContainer>
        </Grid>
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
};
