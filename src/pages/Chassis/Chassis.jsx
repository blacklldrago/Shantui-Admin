import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { axiosRequest } from "../../utils/axiosRequest";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";
import MuiModal from "../../components/Modal";
import ChassisTable from "../../components/ChassisTable";
import Circle from "../../components/Loaders/Circle";
const Chassis = () => {
  const [loader, setLoader] = useState(false);
  const [chassis, setChassis] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [idx, setIdx] = useState(null);
  const [shoeType, setShoeType] = useState("");
  const [trackWidth, setTrackWidth] = useState("");
  const [shoeWidth, setShoeWidth] = useState("");
  const [groundEngagementLength, setGroundEngagementLength] = useState("");
  const [maxForwardSpeed, setMaxForwardSpeed] = useState("");
  const [maxReverseSpeed, setMaxReverseSpeed] = useState("");
  const [groundClearance, setGroundClearance] = useState("");
  const handleModal = (obj) => {
    setEditModal(true);
    setIdx(obj.id);
    setShoeType(obj.shoeType);
    setTrackWidth(obj.trackWidth);
    setShoeWidth(obj.shoeWidth);
    setGroundEngagementLength(obj.groundEngagementLength);
    setMaxForwardSpeed(obj.maxForwardSpeed);
    setMaxReverseSpeed(obj.maxReverseSpeed);
    setGroundClearance(obj.groundClearance);
  };

  const getChassis = async () => {
    setLoader(true);
    try {
      const { data } = await axiosRequest.get("Chassis/GetFilterChassis");
      setChassis(data.data);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };
  const addChassis = async (event) => {
    setLoader(true);
    event.preventDefault();
    try {
      let newChassis = {
        shoeType: event.target["shoeType"].value,
        trackWidth: event.target["trackWidth"].value,
        shoeWidth: event.target["shoeWidth"].value,
        groundEngagementLength: event.target["groundEngagementLength"].value,
        maxForwardSpeed: event.target["maxForwardSpeed"].value,
        maxReverseSpeed: event.target["maxReverseSpeed"].value,
        groundClearance: event.target["groundClearance"].value,
      };
      const { data } = await axiosRequest.post(
        "Chassis/AddChassis",
        newChassis
      );

      setLoader(false);
      setAddModal(false);
      getChassis();
    } catch (error) {
      setLoader(false);
    }
  };
  const deleteChassis = async (id) => {
    setLoader(true);
    try {
      const { data } = await axiosRequest.delete(
        `Chassis/DeleteChassis?id=${id}`
      );
      setLoader(false);
      getChassis();
    } catch (error) {
      setLoader(false);
    }
  };

  const editChassis = async (event) => {
    event.preventDefault();
    setLoader(true);
    try {
      let updatedChassis = {
        id: idx,
        shoeType: shoeType,
        trackWidth: trackWidth,
        shoeWidth: shoeWidth,
        groundEngagementLength: groundEngagementLength,
        maxForwardSpeed: maxForwardSpeed,
        maxReverseSpeed: maxReverseSpeed,
        groundClearance: groundClearance,
      };
      const { data } = await axiosRequest.put(
        "Chassis/UpdateChassis",
        updatedChassis
      );
      getChassis();
      setEditModal(false);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  useEffect(() => {
    getChassis();
  }, []);
  return (
    <>
      {loader ? (
        <Circle />
      ) : (
        <>
          <Title>Chassis</Title>
          <Grid container spacing={2} direction="row">
            <Grid item alignSelf="flex">
              <IconButton color="warning" onClick={() => setAddModal(true)}>
                <AddCircle fontSize="large" />
              </IconButton>
            </Grid>
            <ChassisTable
              data={chassis}
              deleteChassis={deleteChassis}
              handleModal={handleModal}
            />
          </Grid>

          <MuiModal
            open={addModal}
            handleClose={() => setAddModal(false)}
            title="Add Chassis"
          >
            <form onSubmit={addChassis}>
              <TextField
                fullWidth
                id="shoeType"
                name="shoeType"
                label="Shoe Type"
                color="warning"
                sx={{
                  mb: "10px",
                }}
              />

              <TextField
                fullWidth
                id="trackWidth"
                name="trackWidth"
                label="Track Width"
                color="warning"
                sx={{
                  mb: "10px",
                }}
                type="number"
              />
              <TextField
                fullWidth
                id="shoeWidth"
                name="shoeWidth"
                label="Shoe Width"
                color="warning"
                sx={{
                  mb: "10px",
                }}
                type="number"
              />
              <TextField
                fullWidth
                id="groundEngagementLength"
                name="groundEngagementLength"
                label="Ground Engagement Length"
                color="warning"
                sx={{
                  mb: "10px",
                }}
                type="number"
              />
              <TextField
                fullWidth
                id="maxForwardSpeed"
                name="maxForwardSpeed"
                label="Max Forward Speed"
                color="warning"
                sx={{
                  mb: "10px",
                }}
                type="number"
              />
              <TextField
                fullWidth
                id="maxReverseSpeed"
                name="maxReverseSpeed"
                label="Max Reverse Speed"
                color="warning"
                sx={{
                  mb: "10px",
                }}
                type="number"
              />
              <TextField
                fullWidth
                id="groundClearance"
                name="groundClearance"
                label="Ground Clearance"
                color="warning"
                sx={{
                  mb: "10px",
                }}
                type="number"
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
            title="Edit Chassis"
          >
            <form onSubmit={editChassis}>
              <TextField
                fullWidth
                id="shoeType"
                name="shoeType"
                label="Shoe Type"
                color="warning"
                sx={{
                  mb: "10px",
                }}
                value={shoeType}
                onChange={(e) => setShoeType(e.target.value)}
              />
              <TextField
                fullWidth
                id="trackWidth"
                name="trackWidth"
                label="Track Width"
                color="warning"
                sx={{
                  mb: "10px",
                }}
                value={trackWidth}
                onChange={(e) => setTrackWidth(e.target.value)}
                type="number"
              />
              <TextField
                fullWidth
                id="shoeWidth"
                name="shoeWidth"
                label="Shoe Width"
                color="warning"
                sx={{
                  mb: "10px",
                }}
                value={shoeWidth}
                onChange={(e) => setShoeWidth(e.target.value)}
                type="number"
              />
              <TextField
                fullWidth
                id="groundEngagementLength"
                name="groundEngagementLength"
                label="Ground Engagement Length"
                color="warning"
                sx={{
                  mb: "10px",
                }}
                value={groundEngagementLength}
                onChange={(e) => setGroundEngagementLength(e.target.value)}
                type="number"
              />
              <TextField
                fullWidth
                id="maxForwardSpeed"
                name="maxForwardSpeed"
                label="Max Forward Speed"
                color="warning"
                sx={{
                  mb: "10px",
                }}
                value={maxForwardSpeed}
                onChange={(e) => setMaxForwardSpeed(e.target.value)}
                type="number"
              />
              <TextField
                fullWidth
                id="maxReverseSpeed"
                name="maxReverseSpeed"
                label="Max Reverse Speed"
                color="warning"
                sx={{
                  mb: "10px",
                }}
                value={maxReverseSpeed}
                onChange={(e) => setMaxReverseSpeed(e.target.value)}
                type="number"
              />
              <TextField
                fullWidth
                id="groundClearance"
                name="groundClearance"
                label="Ground Clearance"
                color="warning"
                sx={{
                  mb: "10px",
                }}
                value={groundClearance}
                onChange={(e) => setGroundClearance(e.target.value)}
                type="number"
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
      )}
    </>
  );
};

export default Chassis;
