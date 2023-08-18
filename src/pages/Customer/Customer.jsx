import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { axiosRequest } from "../../utils/axiosRequest";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";
import MuiModal from "../../components/Modal";
import CustomerTable from "../../components/CustomerTable";

const Customer = () => {
  const [customer, setCustomer] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [idx, setIdx] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const handleModal = (obj) => {
    setEditModal(true);
    setIdx(obj.id);
    setFirstName(obj.firstName);
    setLastName(obj.lastName);
    setPhoneNumber(obj.phoneNumber);
    setDescription(obj.description);
    setEmail(obj.email);
  };

  const getCustomer = async () => {
    try {
      const { data } = await axiosRequest.get("Customer/GetFilterCustomers");
      setCustomer(data.data);
    } catch (error) {}
  };
  const addCustomer = async (event) => {
    event.preventDefault();

    const newCustomer = new FormData();
    newCustomer.append("FirstName", event.target["firstName"].value);
    newCustomer.append("LastName", event.target["lastName"].value);
    newCustomer.append("PhoneNumber", event.target["phoneNumber"].value);
    newCustomer.append("Description", event.target["description"].value);
    newCustomer.append("Email", event.target["email"].value);

    try {
      console.log(newCustomer);
      const { data } = await axiosRequest.post(
        "Customer/AddCustomer",
        newCustomer
      );

      getCustomer();
      setAddModal(false);
    } catch (error) {}
  };
  const deleteCustomer = async (id) => {
    try {
      const { data } = await axiosRequest.delete(
        `Customer/DeleteCustomer?id=${id}`
      );

      getCustomer();
    } catch (error) {}
  };

  const editCustomer = async (event) => {
    event.preventDefault();
    const updatedCustomer = new FormData();
    updatedCustomer.append("Id", idx);
    updatedCustomer.append("FirstName", firstName);
    updatedCustomer.append("LastName", lastName);
    updatedCustomer.append("PhoneNumber", phoneNumber);
    updatedCustomer.append("Description", description);
    updatedCustomer.append("Email", email);

    try {
      const { data } = await axiosRequest.put(
        "Customer/UpdateCustomer",
        updatedCustomer
      );
      getCustomer();
      setEditModal(false);
    } catch (error) {}
  };

  useEffect(() => {
    getCustomer();
  }, []);
  return (
    <>
      <Title>Customer</Title>
      <Grid container spacing={2} direction="row">
        <Grid item alignSelf="flex">
          <IconButton color="warning" onClick={() => setAddModal(true)}>
            <AddCircle fontSize="large" />
          </IconButton>
        </Grid>
        <CustomerTable
          data={customer}
          deleteCustomer={deleteCustomer}
          handleModal={handleModal}
        />
      </Grid>

      <MuiModal
        open={addModal}
        handleClose={() => setAddModal(false)}
        title="Add Customer"
      >
        <form onSubmit={addCustomer}>
          <TextField
            fullWidth
            id="firstName"
            name="firstName"
            label="First Name"
            color="warning"
            sx={{
              mb: "10px",
            }}
          />

          <TextField
            fullWidth
            id="lastName"
            name="lastName"
            label="Last Name"
            color="warning"
            sx={{
              mb: "10px",
            }}
          />
          <TextField
            fullWidth
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            color="warning"
            sx={{
              mb: "10px",
            }}
          />
          <TextField
            fullWidth
            id="description"
            name="description"
            label="Description"
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
        title="Edit Customer"
      >
        <form onSubmit={editCustomer}>
          <TextField
            fullWidth
            id="firstName"
            name="firstName"
            label="First Name"
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
            label="Last Name"
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
            label="Phone Number"
            color="warning"
            sx={{
              mb: "10px",
            }}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            fullWidth
            id="description"
            name="description"
            label="Description"
            color="warning"
            sx={{
              mb: "10px",
            }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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

export default Customer;
