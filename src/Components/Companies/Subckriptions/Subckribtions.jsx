import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, TextField } from "@mui/material";
import Compananies from "../Companies";

const SubckribtionsColumns = [
  { id: "USDOT", label: "USDOT", width: 100 },
  { id: "CompanyName", label: "Company name ", width: 200 },
  { id: "PhoneNumber", label: "Phone number", width: 150 },
  { id: "StartData", label: "Start data", width: 100 },
  {
    id: "CurrentActiveDrivers ",
    label: "Current active drivers  ",
    width: 100,
  },
  { id: "PaymentPerDriver ", label: "Payment per driver ", width: 100 },
  { id: "InvoiceDate", label: "Invoice date", width: 100 },
  { id: "Status", label: "Status", width: 150 },
  { id: "Active", label: "Active", width: 150 },
];

function SubckribtionsCreateData(
  USDOT,
  CompanyName,
  PhoneNumber,
  StartData,
  CurrentActiveDrivers,
  PaymentPerDriver,
  InvoiceDate,
  Status,
  Actions
) {
  return {
    USDOT,
    CompanyName,
    PhoneNumber,
    StartData,
    CurrentActiveDrivers,
    PaymentPerDriver,
    InvoiceDate,
    Status,
    Actions,
  };
}

const rows = [
  SubckribtionsCreateData(
    "123456",
    "Venture Motor Freight",
    "666 6666 66666",
    "23.03.2022 ",
    "125",
    "90",
    "23.03.2022",
    "active ",
    "icons"
  ),
  SubckribtionsCreateData(
    "123456",
    "Venture Motor Freight",
    "666 6666 66666",
    "23.03.2022 ",
    "125",
    "90",
    "23.03.2022",
    "active ",
    "icons"
  ),
  SubckribtionsCreateData(
    "123456",
    "Venture Motor Freight",
    "666 6666 66666",
    "23.03.2022 ",
    "125",
    "90",
    "23.03.2022",
    "active ",
    "icons"
  ),
  SubckribtionsCreateData(
    "123456",
    "Venture Motor Freight",
    "666 6666 66666",
    "23.03.2022 ",
    "125",
    "90",
    "23.03.2022",
    "active ",
    "icons"
  ),
  SubckribtionsCreateData(
    "123456",
    "Venture Motor Freight",
    "666 6666 66666",
    "23.03.2022 ",
    "125",
    "90",
    "23.03.2022",
    "active ",
    "icons"
  ),
  SubckribtionsCreateData(
    "123456",
    "Venture Motor Freight",
    "666 6666 66666",
    "23.03.2022 ",
    "125",
    "90",
    "23.03.2022",
    "active ",
    "icons"
  ),
  SubckribtionsCreateData(
    "123456",
    "Venture Motor Freight",
    "666 6666 66666",
    "23.03.2022 ",
    "125",
    "90",
    "23.03.2022",
    "active ",
    "icons"
  ),
  SubckribtionsCreateData(
    "123456",
    "Venture Motor Freight",
    "666 6666 66666",
    "23.03.2022 ",
    "125",
    "90",
    "23.03.2022",
    "active ",
    "icons"
  ),
  SubckribtionsCreateData(
    "123456",
    "Venture Motor Freight",
    "666 6666 66666",
    "23.03.2022 ",
    "125",
    "90",
    "23.03.2022",
    "active ",
    "icons"
  ),
  SubckribtionsCreateData(
    "123456",
    "Venture Motor Freight",
    "666 6666 66666",
    "23.03.2022 ",
    "125",
    "90",
    "23.03.2022",
    "active ",
    "icons"
  ),
  SubckribtionsCreateData(
    "123456",
    "Venture Motor Freight",
    "666 6666 66666",
    "23.03.2022 ",
    "125",
    "90",
    "23.03.2022",
    "active ",
    "icons"
  ),
  SubckribtionsCreateData(
    "123456",
    "Venture Motor Freight",
    "666 6666 66666",
    "23.03.2022 ",
    "125",
    "90",
    "23.03.2022",
    "active ",
    "icons"
  ),
];

export default function Subckribtions() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Compananies />

      <Paper
        sx={{
          width: 1400,
          height: 560,
          marginLeft: 12,
          marginTop: "-4px",
          backgroundColor: "#fff",
          borderRadius: "0px 30px 0px 0px",
        }}
      >
        <Box
          sx={{
            width: 1366,
            height: 53,
            // marginLeft: 12,
            // marginTop: 3,
            backgroundColor: "#FFFFFF",
            borderRadius: "30px",
          }}
        >
          <Box
            style={{
              width: "1366px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              //   justifyContent: "space-between",
            }}
          >
            <Box>
              <TextField
                colSpan={1}
                margin="normal"
                size="small"
                // colSpan={1}
                sx={{ width: 132, height: 30, marginBottom: 3 }}
                id=" "
                // label="Uncontrolled"
                defaultValue="USDOT"
              />
            </Box>
            <Box>
              <TextField
                margin="normal"
                size="small"
                sx={{ width: 228, height: 30, marginBottom: 3 }}
                id="outlined-uncontrolled"
                // label="Uncontrolled"
                defaultValue="Company name"
              />
            </Box>
            <Box>
              <TextField
                colSpan={1}
                margin="normal"
                size="small"
                sx={{ width: 228, height: 30, marginBottom: 3 }}
                id="outlined-uncontrolled"
                // label="Uncontrolled"
                defaultValue="Address:"
              />
            </Box>
            <Box>
              <TextField
                colSpan={1}
                margin="normal"
                size="small"
                sx={{ width: 228, height: 30, marginBottom: 3 }}
                id="outlined-uncontrolled"
                // label="Uncontrolled"
                defaultValue="Phone number:"
              />
            </Box>
          </Box>
        </Box>
        <TableHead>
          <TableRow>
            {SubckribtionsColumns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{
                  top: 80,
                  minWidth: column.minWidth,
                }}
              >
                {column.label}
              </TableCell>
              //   </Box>
            ))}
          </TableRow>
        </TableHead>
        <TableContainer
          sx={{
            height: 410,
            width: "1366px",
          }}
        >
          <Table
            stickyHeader
            aria-label="sticky table"
            style={{ borderRadius: "15px" }}
          >
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {SubckribtionsColumns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          sx={{ display: "flex", justifyContent: "center" }}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
