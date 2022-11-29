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

const InvoiceColumns = [
  { id: "InvoiceNumber ", label: "Invoice number ", width: 100 },
  { id: "CompanyName", label: "Company name ", width: 200 },
  { id: "CompanyNumber", label: "Company number", width: 200 },
  { id: "Email", label: "email", width: 200 },
  { id: "SUM  ", label: "SUM  ", width: 100 },
  { id: "InvoiceSendDate  ", label: "Invoice send date ", width: 100 },
  { id: "Status", label: "Status", width: 150 },
  { id: "Active", label: "Active", width: 150 },
];

function InvoiceCreateData(
  CompanyName,
  CompanyNumber,
  Email,
  SUM,
  InvoiceSendDate,
  Status,
  Actions
) {
  return {
    CompanyName,
    CompanyNumber,
    Email,
    SUM,
    InvoiceSendDate,
    Status,
    Actions,
  };
}

const rows = [
  InvoiceCreateData(
    "123456",
    "Venture Motor Freight",
    "666 6666 66666",
    "safetyvmf@gmail.com  ",
    "2200.00$ ",
    "90",
    "12.01.2022",
    "send",
    "icons"
  ),
  InvoiceCreateData(
    "123456",
    "Venture Motor Freight",
    "666 6666 66666",
    "safetyvmf@gmail.com  ",
    "2200.00$ ",
    "90",
    "12.01.2022",
    "send",
    "icons"
  ),
  InvoiceCreateData(
    "123456",
    "Venture Motor Freight",
    "666 6666 66666",
    "safetyvmf@gmail.com  ",
    "2200.00$ ",
    "90",
    "12.01.2022",
    "send",
    "icons"
  ),
  InvoiceCreateData(
    "123456",
    "Venture Motor Freight",
    "666 6666 66666",
    "safetyvmf@gmail.com  ",
    "2200.00$ ",
    "90",
    "12.01.2022",
    "send",
    "icons"
  ),
  InvoiceCreateData(
    "123456",
    "Venture Motor Freight",
    "666 6666 66666",
    "safetyvmf@gmail.com  ",
    "2200.00$ ",
    "90",
    "12.01.2022",
    "send",
    "icons"
  ),
  InvoiceCreateData(
    "123456",
    "Venture Motor Freight",
    "666 6666 66666",
    "safetyvmf@gmail.com  ",
    "2200.00$ ",
    "90",
    "12.01.2022",
    "send",
    "icons"
  ),
  InvoiceCreateData(
    "123456",
    "Venture Motor Freight",
    "666 6666 66666",
    "safetyvmf@gmail.com  ",
    "2200.00$ ",
    "90",
    "12.01.2022",
    "send",
    "icons"
  ),
  InvoiceCreateData(
    "123456",
    "Venture Motor Freight",
    "666 6666 66666",
    "safetyvmf@gmail.com  ",
    "2200.00$ ",
    "90",
    "12.01.2022",
    "send",
    "icons"
  ),
  InvoiceCreateData(
    "123456",
    "Venture Motor Freight",
    "666 6666 66666",
    "safetyvmf@gmail.com  ",
    "2200.00$ ",
    "90",
    "12.01.2022",
    "send",
    "icons"
  ),
  InvoiceCreateData(
    "123456",
    "Venture Motor Freight",
    "666 6666 66666",
    "safetyvmf@gmail.com  ",
    "2200.00$ ",
    "90",
    "12.01.2022",
    "send",
    "icons"
  ),
  InvoiceCreateData(
    "123456",
    "Venture Motor Freight",
    "666 6666 66666",
    "safetyvmf@gmail.com  ",
    "2200.00$ ",
    "90",
    "12.01.2022",
    "send",
    "icons"
  ),
  InvoiceCreateData(
    "123456",
    "Venture Motor Freight",
    "666 6666 66666",
    "safetyvmf@gmail.com  ",
    "2200.00$ ",
    "90",
    "12.01.2022",
    "send",
    "icons"
  ),
];

export default function Invoice() {
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
            {InvoiceColumns.map((column) => (
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
                      {InvoiceColumns.map((column) => {
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
