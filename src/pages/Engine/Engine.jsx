import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { axiosRequest } from "../../utils/axiosRequest";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";
import MuiModal from "../../components/Modal";

import EngineTable from "../../components/EngineTable";
const Engine = () => {
  const [engine, setEngine] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [idx, setIdx] = useState(null);
  const [engineManufacturer, setEngineManufacturer] = useState("");
  const [engineModel, setEngineModel] = useState("");
  const [countryOfOrigin, setCountryOfOrigin] = useState("");
  const [assemblyCountry, setAssemblyCountry] = useState("");
  const [power, setPower] = useState("");
  const [turnovers, setTurnovers] = useState("");
  const [engineDisplacement, setEngineDisplacement] = useState("");
  const [numberOfCylinders, setNumberOfCylinders] = useState("");
  const [cylinderDiameter, setCylinderDiameter] = useState("");
  const [pistonStroke, setPistonStroke] = useState("");
  const [maxTorque, setMaxTorque] = useState("");
  const handleModal = (obj) => {
    setEditModal(true);
    setIdx(obj.id);
    setEngineManufacturer(obj.engineManufacturer);
    setEngineModel(obj.engineModel);
    setCountryOfOrigin(obj.countryOfOrigin);
    setAssemblyCountry(obj.assemblyCountry);
    setPower(obj.power);
    setTurnovers(obj.turnovers);
    setEngineDisplacement(obj.engineDisplacement);
    setNumberOfCylinders(obj.numberOfCylinders);
    setCylinderDiameter(obj.cylinderDiameter);
    setPistonStroke(obj.pistonStroke);
    setMaxTorque(obj.maxTorque);
  };

  const getEngine = async () => {
    try {
      const { data } = await axiosRequest.get("Engine/GetFilterEngine");
      setEngine(data.data);
    } catch (error) {}
  };

  const addEngine = async (event) => {
    event.preventDefault();
    try {
      let newEngine = {
        engineManufacturer: event.target["engineManufacturer"].value,
        engineModel: event.target["engineModel"].value,
        countryOfOrigin: event.target["countryOfOrigin"].value,
        assemblyCountry: event.target["assemblyCountry"].value,
        power: event.target["power"].value,
        turnovers: event.target["turnovers"].value,
        engineDisplacement: event.target["engineDisplacement"].value,
        numberOfCylinders: event.target["numberOfCylinders"].value,
        cylinderDiameter: event.target["cylinderDiameter"].value,
        pistonStroke: event.target["pistonStroke"].value,
        maxTorque: event.target["maxTorque"].value,
      };
      const { data } = await axiosRequest.post("Engine/AddEngine", newEngine);

      getEngine();
      setAddModal(false);
    } catch (error) {}
  };
  const deleteEngine = async (id) => {
    try {
      const { data } = await axiosRequest.delete(
        `Engine/DeleteEngine?id=${id}`
      );

      getEngine();
    } catch (error) {}
  };

  const editEngine = async (event) => {
    event.preventDefault();
    try {
      let updatedEngine = {
        id: idx,
        engineManufacturer: event.target["engineManufacturer"].value,
        engineModel: event.target["engineModel"].value,
        countryOfOrigin: event.target["countryOfOrigin"].value,
        assemblyCountry: event.target["assemblyCountry"].value,
        power: event.target["power"].value,
        turnovers: event.target["turnovers"].value,
        engineDisplacement: event.target["engineDisplacement"].value,
        numberOfCylinders: event.target["numberOfCylinders"].value,
        cylinderDiameter: event.target["cylinderDiameter"].value,
        pistonStroke: event.target["pistonStroke"].value,
        maxTorque: event.target["maxTorque"].value,
      };
      const { data } = await axiosRequest.put(
        "Engine/UpdateEngine",
        updatedEngine
      );
      getEngine();
      setEditModal(false);
    } catch (error) {}
  };

  useEffect(() => {
    getEngine();
  }, []);
  return (
    <>
      <Title>Engine</Title>
      <Grid container spacing={2} direction="row">
        <Grid item alignSelf="flex">
          <IconButton color="warning" onClick={() => setAddModal(true)}>
            <AddCircle fontSize="large" />
          </IconButton>
        </Grid>
        <EngineTable
          data={engine}
          deleteEngine={deleteEngine}
          handleModal={handleModal}
        />
      </Grid>

      <MuiModal
        open={addModal}
        handleClose={() => setAddModal(false)}
        title="Add Dimensions"
      >
        <form onSubmit={addEngine}>
          <TextField
            fullWidth
            id="engineManufacturer"
            name="engineManufacturer"
            label="Engine Manufacturer"
            color="warning"
            sx={{
              mb: "10px",
            }}
          />
          <TextField
            fullWidth
            id="engineModel"
            name="engineModel"
            label="Engine Model"
            color="warning"
            sx={{
              mb: "10px",
            }}
          />
          <TextField
            fullWidth
            id="countryOfOrigin"
            name="countryOfOrigin"
            label="Country of Origin"
            color="warning"
            sx={{
              mb: "10px",
            }}
          />
          <TextField
            fullWidth
            id="assemblyCountry"
            name="assemblyCountry"
            label="Assembly Country"
            color="warning"
            sx={{
              mb: "10px",
            }}
          />
          <TextField
            fullWidth
            id="power"
            name="power"
            label="Power"
            color="warning"
            sx={{
              mb: "10px",
            }}
            type="number"
          />
          <TextField
            fullWidth
            id="turnovers"
            name="turnovers"
            label="Turnovers"
            color="warning"
            sx={{
              mb: "10px",
            }}
            type="number"
          />
          <TextField
            fullWidth
            id="engineDisplacement"
            name="engineDisplacement"
            label="Engine displacement"
            color="warning"
            sx={{
              mb: "10px",
            }}
            type="number"
          />
          <TextField
            fullWidth
            id="numberOfCylinders"
            name="numberOfCylinders"
            label="Number of Cylinders"
            color="warning"
            sx={{
              mb: "10px",
            }}
            type="number"
          />
          <TextField
            fullWidth
            id="cylinderDiameter"
            name="cylinderDiameter"
            label="Cylinder Diameter"
            color="warning"
            sx={{
              mb: "10px",
            }}
            type="number"
          />
          <TextField
            fullWidth
            id="pistonStroke"
            name="pistonStroke"
            label="Piston Stroke"
            color="warning"
            sx={{
              mb: "10px",
            }}
            type="number"
          />
          <TextField
            fullWidth
            id="maxTorque"
            name="maxTorque"
            label="Max Torque"
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
        title="Edit Engine"
      >
        <form onSubmit={editEngine}>
          <TextField
            fullWidth
            id="engineManufacturer"
            name="engineManufacturer"
            label="Engine Manufacturer"
            color="warning"
            sx={{
              mb: "10px",
            }}
            value={engineManufacturer}
            onChange={(e) => setEngineManufacturer(e.target.value)}
          />
          <TextField
            fullWidth
            id="engineModel"
            name="engineModel"
            label="Engine Model"
            color="warning"
            sx={{
              mb: "10px",
            }}
            value={engineModel}
            onChange={(e) => setEngineModel(e.target.value)}
          />
          <TextField
            fullWidth
            id="countryOfOrigin"
            name="countryOfOrigin"
            label="Country of Origin"
            color="warning"
            sx={{
              mb: "10px",
            }}
            value={countryOfOrigin}
            onChange={(e) => setCountryOfOrigin(e.target.value)}
          />
          <TextField
            fullWidth
            id="assemblyCountry"
            name="assemblyCountry"
            label="Assembly Country"
            color="warning"
            sx={{
              mb: "10px",
            }}
            value={assemblyCountry}
            onChange={(e) => setAssemblyCountry(e.target.value)}
          />
          <TextField
            fullWidth
            id="power"
            name="power"
            label="Power"
            color="warning"
            sx={{
              mb: "10px",
            }}
            value={power}
            onChange={(e) => setPower(e.target.value)}
            type="number"
          />
          <TextField
            fullWidth
            id="turnovers"
            name="turnovers"
            label="Turnovers"
            color="warning"
            sx={{
              mb: "10px",
            }}
            type="number"
            value={turnovers}
            onChange={(e) => setTurnovers(e.target.value)}
          />
          <TextField
            fullWidth
            id="engineDisplacement"
            name="engineDisplacement"
            label="Engine displacement"
            color="warning"
            sx={{
              mb: "10px",
            }}
            type="number"
            value={engineDisplacement}
            onChange={(e) => setEngineDisplacement(e.target.value)}
          />
          <TextField
            fullWidth
            id="numberOfCylinders"
            name="numberOfCylinders"
            label="Number of Cylinders"
            color="warning"
            sx={{
              mb: "10px",
            }}
            type="number"
            value={numberOfCylinders}
            onChange={(e) => setNumberOfCylinders(e.target.value)}
          />
          <TextField
            fullWidth
            id="cylinderDiameter"
            name="cylinderDiameter"
            label="Cylinder Diameter"
            color="warning"
            sx={{
              mb: "10px",
            }}
            type="number"
            value={cylinderDiameter}
            onChange={(e) => setCylinderDiameter(e.target.value)}
          />
          <TextField
            fullWidth
            id="pistonStroke"
            name="pistonStroke"
            label="Piston Stroke"
            color="warning"
            sx={{
              mb: "10px",
            }}
            type="number"
            value={pistonStroke}
            onChange={(e) => setPistonStroke(e.target.value)}
          />
          <TextField
            fullWidth
            id="maxTorque"
            name="maxTorque"
            label="Max Torque"
            color="warning"
            sx={{
              mb: "10px",
            }}
            type="number"
            value={maxTorque}
            onChange={(e) => setMaxTorque(e.target.value)}
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

export default Engine;
