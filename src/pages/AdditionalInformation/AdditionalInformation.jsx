import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { axiosRequest } from "../../utils/axiosRequest";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";
import MuiModal from "../../components/Modal";
import AdditionalInfoTable from "../../components/AdditionalInfoTable";
const AdditionalInformation = () => {
  const [additionalInfo, setAdditionalInfo] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [idx, setIdx] = useState(null);
  const [brand, setBrand] = useState("");
  const [assembly, setAssembly] = useState("");
  const [manufacturer, setManufacturerCountry] = useState("");
  const handleModal = (obj) => {
    setEditModal(true);
    setIdx(obj.id)
    setBrand(obj.brand);
    setAssembly(obj.assemblyCountry);
    setManufacturerCountry(obj.manufacturerCountry);
  };

  const getAdditionalInfo = async () => {
    try {
      const { data } = await axiosRequest.get(
        "AdditionalInformation/GetAdditionalInformation"
      );
      setAdditionalInfo(data.data);
    } catch (error) {}
  };

  const addAdditionalInfo = async (event) => {
    event.preventDefault();
    try {
      let newAdditionalInfo = {
        brand: event.target["brand"].value,
        manufacturerCountry: event.target["manufacturerCountry"].value,
        assemblyCountry: event.target["assemblyCountry"].value,
      };
      const { data } = await axiosRequest.post(
        "AdditionalInformation/AddAdditionalInformation",
        newAdditionalInfo
      );

      getAdditionalInfo();
      setAddModal(false);
    } catch (error) {}
  };

  const deleteAdditionalInfo = async (id) => {
    try {
      const { data } = await axiosRequest.delete(
        `AdditionalInformation/DeleteAdditionalInformation?id=${id}`
      );

      getAdditionalInfo();
    } catch (error) {}
  };

  const editAdditionalInfo = async (event) => {
    event.preventDefault();
    try {
      let updatedAdditionalInfo = {
        id:idx,
        brand: brand,
        manufacturerCountry: manufacturer,
        assemblyCountry: assembly,
      };
      const { data } = await axiosRequest.put(`AdditionalInformation/UpdateAdditionalInformation`,updatedAdditionalInfo);
      getAdditionalInfo();
      setEditModal(false)
    } catch (error) {}
  };

  useEffect(() => {
    getAdditionalInfo();
  }, []);
  return (
    <>
      <Title>Additional Information</Title>
      <Grid container spacing={2} direction="row">
        <Grid item alignSelf="flex">
          <IconButton color="warning" onClick={() => setAddModal(true)}>
            <AddCircle fontSize="large" />
          </IconButton>
        </Grid>
        <AdditionalInfoTable
          data={additionalInfo}
          deleteAdditionalInfo={deleteAdditionalInfo}
          handleModal={handleModal}
        />
      </Grid>

      <MuiModal
        open={addModal}
        handleClose={() => setAddModal(false)}
        title="Add Additional Information"
      >
        <form onSubmit={addAdditionalInfo}>
          <TextField
            fullWidth
            id="brand"
            name="brand"
            label="Brand"
            color="warning"
            sx={{
              mb: "10px",
            }}
          />
          <TextField
            fullWidth
            id="manufacturerCountry"
            name="manufacturerCountry"
            label="Manufacturer Country"
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
        title="Edit Addtional Information"
      >
        <form onSubmit={editAdditionalInfo}>
          <TextField
            fullWidth
            id="brand"
            name="brand"
            label="Brand"
            color="warning"
            sx={{
              mb: brand.length == "" ? "10px" : "15px",
            }}
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          <TextField
            fullWidth
            id="manufacturerCountry"
            name="manufacturerCountry"
            label="Manufacturer Country"
            color="warning"
            sx={{ mb: manufacturer.length == "" ? "10px" : "15px" }}
            value={manufacturer}
            onChange={(e) => setManufacturerCountry(e.target.value)}
          />
          <TextField
            fullWidth
            id="assemblyCountry"
            name="assemblyCountry"
            label="Assembly Country"
            color="warning"
            sx={{ mb: assembly.length == "" ? "10px" : "15px" }}
            value={assembly}
            onChange={(e) => setAssembly(e.target.value)}
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

export default AdditionalInformation;
