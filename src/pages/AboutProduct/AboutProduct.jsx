import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { axiosRequest } from "../../utils/axiosRequest";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";
import MuiModal from "../../components/Modal";
import AboutProductCard from "../../components/AboutProductCard";

import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
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
  const handleModal = (obj) => {
    setEditModal(true);
    setIdx(obj.id);
    setPowerSystem(obj.powerSystem);
    setTransmissionSystem(obj.transmissionSystem);
    setCabinandControls(obj.cabinandControls);
    setAdaptiveAbilityToWork(obj.adaptiveAbilityToWork);
    setEaseOfMaintenance(obj.easeOfMaintenance);
  };

  const getAboutProduct = async () => {
    try {
      const { data } = await axiosRequest.get("AboutProduct/GetAboutProducts");
      setAboutProduct(data.data);
    } catch (error) {}
  };

  const addAboutProduct = async (event) => {
    event.preventDefault();

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
      setAddModal(false);
    } catch (error) {}
  };

  const deleteAboutProduct = async (id) => {
    try {
      const { data } = await axiosRequest.delete(
        `AboutProduct/DeleteAboutProduct?id=${id}`
      );

      getAboutProduct();
    } catch (error) {}
  };

  const editAboutProduct = async (event) => {
    event.preventDefault();

    // console.log(imageName);
    // console.log(powerSystem);
    // console.log(transmissionSystem);
    // console.log(cabinandControls);
    // console.log(adaptiveAbilityToWork);
    // console.log(easeOfMaintenance);

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
    } catch (error) {}
  };

  useEffect(() => {
    getAboutProduct();
  }, []);
  return (
    <>
      <Title>About Product</Title>
      <Grid container spacing={2} direction="row">
        <Grid item alignSelf="flex">
          <IconButton color="warning" onClick={() => setAddModal(true)}>
            <AddCircle fontSize="large" />
          </IconButton>
        </Grid>

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
        handleClose={() => setAddModal(false)}
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
            onChange={(e)=>setPowerSystem(e.target.value)}
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
            onChange={(e)=>setTransmissionSystem(e.target.value)}
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
            onChange={(e)=>setCabinandControls(e.target.value)}
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
            onChange={(e)=>setAdaptiveAbilityToWork(e.target.value)}
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
            onChange={(e)=>setEaseOfMaintenance(e.target.value)}
          />
          <input
            type="file"
            name="image"
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
  );
};

export default AboutProduct;
