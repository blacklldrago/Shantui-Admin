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
export default function AdditionalInfoTable({ data, deleteAdditionalInfo, handleModal }) {
  return (
    <TableContainer
      component={Paper}
      sx={{ width: "80%", margin: "auto", mt: "90px" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Brand</TableCell>
            <TableCell align="center">Manufacturer Country</TableCell>
            <TableCell align="center">Assembly Country</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.brand}</TableCell>
              <TableCell align="center">{row.manufacturerCountry}</TableCell>
              <TableCell align="center">{row.assemblyCountry}</TableCell>
              <TableCell align="center">
                <IconButton color="error" onClick={()=>deleteAdditionalInfo(row.id)}>
                  <Delete />
                </IconButton>
                <IconButton color="warning" onClick={()=>handleModal(row)}>
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
