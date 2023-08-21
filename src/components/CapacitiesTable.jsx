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
export default function CapacitiesTable({ data, deleteCapaties, handleModal }) {
  return (
    <TableContainer
      component={Paper}
      sx={{ width: "80%", margin: "auto", mt: "90px" }}
    >
      <Table sx={{ width:"100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Fuel Tank</TableCell>
            <TableCell align="center">Cooling System</TableCell>
            <TableCell align="center">Engine Oil</TableCell>
            <TableCell align="center">Hydraulic Tank</TableCell>
            <TableCell align="center">Transmission</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.fuelTank}</TableCell>
              <TableCell align="center">{row.coolingSystem}</TableCell>
              <TableCell align="center">{row.engineOil}</TableCell>
              <TableCell align="center">{row.hydraulicTank}</TableCell>
              <TableCell align="center">{row.transmission}</TableCell>
              <TableCell align="center">
                <IconButton color="error" onClick={()=>deleteCapaties(row.id)}>
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
