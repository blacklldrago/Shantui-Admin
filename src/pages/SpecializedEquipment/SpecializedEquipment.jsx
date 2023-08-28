import React, { useEffect, useRef, useState } from "react";
import Title from "../../components/Title";
import { axiosRequest } from "../../utils/axiosRequest";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";
import MuiModal from "../../components/Modal";
import SpecializedEquipmentCard from "../../components/SpecializedEquipmentCard";

import Circle from "../../components/Loaders/Circle";

import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import { GetApp } from "@mui/icons-material";
const SpecializedEquipment = () => {
  const [specializedEquipment, setSpecializedEquipment] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [image, setImage] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [idx, setIdx] = useState(null);
  const [techidx, setTechidx] = useState(null);
  const [imageName, setImageName] = useState("");
  const [name, setName] = useState("");
  const videoRef = useRef(null);
  const [fil, setFil] = useState(null);
  const [techniqueCategory, setTechniqueCategory] = useState([]);

  const handleModal = (obj) => {
    setEditModal(true);
    setIdx(obj.id);
    setTechidx(obj.techniqueCategoryId);
    setImageName(obj.imageName);
    setName(obj.name);
  };

  const getSpecializedEquipment = async () => {
    setLoader(true);

    try {
      const { data } = await axiosRequest.get(
        "SpecializedEquipment/GetFilterSpecializedEquipments"
      );
      setSpecializedEquipment(data.data);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  const getTechniqueCategory = async () => {
    setLoader(true);

    try {
      const { data } = await axiosRequest.get(
        "TechniqueCategory/GetFilterTechniqueCategories"
      );
      setLoader(false);

      setTechniqueCategory(data.data);
    } catch (error) {
      setLoader(false);
    }
  };

  const addSpecializedEquipment = async (event) => {
    event.preventDefault();
    setLoader(true);

    let newSpecializedEquipment = new FormData();
    newSpecializedEquipment.append("ImageName", image);
    newSpecializedEquipment.append("Name", event.target["name"].value);
    newSpecializedEquipment.append("TechniqueCategoryId", fil);

    try {
      const { data } = await axiosRequest.post(
        "SpecializedEquipment/AddSpecializedEquipments",
        newSpecializedEquipment
      );

      getSpecializedEquipment();
      setAddModal(false);
      setFil("");
      setLoader(false);
      setImage("");
    } catch (error) {
      setImage("");
      setLoader(false);
    }
  };

  const deleteSpecializedEquipment = async (id) => {
    setLoader(true);
    try {
      const { data } = await axiosRequest.delete(
        `SpecializedEquipment/DeleteSpecializedEquipment?id=${id}`
      );

      getSpecializedEquipment();
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  const editSpecializedEquipment = async (event) => {
    event.preventDefault();
    setLoader(true);

    let updatedSpecializedEquipment = new FormData();
    updatedSpecializedEquipment.append("Id", idx);
    updatedSpecializedEquipment.append("ImageName", imageName);
    updatedSpecializedEquipment.append("Name", name);
    updatedSpecializedEquipment.append("TechniqueCategoryId", techidx);

    try {
      const { data } = await axiosRequest.put(
        "SpecializedEquipment/UpdateSpecializedEquipment",
        updatedSpecializedEquipment
      );
      setLoader(false);
      getSpecializedEquipment();
      setEditModal(false);
    } catch (error) {
      setLoader(false);
    }
  };

  useEffect(() => {
    getSpecializedEquipment();
    getTechniqueCategory();
  }, []);
  return (
    <>
      {loader ? (
        <Circle />
      ) : (
        <>
          <Title>Specialized Equipment</Title>
            <Grid item alignSelf="flex">
              <IconButton color="warning" onClick={() => setAddModal(true)}>
                <AddCircle fontSize="large" />
              </IconButton>
            </Grid>
          <Grid container spacing={2} direction="row">
            {specializedEquipment.length > 0 &&
              specializedEquipment.map((e) => {
                return (
                  <Grid key={e.id} item xs={12} sm={6} md={4} lg={3}>
                    <SpecializedEquipmentCard
                      name={e.name}
                      img={e.imageName}
                      techidx={e.techniqueCategoryId}
                      tech={techniqueCategory}
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
                          deleteSpecializedEquipment(e.id);
                        }}
                      >
                        <Delete />
                      </IconButton>
                    </SpecializedEquipmentCard>
                  </Grid>
                );
              })}
          </Grid>

          <MuiModal
            open={addModal}
            handleClose={() => {
              setAddModal(false);
              setFil("");

              setImage("");
            }}
            title="Add Specialized Equipment"
          >
            <form onSubmit={addSpecializedEquipment}>
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
              <FormControl fullWidth>
                <InputLabel color="warning" id="TechniqueCategoryId">
                  TechniqueCategory
                </InputLabel>
                <Select
                  fullWidth
                  id="TechniqueCategoryId"
                  name="TechniqueCategoryId"
                  label="TechniqueCategory"
                  color="warning"
                  sx={{
                    mb: "10px",
                  }}
                  value={fil}
                  onChange={(e) => setFil(e.target.value)}
                >
                  {techniqueCategory.map((e) => {
                    return <MenuItem value={e.id}>{e.name}</MenuItem>;
                  })}
                </Select>
              </FormControl>

              <TextField
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => videoRef.current.click()}
                      >
                        <GetApp />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ width: { xs: "100%", sm: "50%" }, height: "56px" }}
                id="outlined-basic"
                label="Image"
                variant="outlined"
                name="video"
                value={typeof image === "object" ? image.name : image}
              />
              <input
                type="file"
                style={{ display: "none" }}
                id="file"
                ref={videoRef}
                onChange={(e) => {
                  setImage(e.target.files[0]);
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
            title="Edit Specialized Equipment"
          >
            <form onSubmit={editSpecializedEquipment}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                color="warning"
                sx={{
                  mb: "10px",
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <FormControl fullWidth>
                <InputLabel color="warning" id="TechniqueCategoryId">
                  Technique Category
                </InputLabel>
                <Select
                  fullWidth
                  id="TechniqueCategoryId"
                  name="TechniqueCategoryId"
                  label="Technique Category"
                  color="warning"
                  sx={{
                    mb: "10px",
                  }}
                  value={techidx}
                  onChange={(e) => setTechidx(e.target.value)}
                >
                  {techniqueCategory.map((e) => {
                    return <MenuItem value={e.id}>{e.name}</MenuItem>;
                  })}
                </Select>
              </FormControl>

              <TextField
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => videoRef.current.click()}
                      >
                        <GetApp />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ width: { xs: "100%" }, height: "56px" }}
                id="outlined-basic"
                label="Image"
                variant="outlined"
                name="video"
                value={typeof imageName === "object" ? imageName.name : imageName}
              />
              <input
                type="file"
                style={{ display: "none" }}
                id="file"
                ref={videoRef}
                onChange={(e) => {
                  setImageName(e.target.files[0]);
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
        </>
      )}
    </>
  );
};

export default SpecializedEquipment;
