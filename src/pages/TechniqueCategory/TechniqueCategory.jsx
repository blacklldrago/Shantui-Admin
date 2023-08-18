import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { axiosRequest } from "../../utils/axiosRequest";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";
import MuiModal from "../../components/Modal";

import TechniqueCategoryTable from "../../components/TechniqueCategoryTable";

const TechniqueCategory = () => {
  const [techniqueCategory, setTechniqueCategory] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [image, setImage] = useState("");

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
  // const handleModal = (obj) => {
  //   setEditModal(true);
  //   setIdx(obj.id);
  //   setOperatingWeight(obj.operatingWeight);
  //   setBladeType(obj.bladeType);
  //   setRipperType(obj.ripperType);
  //   setDepthOfCut(obj.depthOfCut);
  //   setLooseningDepth(obj.looseningDepth);
  //   setBladeWidth(obj.bladeWidth);
  //   setBladeHeight(obj.bladeHeight);
  //   setMaxBladeLift(obj.maxBladeLift);
  //   setBladeVolume(obj.bladeVolume);
  //   setGroundPressure(obj.groundPressure);
  // };

  const getTechniqueCategory = async () => {
    try {
      const { data } = await axiosRequest.get(
        "TechniqueCategory/GetFilterTechniqueCategories"
      );
      setTechniqueCategory(data.data);
    } catch (error) {}
  };

  const addTechniqueCategory = async (event) => {
    event.preventDefault();

    let newTechniqueCategory = new FormData();
    newTechniqueCategory.append("ImageName", image);
    newTechniqueCategory.append("Name", event.target["name"].value);

    try {
      const { data } = await axiosRequest.post(
        "TechniqueCategory/AddTechniqueCategory",
        newTechniqueCategory
      );

      getTechniqueCategory();
      setAddModal(false);
    } catch (error) {}
  };

  const deleteTechniqueCategory = async (id) => {
    try {
      const { data } = await axiosRequest.delete(
        `TechniqueCategory/DeleteTechniqueCategory?id=${id}`
      );

      getTechniqueCategory();
    } catch (error) {}
  };

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
    getTechniqueCategory();
  }, []);
  return (
    <>
      <Title>TechniqueCategory</Title>
      <Grid container spacing={2} direction="row">
        <Grid item alignSelf="flex">
          <IconButton color="warning" onClick={() => setAddModal(true)}>
            <AddCircle fontSize="large" />
          </IconButton>
        </Grid>
        <TechniqueCategoryTable
          data={techniqueCategory}
          deleteTechniqueCategory={deleteTechniqueCategory}
          // handleModal={handleModal}
        />
      </Grid>

      <MuiModal
        open={addModal}
        handleClose={() => setAddModal(false)}
        title="Add Technique Category"
      >
        <form onSubmit={addTechniqueCategory}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            color="warning"
            sx={{
              mb: "10px",
            }}
          />
          <input
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
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

      {/* <MuiModal
        open={editModal}
        handleClose={() => setEditModal(false)}
        title="Edit Technique Category"
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
      </MuiModal> */}
    </>
  );
};

export default TechniqueCategory;
