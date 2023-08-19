import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { axiosRequest } from "../../utils/axiosRequest";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";
import MuiModal from "../../components/Modal";
import UsersCard from "../../components/UsersCard";

import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [idx, setIdx] = useState(null);
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const handleModal = (obj) => {
    setEditModal(true);
    setIdx(obj.id);
    setImageName(obj.userFileName);
    setUserName(obj.userName);
    setFirstName(obj.firstName);
    setLastName(obj.lastName);
    setPhoneNumber(obj.phoneNumber);
    setEmail(obj.email);
  };

  const getUsers = async () => {
    try {
      const { data } = await axiosRequest.get("User/GetFilterUsers");
      setUsers(data.data);
    } catch (error) {}
  };

  const addUser = async (event) => {
    event.preventDefault();
    let newUser = new FormData();

    newUser.append("UserFile", image);
    newUser.append("UserName", event.target["userName"].value);
    newUser.append("FirstName", event.target["firstName"].value);
    newUser.append("LastName", event.target["lastName"].value);
    newUser.append("PhoneNumber", event.target["phoneNumber"].value);
    newUser.append("Email", event.target["email"].value);
    try {
      const { data } = await axiosRequest.post("User/AddUser", newUser);

      getUsers();
      setAddModal(false);
    } catch (error) {}
  };
  const deleteUsers = async (id) => {
    try {
      const { data } = await axiosRequest.delete(`User/DeleteUser?id=${id}`);

      getUsers();
    } catch (error) {}
  };

  const editUser = async (event) => {
    event.preventDefault();
    let updatedUser = new FormData();

    updatedUser.append("Id", idx);
    updatedUser.append("UserFile", imageName);
    updatedUser.append("UserName", event.target["userName"].value);
    updatedUser.append("FirstName", event.target["firstName"].value);
    updatedUser.append("LastName", event.target["lastName"].value);
    updatedUser.append("PhoneNumber", event.target["phoneNumber"].value);
    updatedUser.append("Email", event.target["email"].value);
    try {
      const { data } = await axiosRequest.put("User/UpdateUser", updatedUser);
      getUsers();
      setEditModal(false);
    } catch (error) {}
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <Title>Users</Title>
      <Grid container spacing={2} direction="row">
        <Grid item alignSelf="flex">
          <IconButton color="warning" onClick={() => setAddModal(true)}>
            <AddCircle fontSize="large" />
          </IconButton>
        </Grid>
        {users.length > 0 &&
          users.map((e) => {
            return (
              <Grid key={e.id} item xs={12} sm={6} md={4} lg={3}>
                <UsersCard
                  userFileName={e.userFileName}
                  userName={e.userName}
                  firstName={e.firstName}
                  lastName={e.lastName}
                  phoneNumber={e.phoneNumber}
                  email={e.email}
                  roles = {e.roles}
                >
                  <IconButton
                    color="warning"
                    onClick={() => {
                      handleModal(e);
                    }}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => {
                      deleteUsers(e.id);
                    }}
                  >
                    <Delete />
                  </IconButton>
                </UsersCard>
              </Grid>
            );
          })}
      </Grid>

      <MuiModal
        open={addModal}
        handleClose={() => setAddModal(false)}
        title="Add User"
      >
        <form onSubmit={addUser}>
          <TextField
            fullWidth
            id="userName"
            name="userName"
            label="Username"
            color="warning"
            sx={{
              mb: "10px",
            }}
          />
          <TextField
            fullWidth
            id="firstName"
            name="firstName"
            label="First name"
            color="warning"
            sx={{
              mb: "10px",
            }}
          />
          <TextField
            fullWidth
            id="lastName"
            name="lastName"
            label="Last name"
            color="warning"
            sx={{
              mb: "10px",
            }}
          />
          <TextField
            fullWidth
            id="phoneNumber"
            name="phoneNumber"
            label="Phone number"
            color="warning"
            sx={{
              mb: "10px",
            }}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            color="warning"
            sx={{
              mb: "10px",
            }}
            type="email"
          />
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
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
        open={editModal}
        handleClose={() => setEditModal(false)}
        title="Edit User"
      >
        <form onSubmit={editUser}>
          <TextField
            fullWidth
            id="userName"
            name="userName"
            label="Username"
            color="warning"
            sx={{
              mb: "10px",
            }}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            fullWidth
            id="firstName"
            name="firstName"
            label="First name"
            color="warning"
            sx={{
              mb: "10px",
            }}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            fullWidth
            id="lastName"
            name="lastName"
            label="Last name"
            color="warning"
            sx={{
              mb: "10px",
            }}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            fullWidth
            id="phoneNumber"
            name="phoneNumber"
            label="Phone number"
            color="warning"
            sx={{
              mb: "10px",
            }}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            color="warning"
            sx={{
              mb: "10px",
            }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="file"
            onChange={(e) => setImageName(e.target.files[0])}
          />
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

export default Users;
