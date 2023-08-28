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
import SubCategoriesCard from "../../components/SubCategoriesCard";

import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";

import Circle from "../../components/Loaders/Circle";
import { GetApp } from "@mui/icons-material";

const SubCategories = () => {
  const [loader, setLoader] = useState(false);
  const [categories, setSubCategories] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [image, setImage] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [idx, setIdx] = useState(null);
  const [specializedEquipmentidx, setSpecializedEquipmentidx] = useState(null);
  const [imageName, setImageName] = useState("");
  const [name, setName] = useState("");
  const [fil, setFil] = useState(null);
  const videoRef = useRef(null);
  const [specializedEquipment, setSpecializedEquipment] = useState([]);

  const handleModal = (obj) => {
    setEditModal(true);
    setIdx(obj.id);
    setSpecializedEquipmentidx(obj.specializedEquipmentId);
    setImageName(obj.imageName);
    setName(obj.name);
  };
  const getSubCategories = async () => {
    setLoader(true);
    try {
      const { data } = await axiosRequest.get(
        "SubCategory/GetFilterSubCategory"
      );
      setLoader(false);
      setSubCategories(data.data);
    } catch (error) {
      setLoader(false);
    }
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
  const addSubCategories = async (event) => {
    event.preventDefault();
    setLoader(true);

    let newSubCategories = new FormData();
    newSubCategories.append("ImageName", image);
    newSubCategories.append("Name", event.target["name"].value);
    newSubCategories.append("SpecializedEquipmentId", fil);

    try {
      const { data } = await axiosRequest.post(
        "SubCategory/AddSubCategory",
        newSubCategories
      );

      getSubCategories();
      setAddModal(false);
      setFil("");
      setLoader(false);

      setImage("");
    } catch (error) {
      setLoader(false);

      setImage("");
    }
  };
  const deleteSubCategories = async (id) => {
    setLoader(true);

    try {
      const { data } = await axiosRequest.delete(
        `SubCategory/DeleteSubCategory?id=${id}`
      );

      getSubCategories();
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  const editSubCategories = async (event) => {
    event.preventDefault();
    setLoader(true);

    let updatedSubCategories = new FormData();
    updatedSubCategories.append("Id", idx);
    updatedSubCategories.append("ImageName", imageName);
    updatedSubCategories.append("Name", name);
    updatedSubCategories.append(
      "SpecializedEquipmentId",
      specializedEquipmentidx
    );

    try {
      const { data } = await axiosRequest.put(
        "SubCategory/UpdateSubCategory",
        updatedSubCategories
      );
      getSubCategories();
      setEditModal(false);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  useEffect(() => {
    getSubCategories();
    getSpecializedEquipment();
  }, []);

  return (
    <>
      {loader ? (
        <Circle />
      ) : (
        <>
          <Title>Sub Categories</Title>
          <Grid item alignSelf="flex">
            <IconButton color="warning" onClick={() => setAddModal(true)}>
              <AddCircle fontSize="large" />
            </IconButton>
          </Grid>
          <Grid container spacing={2} direction="row">
            {categories.length > 0 &&
              categories.map((e) => {
                return (
                  <Grid key={e.id} item xs={12} sm={6} md={4} lg={3}>
                    <SubCategoriesCard
                      name={e.name}
                      img={e.imageName}
                      specializedEquipmentId={e.specializedEquipmentId}
                      specializedEquipment={specializedEquipment}
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
                          deleteSubCategories(e.id);
                        }}
                      >
                        <Delete />
                      </IconButton>
                    </SubCategoriesCard>
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
            title="Add Sub Categories"
          >
            <form onSubmit={addSubCategories}>
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
                  Specialized EquipmentId
                </InputLabel>
                <Select
                  fullWidth
                  id="SpecializedEquipmentId"
                  name="SpecializedEquipmentId"
                  label="Specialized EquipmentId"
                  color="warning"
                  sx={{
                    mb: "10px",
                  }}
                  value={fil}
                  onChange={(e) => setFil(e.target.value)}
                >
                  {specializedEquipment.map((e) => {
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
            title="Edit Sub Categories"
          >
            <form onSubmit={editSubCategories}>
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
                  Specialized EquipmentId
                </InputLabel>
                <Select
                  fullWidth
                  id="SpecializedEquipmentId"
                  name="SpecializedEquipmentId"
                  label="Specialized EquipmentId"
                  color="warning"
                  sx={{
                    mb: "10px",
                  }}
                  value={specializedEquipmentidx}
                  onChange={(e) => setSpecializedEquipmentidx(e.target.value)}
                >
                  {specializedEquipment.map((e) => {
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
                value={
                  typeof imageName === "object" ? imageName.name : imageName
                }
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

export default SubCategories;
