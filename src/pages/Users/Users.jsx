import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { axiosRequest } from "../../utils/axiosRequest";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";
import MuiModal from "../../components/Modal";
import UserTable from "../../components/UserTable";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [image, setImage] = useState(null);
  const [idx, setIdx] = useState(null);
  const [operatingWeight, setOperatingWeight] = useState("");
  const [bladeType, setBladeType] = useState("");
  const [ripperType, setRipperType] = useState("");
  const [depthOfCut, setDepthOfCut] = useState("");
  const [looseningDepth, setLooseningDepth] = useState("");
  const [bladeWidth, setBladeWidth] = useState("");
  const [bladeHeight, setBladeHeight] = useState("");
  const [maxBladeLift, setMaxBladeLift] = useState("");
  const [bladeVolume, setBladeVolume] = useState("");
  const [groundPressure, setGroundPressure] = useState("");
  const handleModal = (obj) => {
    setEditModal(true);
    setIdx(obj.id);
    setOperatingWeight(obj.operatingWeight);
    setBladeType(obj.bladeType);
    setRipperType(obj.ripperType);
    setDepthOfCut(obj.depthOfCut);
    setLooseningDepth(obj.looseningDepth);
    setBladeWidth(obj.bladeWidth);
    setBladeHeight(obj.bladeHeight);
    setMaxBladeLift(obj.maxBladeLift);
    setBladeVolume(obj.bladeVolume);
    setGroundPressure(obj.groundPressure);
  };

  const getUsers = async () => {
    try {
      const { data } = await axiosRequest.get(
        "User/GetFilterUsers"
      );
      setUsers(data.data);
    } catch (error) {}
  };

  const addUser = async (event) => {
    event.preventDefault();
    let newUser = new FormData();
    
    newUser.append("UserFile", image)
    newUser.append("UserName", event.target["userName"].value)
    newUser.append("FirstName", event.target["firstName"].value)
    newUser.append("LastName", event.target["lastName"].value)
    newUser.append("PhoneNumber", event.target["phoneNumber"].value)
    newUser.append("Email", event.target["email"].value)
    try {
      const { data } = await axiosRequest.post(
        "User/AddUser",
        newUser
      );

      getUsers();
      setAddModal(false);
    } catch (error) {}
  };


  // const deleteOperatingCharacteristics = async (id) => {
  //   try {
  //     const { data } = await axiosRequest.delete(
  //       `OperatingCharacteristics/DeleteOperatingCharacteristics?id=${id}`
  //     );

  //     getOperatingCharacteristics();
  //   } catch (error) {}
  // };

  // const editOperatingCharacteristics = async (event) => {
  //   event.preventDefault();
  //   try {
  //     let updatedOperatingCharacteristics = {
  //       id: idx,
  //       operatingWeight: event.target["operatingWeight"].value,
  //       bladeType: event.target["bladeType"].value,
  //       ripperType: event.target["ripperType"].value,
  //       depthOfCut: event.target["depthOfCut"].value,
  //       looseningDepth: event.target["looseningDepth"].value,
  //       bladeWidth: event.target["bladeWidth"].value,
  //       bladeHeight: event.target["bladeHeight"].value,
  //       maxBladeLift: event.target["maxBladeLift"].value,
  //       bladeVolume: event.target["bladeVolume"].value,
  //       groundPressure: event.target["groundPressure"].value,
  //     };
  //     const { data } = await axiosRequest.put(
  //       "OperatingCharacteristics/UpdateOperatingCharacteristics",
  //       updatedOperatingCharacteristics
  //     );
  //     getOperatingCharacteristics();
  //     setEditModal(false);
  //   } catch (error) {}
  // };

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
        <UserTable
          data={users}
          // deleteOperatingCharacteristics={deleteOperatingCharacteristics}
          // handleModal={handleModal}
        />
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
            type="number"
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
          <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
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

      {/* <MuiModalphoneNumber
        open={editModal}
        handleClose={() => setEditModal(false)}
        title="Edit Operating Characteristics"
      >
        <form onSubmit={editOperatingCharacteristics}>
          <TextField
            fullWidth
            id="operatingWeight"
            name="operatingWeight"
            label="Operating Weight"
            color="warning"
            sx={{
              mb: "10px",
            }}
            value={operatingWeight}
            onChange={(e) => setOperatingWeight(e.target.value)}
            type="number"
          />
          <TextField
            fullWidth
            id="bladeType"
            name="bladeType"
            label="Blade Type"
            color="warning"
            sx={{
              mb: "10px",
            }}
            value={bladeType}
            onChange={(e) => setBladeType(e.target.value)}
          />
          <TextField
            fullWidth
            id="ripperType"
            name="ripperType"
            label="Ripper Type"
            color="warning"
            sx={{
              mb: "10px",
            }}
            value={ripperType}
            onChange={(e) => setRipperType(e.target.value)}
          />
          <TextField
            fullWidth
            id="depthOfCut"
            name="depthOfCut"
            label="Depth of cut"
            color="warning"
            sx={{
              mb: "10px",
            }}
            type="number"
            value={depthOfCut}
            onChange={(e) => setDepthOfCut(e.target.value)}
          />
          <TextField
            fullWidth
            id="looseningDepth"
            name="looseningDepth"
            label="Loosening Depth"
            color="warning"
            sx={{
              mb: "10px",
            }}
            type="number"
            value={looseningDepth}
            onChange={(e) => setLooseningDepth(e.target.value)}
          />
          <TextField
            fullWidth
            id="bladeWidth"
            name="bladeWidth"
            label="Blade Width"
            color="warning"
            sx={{
              mb: "10px",
            }}
            type="number"
            value={bladeWidth}
            onChange={(e) => setBladeWidth(e.target.value)}
          />
          <TextField
            fullWidth
            id="bladeHeight"
            name="bladeHeight"
            label="Blade Height"
            color="warning"
            sx={{
              mb: "10px",
            }}
            type="number"
            value={bladeHeight}
            onChange={(e) => setBladeHeight(e.target.value)}
          />
          <TextField
            fullWidth
            id="maxBladeLift"
            name="maxBladeLift"
            label="Max Blade Lift"
            color="warning"
            sx={{
              mb: "10px",
            }}
            type="number"
            value={maxBladeLift}
            onChange={(e) => setMaxBladeLift(e.target.value)}
          />
          <TextField
            fullWidth
            id="bladeVolume"
            name="bladeVolume"
            label="Blade Volume"
            color="warning"
            sx={{
              mb: "10px",
            }}
            type="number"
            value={bladeVolume}
            onChange={(e) => setBladeVolume(e.target.value)}
          />
          <TextField
            fullWidth
            id="groundPressure"
            name="groundPressure"
            label="Ground Pressure"
            color="warning"
            sx={{
              mb: "10px",
            }}
            type="number"
            value={groundPressure}
            onChange={(e) => setGroundPressure(e.target.value)}
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
      </MuiModalphoneNumber> */}
    </>
  );
};

export default Users;
