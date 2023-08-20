import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { axiosRequest } from "../../utils/axiosRequest";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";
import MuiModal from "../../components/Modal";

import DimensionsTable from "../../components/DimensionsTable";

import Circle from "../../components/Loaders/Circle";
const Dimensions = () => {
  const [loader, setLoader] = useState(false);
  const [dimensions, setDimensions] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [idx, setIdx] = useState(null);
  const [transportLength, setTransportLength] = useState("");
  const [transportWidth, setTransportWidth] = useState("");
  const [transportHeight, setTransportHeight] = useState("");
  const handleModal = (obj) => {
    setEditModal(true);
    setIdx(obj.id);
    setTransportLength(obj.transportLength);
    setTransportWidth(obj.transportWidth);
    setTransportHeight(obj.transportHeight);
  };

  const getDimensions = async () => {
    setLoader(true);
    try {
      const { data } = await axiosRequest.get("Dimensions/GetFilterDimensions");
      setDimensions(data.data);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  const addDimensions = async (event) => {
    event.preventDefault();
    setLoader(true);
    try {
      let newDimensions = {
        transportLength: event.target["transportLength"].value,
        transportWidth: event.target["transportWidth"].value,
        transportHeight: event.target["transportHeight"].value,
      };
      const { data } = await axiosRequest.post(
        "Dimensions/AddDimensions",
        newDimensions
      );

      setLoader(false);
      getDimensions();
      setAddModal(false);
    } catch (error) {
      setLoader(false);
    }
  };
  const deleteDimensions = async (id) => {
    setLoader(true);
    try {
      const { data } = await axiosRequest.delete(
        `Dimensions/DeleteDimension?id=${id}`
      );

      setLoader(false);
      getDimensions();
    } catch (error) {
      setLoader(false);
    }
  };

  const editDimensions = async (event) => {
    event.preventDefault();
    setLoader(true);
    try {
      let updatedDimensions = {
        id: idx,
        transportLength: transportLength,
        transportWidth: transportWidth,
        transportHeight: transportHeight,
      };
      const { data } = await axiosRequest.put(
        "Dimensions/UpdateDimension",
        updatedDimensions
      );
      setLoader(false);
      getDimensions();
      setEditModal(false);
    } catch (error) {
      setLoader(false);
    }
  };

  useEffect(() => {
    getDimensions();
  }, []);
  return (
    <>
      {loader ? (
        <Circle />
      ) : (
        <>
          <Title>Dimensions</Title>
          <Grid container spacing={2} direction="row">
            <Grid item alignSelf="flex">
              <IconButton color="warning" onClick={() => setAddModal(true)}>
                <AddCircle fontSize="large" />
              </IconButton>
            </Grid>
            <DimensionsTable
              data={dimensions}
              deleteDimensions={deleteDimensions}
              handleModal={handleModal}
            />
          </Grid>

          <MuiModal
            open={addModal}
            handleClose={() => setAddModal(false)}
            title="Add Dimensions"
          >
            <form onSubmit={addDimensions}>
              <TextField
                fullWidth
                id="transportLength"
                name="transportLength"
                label="Transport Length"
                color="warning"
                sx={{
                  mb: "10px",
                }}
                type="number"
              />

              <TextField
                fullWidth
                id="transportWidth"
                name="transportWidth"
                label="Transport Width"
                color="warning"
                sx={{
                  mb: "10px",
                }}
                type="number"
              />
              <TextField
                fullWidth
                id="transportHeight"
                name="transportHeight"
                label="Transport Height"
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
            title="Edit Dimensions"
          >
            <form onSubmit={editDimensions}>
              <TextField
                fullWidth
                id="transportLength"
                name="transportLength"
                label="Transport Length"
                color="warning"
                sx={{
                  mb: "10px",
                }}
                type="number"
                value={transportLength}
                onChange={(e) => setTransportLength(e.target.value)}
              />

              <TextField
                fullWidth
                id="transportWidth"
                name="transportWidth"
                label="Transport Width"
                color="warning"
                sx={{
                  mb: "10px",
                }}
                type="number"
                value={transportWidth}
                onChange={(e) => setTransportWidth(e.target.value)}
              />
              <TextField
                fullWidth
                id="transportHeight"
                name="transportHeight"
                label="Transport Height"
                color="warning"
                sx={{
                  mb: "10px",
                }}
                type="number"
                value={transportHeight}
                onChange={(e) => setTransportHeight(e.target.value)}
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

export default Dimensions;
