import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { axiosRequest } from "../../utils/axiosRequest";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";
import MuiModal from "../../components/Modal";
import CapacitiesTable from "../../components/CapacitiesTable";

const Capacities = () => {
  const [capacities, setCapacities] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [idx, setIdx] = useState(null);
  const [fuelTank, setFuelTank] = useState("");
  const [coolingSystem, setCoolingSystem] = useState("");
  const [engineOil, setEngineOil] = useState("");
  const [hydraulicTank, setHydraulicTank] = useState("");
  const [transmission, setTransmission] = useState("");
  const handleModal = (obj) => {
    setEditModal(true);
    setIdx(obj.id);
    setFuelTank(obj.fuelTank);
    setCoolingSystem(obj.coolingSystem);
    setEngineOil(obj.engineOil);
    setHydraulicTank(obj.hydraulicTank);
    setTransmission(obj.transmission);
  };

  const getCapacities = async () => {
    try {
      const { data } = await axiosRequest.get("Capacities/GetFilterCapacities");
      setCapacities(data.data);
    } catch (error) {}
  };
  const addCapacities = async (event) => {
    event.preventDefault();
    try {
      let newCapacities = {
        
        fuelTank: event.target["fuelTank"].value,
        coolingSystem: event.target["coolingSystem"].value,
        engineOil: event.target["engineOil"].value,
        hydraulicTank: event.target["hydraulicTank"].value,
        transmission: event.target["transmission"].value,
      };
      const { data } = await axiosRequest.post(
        "Capacities/AddCapacities",
        newCapacities
      );

      getCapacities();
      setAddModal(false);
    } catch (error) {}
  };
  const deleteCapaties = async (id) => {
    try {
      const { data } = await axiosRequest.delete(
        `Capacities/DeleteCapacities?id=${id}`
      );

      getCapacities();
    } catch (error) {}
  };

  const editCapacities = async (event) => {
    event.preventDefault();
    try {
      let updatedCapacities = {
        id:idx,
        fuelTank: fuelTank,
        coolingSystem: coolingSystem,
        engineOil: engineOil,
        hydraulicTank: hydraulicTank,
        transmission: transmission,
      };
      const { data } = await axiosRequest.put(`Capacities/UpdateCapacities`,updatedCapacities);
      getCapacities();
      setEditModal(false)
    } catch (error) {}
  };

  useEffect(() => {
    getCapacities();
  }, []);
  return (
    <>
      <Title>Capacities</Title>
      <Grid container spacing={2} direction="row">
        <Grid item alignSelf="flex">
          <IconButton color="warning" onClick={() => setAddModal(true)}>
            <AddCircle fontSize="large" />
          </IconButton>
        </Grid>
        <CapacitiesTable
          data={capacities}
          deleteCapaties={deleteCapaties}
          handleModal={handleModal}
        />
      </Grid>

      <MuiModal
        open={addModal}
        handleClose={() => setAddModal(false)}
        title="Add Capacities"
      >
        <form onSubmit={addCapacities}>
          <TextField
            
            type="number"
            fullWidth
            id="fuelTank"
            name="fuelTank"
            label="Fuel Tank"
            color="warning"
            sx={{
              mb: "10px",
            }}
          />
          <TextField
            
            type="number"
            fullWidth
            id="coolingSystem"
            name="coolingSystem"
            label="Cooling System"
            color="warning"
            sx={{
              mb: "10px",
            }}
          />
          <TextField
            
            type="number"
            fullWidth
            id="engineOil"
            name="engineOil"
            label="Engine Oil"
            color="warning"
            sx={{
              mb: "10px",
            }}
          />
          <TextField
            
            type="number"
            fullWidth
            id="hydraulicTank"
            name="hydraulicTank"
            label="Hydraulic Tank"
            color="warning"
            sx={{
              mb: "10px",
            }}
          />
          <TextField
            
            type="number"
            fullWidth
            id="transmission"
            name="transmission"
            label="Transmission"
            color="warning"
            sx={{
              mb: "10px",
            }}
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
        title="Edit Capacities"
      >
        <form onSubmit={editCapacities}>
          <TextField
            
            type="number"
            fullWidth
            id="fuelTank"
            name="fuelTank"
            label="Fuel Tank"
            color="warning"
            sx={{
              mb: "10px",
            }}
            value={fuelTank}
            onChange={(e)=>setFuelTank(e.target.value)}
          />
          <TextField
            
            type="number"
            fullWidth
            id="coolingSystem"
            name="coolingSystem"
            label="Cooling System"
            color="warning"
            sx={{
              mb: "10px",
            }}
            
            value={coolingSystem}
            onChange={(e)=>setCoolingSystem(e.target.value)}
          />
          <TextField
            
            type="number"
            fullWidth
            id="engineOil"
            name="engineOil"
            label="Engine Oil"
            color="warning"
            sx={{
              mb: "10px",
            }}
            
            value={engineOil}
            onChange={(e)=>setEngineOil(e.target.value)}
          />
          <TextField
            
            type="number"
            fullWidth
            id="hydraulicTank"
            name="hydraulicTank"
            label="Hydraulic Tank"
            color="warning"
            sx={{
              mb: "10px",
            }}
            
            value={hydraulicTank}
            onChange={(e)=>setHydraulicTank(e.target.value)}
          />
          <TextField
            
            type="number"
            fullWidth
            id="transmission"
            name="transmission"
            label="Transmission"
            color="warning"
            sx={{
              mb: "10px",
            }}
            
            value={transmission}
            onChange={(e)=>setTransmission(e.target.value)}
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

export default Capacities;
