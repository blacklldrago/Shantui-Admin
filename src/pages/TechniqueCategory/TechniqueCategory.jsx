import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { axiosRequest } from "../../utils/axiosRequest";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";
import MuiModal from "../../components/Modal";
import TechniquecategoryCard from "../../components/TechniquecategoryCard";

import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";

import Circle from "../../components/Loaders/Circle";
const TechniqueCategory = () => {
  const [techniqueCategory, setTechniqueCategory] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [image, setImage] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [idx, setIdx] = useState(null);
  const [imageName, setImageName] = useState("");
  const [name, setName] = useState("");
  const handleModal = (obj) => {
    setEditModal(true);
    setIdx(obj.id);
    setImageName(obj.imageName);
    setName(obj.name);
  };

  const getTechniqueCategory = async () => {
    setLoader(true);
    try {
      const { data } = await axiosRequest.get(
        "TechniqueCategory/GetFilterTechniqueCategories"
      );
      setTechniqueCategory(data.data);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  const addTechniqueCategory = async (event) => {
    event.preventDefault();
    setLoader(true);

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
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  const deleteTechniqueCategory = async (id) => {
    setLoader(true);

    try {
      const { data } = await axiosRequest.delete(
        `TechniqueCategory/DeleteTechniqueCategory?id=${id}`
      );

      getTechniqueCategory();
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  const editTechniqueCategory = async (event) => {
    event.preventDefault();
    setLoader(true);

    let updatedTechniqueCategory = new FormData();
    updatedTechniqueCategory.append("ImageName", imageName);
    updatedTechniqueCategory.append("Id", idx);
    updatedTechniqueCategory.append("Name", name);

    try {
      const { data } = await axiosRequest.put(
        "TechniqueCategory/UpdateTechniqueCategory",
        updatedTechniqueCategory
      );
      getTechniqueCategory();
      setEditModal(false);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  useEffect(() => {
    getTechniqueCategory();
  }, []);
  return (
    <>
      {loader ? (
        <Circle />
      ) : (
        <>
          <Title>Technique Category</Title>
          <Grid container spacing={2} direction="row">
            <Grid item alignSelf="flex">
              <IconButton color="warning" onClick={() => setAddModal(true)}>
                <AddCircle fontSize="large" />
              </IconButton>
            </Grid>

            {techniqueCategory.length > 0 &&
              techniqueCategory.map((e) => {
                return (
                  <Grid key={e.id} item xs={12} sm={6} md={4} lg={3}>
                    <TechniquecategoryCard name={e.name} img={e.imageName}>
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
                          deleteTechniqueCategory(e.id);
                        }}
                      >
                        <Delete />
                      </IconButton>
                    </TechniquecategoryCard>
                  </Grid>
                );
              })}
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

          <MuiModal
            open={editModal}
            handleClose={() => setEditModal(false)}
            title="Edit Technique Category"
          >
            <form onSubmit={editTechniqueCategory}>
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
      )}
    </>
  );
};

export default TechniqueCategory;
