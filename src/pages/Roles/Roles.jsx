import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { axiosRequest } from "../../utils/axiosRequest";
import { Button, FormControl, Grid, InputLabel } from "@mui/material";

import MuiModal from "../../components/Modal";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, MenuItem, Select } from "@mui/material";

import AddCircle from "@mui/icons-material/AddCircle";
import Delete from "@mui/icons-material/Delete";

const Roles = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [user, setUser] = useState(null);
  const [myRole, setMyRole] = useState(null);

  const getUsers = async () => {
    try {
      const { data } = await axiosRequest.get("User/GetFilterUsers");
      setUsers(data.data);
    } catch (error) {}
  };
  const getRoles = async () => {
    try {
      const { data } = await axiosRequest.get("Role/GetRoles");
      setRoles(data.data);
    } catch (error) {}
  };

  const addRole = async (event) => {
    event.preventDefault();
    try {
      let newRole = {
        roleId: myRole,
        userId: user,
      };
      const { data } = await axiosRequest.post("Role/AssignUserRole", newRole);
      getRoles();
      getUsers();
      setAddModal(false);

      setUser("");
      setMyRole("");
    } catch (error) {}
  };
  const deleteRole = async (event) => {
    event.preventDefault();
    console.log(myRole);
    console.log(user);
    try {
      let oldRole = {
        RoleId: myRole,
        UserId: user,
      };
      const { data } = await axiosRequest.delete("Role/RemoveRoleFromUser", {data:oldRole})
      getRoles();
      getUsers();
      setDeleteModal(false);

      setUser("");
      setMyRole("");
    } catch (error) {}
  };

  const handleModal = (e) => {
    setAddModal(true);
    setUser(e.id);
  };
  const handleModal1 = (e) => {
    setDeleteModal(true);
    setUser(e.id);
  };

  useEffect(() => {
    getUsers();
    getRoles();
  }, []);
  return (
    <>
      <Title>Roles</Title>
      <Grid container spacing={2} direction="row">
        <TableContainer
          component={Paper}
          sx={{ width: "96%", margin: "auto", mt: "30px" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Avatar</TableCell>
                <TableCell align="center">Username</TableCell>
                <TableCell align="center">First Name</TableCell>
                <TableCell align="center">Last Name</TableCell>
                <TableCell align="center">Roles</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">
                    <img src={row.userFileName} alt="" />
                  </TableCell>
                  <TableCell align="center">{row.userName}</TableCell>
                  <TableCell align="center">{row.firstName}</TableCell>
                  <TableCell align="center">{row.lastName}</TableCell>
                  <TableCell align="center">
                    {row.roles.map((e) => {
                      return (
                        <span style={{ marginRight: "4px" }}>
                          <span>{e.name}</span>
                        </span>
                      );
                    })}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      color="warning"
                      onClick={() => handleModal(row)}
                    >
                      <AddCircle fontSize="medium" />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleModal1(row)}>
                      <Delete fontSize="medium" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <MuiModal
        open={addModal}
        handleClose={() => {
          setAddModal(false);
          setUser("");
          setMyRole("");
        }}
        title="Add Role"
      >
        <form onSubmit={addRole}>
          <FormControl fullWidth sx={{ mb: 1 }}>
            <InputLabel color="warning" id="AddRole">
              Role
            </InputLabel>
            <Select
              color="warning"
              value={myRole}
              onChange={(e) => setMyRole(e.target.value)}
            >
              {roles.map((e) => {
                return <MenuItem value={e.id}>{e.name}</MenuItem>;
              })}
            </Select>
          </FormControl>

          <Button
            color="warning"
            variant="contained"
            sx={{ mt: 3 }}
            fullWidth
            type="submit"
          >
            Submit
          </Button>
        </form>
      </MuiModal>
      <MuiModal
        open={deleteModal}
        handleClose={() => {
          setDeleteModal(false);
          setUser("");
          setMyRole("");
        }}
        title="Delete Role"
      >
        <form onSubmit={deleteRole}>
          <FormControl fullWidth sx={{ mb: 1 }}>
            <InputLabel color="warning">Role</InputLabel>
            <Select
              color="warning"
              value={myRole}
              onChange={(e) => setMyRole(e.target.value)}
            >
              {roles.map((e) => {
                return <MenuItem value={e.id}>{e.name}</MenuItem>;
              })}
            </Select>
          </FormControl>

          <Button
            color="warning"
            variant="contained"
            sx={{ mt: 3 }}
            fullWidth
            type="submit"
          >
            Submit
          </Button>
        </form>
      </MuiModal>
    </>
  );
};

export default Roles;
