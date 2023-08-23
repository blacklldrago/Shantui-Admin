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
export default function OperatingCharacteristicsTable({
  data,
  deleteOperatingCharacteristics,
  handleModal,
}) {
  return (
    <TableContainer
      component={Paper}
      sx={{ width: "100%", margin: "auto", mt: "30px" }}
    >
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Operating weight</TableCell>
            <TableCell align="center">Blade type</TableCell>
            <TableCell align="center">Ripper type</TableCell>
            <TableCell align="center">Depth of cut</TableCell>
            <TableCell align="center">Loosening depth</TableCell>
            <TableCell align="center">Blade width</TableCell>
            <TableCell align="center">Blade height</TableCell>
            <TableCell align="center">Max blade lift</TableCell>
            <TableCell align="center">Cylinder Diameter</TableCell>
            <TableCell align="center">Piston Stroke</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.operatingWeight}</TableCell>
              <TableCell align="center">{row.bladeType}</TableCell>
              <TableCell align="center">{row.ripperType}</TableCell>
              <TableCell align="center">{row.depthOfCut}</TableCell>
              <TableCell align="center">{row.looseningDepth}</TableCell>
              <TableCell align="center">{row.bladeWidth}</TableCell>
              <TableCell align="center">{row.bladeHeight}</TableCell>
              <TableCell align="center">{row.maxBladeLift}</TableCell>
              <TableCell align="center">{row.bladeVolume}</TableCell>
              <TableCell align="center">{row.groundPressure}</TableCell>
              <TableCell align="center">
                <IconButton
                  color="error"
                  onClick={() => deleteOperatingCharacteristics(row.id)}
                >
                  <Delete />
                </IconButton>
                <IconButton color="warning" onClick={() => handleModal(row)}>
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
