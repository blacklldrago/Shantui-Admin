import React, { useEffect, useRef, useState } from "react";
import Title from "../../components/Title";
import { axiosRequest } from "../../utils/axiosRequest";
import { Button, Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";
import MuiModal from "../../components/Modal";
import AboutProductCard from "../../components/AboutProductCard";

import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import Circle from "../../components/Loaders/Circle";
import { GetApp } from "@mui/icons-material";
const AboutProduct = () => {
  const [aboutProduct, setAboutProduct] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");
  const [idx, setIdx] = useState(null);
  const [powerSystem, setPowerSystem] = useState("");
  const [transmissionSystem, setTransmissionSystem] = useState("");
  const [cabinandControls, setCabinandControls] = useState("");
  const [adaptiveAbilityToWork, setAdaptiveAbilityToWork] = useState("");
  const [easeOfMaintenance, setEaseOfMaintenance] = useState("");

  const videoRef = useRef(null)
  const [loader, setLoader] = useState(false);

  const handleModal = (obj) => {
    setEditModal(true);
    setIdx(obj.id);
    setImageName(obj.aboutProductImage);
    setPowerSystem(obj.powerSystem);
    setTransmissionSystem(obj.transmissionSystem);
    setCabinandControls(obj.cabinandControls);
    setAdaptiveAbilityToWork(obj.adaptiveAbilityToWork);
    setEaseOfMaintenance(obj.easeOfMaintenance);
  };

  const getAboutProduct = async () => {
    setLoader(true);
    try {
      const { data } = await axiosRequest.get("AboutProduct/GetAboutProducts");
      setLoader(false);
      setAboutProduct(data.data);
    } catch (error) {
      setLoader(false);
    }
  };

  const addAboutProduct = async (event) => {
    event.preventDefault();
    setLoader(true);
    let newAboutProduct = new FormData();
    newAboutProduct.append("AboutProductImage", image);
    newAboutProduct.append("PowerSystem", event.target["powerSystem"].value);
    newAboutProduct.append(
      "TransmissionSystem",
      event.target["transmissionSystem"].value
    );
    newAboutProduct.append(
      "CabinandControls",
      event.target["cabinandControls"].value
    );
    newAboutProduct.append(
      "AdaptiveAbilityToWork",
      event.target["adaptiveAbilityToWork"].value
    );
    newAboutProduct.append(
      "EaseOfMaintenance",
      event.target["easeOfMaintenance"].value
    );

    try {
      const { data } = await axiosRequest.post(
        "AboutProduct/AddAboutProduct",
        newAboutProduct
      );

      getAboutProduct();
      setLoader(false);
      setAddModal(false);
      setImage("")
    } catch (error) {
      setLoader(false);
      setImage("")
    }
  };

  const deleteAboutProduct = async (id) => {
    setLoader(true);
    try {
      const { data } = await axiosRequest.delete(
        `AboutProduct/DeleteAboutProduct?id=${id}`
      );

      setLoader(false);
      getAboutProduct();
    } catch (error) {
      setLoader(false);
    }
  };

  const editAboutProduct = async (event) => {
    event.preventDefault();
    setLoader(true);

    let updatedAboutProduct = new FormData();
    updatedAboutProduct.append("AboutProductImage", imageName);
    updatedAboutProduct.append("Id", idx);
    updatedAboutProduct.append("PowerSystem", powerSystem);
    updatedAboutProduct.append("TransmissionSystem", transmissionSystem);
    updatedAboutProduct.append("CabinandControls", cabinandControls);
    updatedAboutProduct.append("AdaptiveAbilityToWork", adaptiveAbilityToWork);
    updatedAboutProduct.append("EaseOfMaintenance", easeOfMaintenance);

    try {
      const { data } = await axiosRequest.put(
        "AboutProduct/UpdateAboutProduct",
        updatedAboutProduct
      );
      getAboutProduct();
      setEditModal(false);

      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  useEffect(() => {
    getAboutProduct();
  }, []);
  return (
    <>
      {loader ? (
        <Circle />
      ) : (
        <>
          <Title>About Product</Title>
            <Grid item alignSelf="flex">
              <IconButton color="warning" onClick={() => setAddModal(true)}>
                <AddCircle fontSize="large" />
              </IconButton>
            </Grid>
          <Grid container spacing={2} direction="row">

            {aboutProduct.length > 0 &&
              aboutProduct.map((e) => {
                return (
                  <Grid key={e.id} item xs={12} sm={6} md={4} lg={3}>
                    <AboutProductCard
                      aboutProductImage={e.aboutProductImage}
                      powerSystem={e.powerSystem}
                      transmissionSystem={e.transmissionSystem}
                      cabinandControls={e.cabinandControls}
                      adaptiveAbilityToWork={e.adaptiveAbilityToWork}
                      easeOfMaintenance={e.easeOfMaintenance}
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
                          deleteAboutProduct(e.id);
                        }}
                      >
                        <Delete />
                      </IconButton>
                    </AboutProductCard>
                  </Grid>
                );
              })}
          </Grid>

          <MuiModal
            open={addModal}
            handleClose={() =>{ setAddModal(false); setImage("")}}
            title="Add About Product"
          >
            <form onSubmit={addAboutProduct}>
              <TextField
                fullWidth
                id="powerSystem"
                name="powerSystem"
                label="Power System"
                color="warning"
                sx={{
                  mb: "10px",
                }}
              />
              <TextField
                fullWidth
                id="transmissionSystem"
                name="transmissionSystem"
                label="Transmission System"
                color="warning"
                sx={{
                  mb: "10px",
                }}
              />
              <TextField
                fullWidth
                id="cabinandControls"
                name="cabinandControls"
                label="Cabinand Controls"
                color="warning"
                sx={{
                  mb: "10px",
                }}
              />
              <TextField
                fullWidth
                id="adaptiveAbilityToWork"
                name="adaptiveAbilityToWork"
                label="Adaptive To Work"
                color="warning"
                sx={{
                  mb: "10px",
                }}
              />
              <TextField
                fullWidth
                id="easeOfMaintenance"
                name="easeOfMaintenance"
                label="Ease Of Maintenance"
                color="warning"
                sx={{
                  mb: "10px",
                }}
              />
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
            title="Edit About Product"
          >
            <form onSubmit={editAboutProduct}>
              <TextField
                fullWidth
                id="powerSystem"
                name="powerSystem"
                label="Power System"
                color="warning"
                sx={{
                  mb: "10px",
                }}
                value={powerSystem}
                onChange={(e) => setPowerSystem(e.target.value)}
              />
              <TextField
                fullWidth
                id="transmissionSystem"
                name="transmissionSystem"
                label="Transmission System"
                color="warning"
                sx={{
                  mb: "10px",
                }}
                value={transmissionSystem}
                onChange={(e) => setTransmissionSystem(e.target.value)}
              />
              <TextField
                fullWidth
                id="cabinandControls"
                name="cabinandControls"
                label="Cabinand Controls"
                color="warning"
                sx={{
                  mb: "10px",
                }}
                value={cabinandControls}
                onChange={(e) => setCabinandControls(e.target.value)}
              />
              <TextField
                fullWidth
                id="adaptiveAbilityToWork"
                name="adaptiveAbilityToWork"
                label="Adaptive To Work"
                color="warning"
                sx={{
                  mb: "10px",
                }}
                value={adaptiveAbilityToWork}
                onChange={(e) => setAdaptiveAbilityToWork(e.target.value)}
              />
              <TextField
                fullWidth
                id="easeOfMaintenance"
                name="easeOfMaintenance"
                label="Ease Of Maintenance"
                color="warning"
                sx={{
                  mb: "10px",
                }}
                value={easeOfMaintenance}
                onChange={(e) => setEaseOfMaintenance(e.target.value)}
              />
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

export default AboutProduct;
