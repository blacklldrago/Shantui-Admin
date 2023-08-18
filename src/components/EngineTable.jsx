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
export default function EngineTable({ data, deleteEngine, handleModal }) {
  return (
    <TableContainer
      component={Paper}
      sx={{ width: "96%", margin: "auto", mt: "30px" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Manufacturer</TableCell>
            <TableCell align="center">Model</TableCell>
            <TableCell align="center">Country</TableCell>
            <TableCell align="center">Assembly Country</TableCell>
            <TableCell align="center">Power</TableCell>
            <TableCell align="center">Turnovers</TableCell>
            <TableCell align="center">Engine Displacement</TableCell>
            <TableCell align="center">Number Of Cylinders</TableCell>
            <TableCell align="center">Cylinder Diameter</TableCell>
            <TableCell align="center">Piston Stroke</TableCell>
            <TableCell align="center">Max Torque</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.engineManufacturer}</TableCell>
              <TableCell align="center">{row.engineModel}</TableCell>
              <TableCell align="center">{row.countryOfOrigin}</TableCell>
              <TableCell align="center">{row.assemblyCountry}</TableCell>
              <TableCell align="center">{row.power}</TableCell>
              <TableCell align="center">{row.turnovers}</TableCell>
              <TableCell align="center">{row.engineDisplacement}</TableCell>
              <TableCell align="center">{row.numberOfCylinders}</TableCell>
              <TableCell align="center">{row.cylinderDiameter}</TableCell>
              <TableCell align="center">{row.pistonStroke}</TableCell>
              <TableCell align="center">{row.maxTorque}</TableCell>
              <TableCell align="center">
                <IconButton color="error" onClick={()=>deleteEngine(row.id)}>
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
