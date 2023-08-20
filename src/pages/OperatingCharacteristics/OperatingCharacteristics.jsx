import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { axiosRequest } from "../../utils/axiosRequest";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";
import MuiModal from "../../components/Modal";

import OperatingCharacteristicsTable from "../../components/OperatingCharacteristicsTable";

import Circle from "../../components/Loaders/Circle";
const OperatingCharacteristics = () => {
  const [operatingCharacteristics, setOperatingCharacteristics] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [editModal, setEditModal] = useState(false);
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

  const getOperatingCharacteristics = async () => {
    setLoader(true);
    try {
      const { data } = await axiosRequest.get(
        "OperatingCharacteristics/GetFilterOperatingCharacteristics"
      );
      setLoader(false);
      setOperatingCharacteristics(data.data);
    } catch (error) {
      setLoader(false);
    }
  };

  const addOperatingCharacteristics = async (event) => {
    event.preventDefault();
    setLoader(true);
    try {
      let newOperatingCharacteristics = {
        operatingWeight: event.target["operatingWeight"].value,
        bladeType: event.target["bladeType"].value,
        ripperType: event.target["ripperType"].value,
        depthOfCut: event.target["depthOfCut"].value,
        looseningDepth: event.target["looseningDepth"].value,
        bladeWidth: event.target["bladeWidth"].value,
        bladeHeight: event.target["bladeHeight"].value,
        maxBladeLift: event.target["maxBladeLift"].value,
        bladeVolume: event.target["bladeVolume"].value,
        groundPressure: event.target["groundPressure"].value,
      };
      const { data } = await axiosRequest.post(
        "OperatingCharacteristics/AddOperatingCharacteristics",
        newOperatingCharacteristics
      );

      getOperatingCharacteristics();
      setAddModal(false);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };
  const deleteOperatingCharacteristics = async (id) => {
    setLoader(true);
    try {
      const { data } = await axiosRequest.delete(
        `OperatingCharacteristics/DeleteOperatingCharacteristics?id=${id}`
      );

      setLoader(false);
      getOperatingCharacteristics();
    } catch (error) {
      setLoader(false);
    }
  };

  const editOperatingCharacteristics = async (event) => {
    event.preventDefault();
    setLoader(true);
    try {
      let updatedOperatingCharacteristics = {
        id: idx,
        operatingWeight: event.target["operatingWeight"].value,
        bladeType: event.target["bladeType"].value,
        ripperType: event.target["ripperType"].value,
        depthOfCut: event.target["depthOfCut"].value,
        looseningDepth: event.target["looseningDepth"].value,
        bladeWidth: event.target["bladeWidth"].value,
        bladeHeight: event.target["bladeHeight"].value,
        maxBladeLift: event.target["maxBladeLift"].value,
        bladeVolume: event.target["bladeVolume"].value,
        groundPressure: event.target["groundPressure"].value,
      };
      const { data } = await axiosRequest.put(
        "OperatingCharacteristics/UpdateOperatingCharacteristics",
        updatedOperatingCharacteristics
      );
      getOperatingCharacteristics();
      setEditModal(false);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  useEffect(() => {
    getOperatingCharacteristics();
  }, []);
  return (
    <>
      {loader ? (
        <Circle />
      ) : (
        <>
          <Title>OperatingCharacteristics</Title>
          <Grid container spacing={2} direction="row">
            <Grid item alignSelf="flex">
              <IconButton color="warning" onClick={() => setAddModal(true)}>
                <AddCircle fontSize="large" />
              </IconButton>
            </Grid>
            <OperatingCharacteristicsTable
              data={operatingCharacteristics}
              deleteOperatingCharacteristics={deleteOperatingCharacteristics}
              handleModal={handleModal}
            />
          </Grid>

          <MuiModal
            open={addModal}
            handleClose={() => setAddModal(false)}
            title="Add Operating Characteristics"
          >
            <form onSubmit={addOperatingCharacteristics}>
              <TextField
                fullWidth
                id="operatingWeight"
                name="operatingWeight"
                label="Operating Weight"
                color="warning"
                sx={{
                  mb: "10px",
                }}
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
          </MuiModal>
        </>
      )}
    </>
  );
};

export default OperatingCharacteristics;
