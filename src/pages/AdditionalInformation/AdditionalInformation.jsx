import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { axiosRequest } from "../../utils/axiosRequest";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";
import MuiModal from "../../components/Modal";
import AdditionalInfoTable from "../../components/AdditionalInfoTable";
import Circle from "../../components/Loaders/Circle";
const AdditionalInformation = () => {
  const [additionalInfo, setAdditionalInfo] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [idx, setIdx] = useState(null);
  const [brand, setBrand] = useState("");
  const [assembly, setAssembly] = useState("");
  const [manufacturer, setManufacturerCountry] = useState("");

  const [loader, setLoader] = useState(false);
  const handleModal = (obj) => {
    setEditModal(true);
    setIdx(obj.id);
    setBrand(obj.brand);
    setAssembly(obj.assemblyCountry);
    setManufacturerCountry(obj.manufacturerCountry);
  };

  const getAdditionalInfo = async () => {
    setLoader(true);
    try {
      const { data } = await axiosRequest.get(
        "AdditionalInformation/GetAdditionalInformation"
      );
      setLoader(false);
      setAdditionalInfo(data.data);
    } catch (error) {
      setLoader(false);
    }
  };

  const addAdditionalInfo = async (event) => {
    setLoader(true);
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

      setLoader(false);
      setAddModal(false);
    } catch (error) {
      setLoader(false);
    }
  };

  const deleteAdditionalInfo = async (id) => {
    setLoader(true);
    try {
      const { data } = await axiosRequest.delete(
        `AdditionalInformation/DeleteAdditionalInformation?id=${id}`
      );

      getAdditionalInfo();

      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  const editAdditionalInfo = async (event) => {
    event.preventDefault();
    setLoader(true);
    try {
      let updatedAdditionalInfo = {
        id: idx,
        brand: brand,
        manufacturerCountry: manufacturer,
        assemblyCountry: assembly,
      };
      const { data } = await axiosRequest.put(
        `AdditionalInformation/UpdateAdditionalInformation`,
        updatedAdditionalInfo
      );
      getAdditionalInfo();
      setEditModal(false);

      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  useEffect(() => {
    getAdditionalInfo();
  }, []);
  return (
    <>
      {loader ? (
        <Circle />
      ) : (
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
      )}
    </>
  );
};

export default AdditionalInformation;
