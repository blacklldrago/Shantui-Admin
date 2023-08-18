import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";

import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
export default function CustomerTable({ data, deleteCustomer, handleModal }) {
  return (
    <TableContainer
      component={Paper}
      sx={{ width: "96%", margin: "auto", mt: "30px" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Phone Number</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.firstName}</TableCell>
              <TableCell align="center">{row.lastName}</TableCell>
              <TableCell align="center">{row.phoneNumber}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">
                <IconButton color="error" onClick={()=>deleteCustomer(row.id)}>
                  <Delete />
                </IconButton>
                <IconButton color="warning" onClick={()=>handleModal(row)} >
                  <Edit />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
