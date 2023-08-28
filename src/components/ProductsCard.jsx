import MuiModal from "./Modal";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  IconButton,
  Modal,
  Tooltip,
} from "@mui/material";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import '../App.css'
// Import Swiper styles
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
export default function ProductsCard({
  productName,
  children,
  price,
  engineId,
  operatingCharacteristicsId,
  dimensionsId,
  chassisId,
  capacitiesId,
  additionalInformationId,
  subCategoryId,
  specializedEquipmentId,
  techniqueCategoryId,
  aboutProductId,
  engine,
  operatingCharacteristics,
  dimensions,
  chassis,
  capacities,
  additionalInformation,
  subCategory,
  specializedEquipment,
  techniqueCategory,
  aboutProduct,
  img,
}) {
  const [info, setInfo] = useState(false);

  return (
    <>
      <Card sx={{ mt: 10 }}>
        <CardActionArea>
          <Swiper spaceBetween={50} pagination={true} modules={[Pagination]}>
            {img.map((e) => {
              return (
                <SwiperSlide key={e.id}>
                  <CardMedia
                    component="img"
                    height="170"
                    image={`${import.meta.env.VITE_APP_API_URL}/images/${e}`}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <CardContent>
            <Tooltip title={productName} arrow>
              <Typography variant="h5" noWrap component="div">
                {productName}
              </Typography>
            </Tooltip>

            <Typography fontSize={16}>
              Total price:
              <span style={{ fontWeight: 600 }}>${price}</span>
            </Typography>

            <Typography fontSize={18}>
              Characteristics:
              <span>
                <IconButton onClick={() => setInfo(true)} color="primary">
                  <ReceiptLongIcon />
                </IconButton>
              </span>
            </Typography>
          </CardContent>
          <CardActions>
            {" "}
            <div style={{ position: "relative", bottom: "20px" }}>
              {children}
            </div>
          </CardActions>
        </CardActionArea>
      </Card>

      {
        <MuiModal
          open={info}
          handleClose={() => setInfo(false)}
          title="All information about product "
        >
          {engine.map((e) => {
            if (e.id == engineId) {
              return (
                <>
                  <Typography variant="h6">
                    Engine Model: {e.engineModel}
                  </Typography>
                </>
              );
            }
          })}
          {operatingCharacteristics.map((e) => {
            if (e.id == operatingCharacteristicsId) {
              return (
                <Typography variant="h6">Blade Type: {e.bladeType}</Typography>
              );
            }
          })}
          {dimensions.map((e) => {
            if (e.id == dimensionsId) {
              return (
                <Typography variant="h6">
                  Diamensions: {e.transportLength} x {e.transportWidth} x{" "}
                  {e.transportHeight}
                </Typography>
              );
            }
          })}
          {chassis.map((e) => {
            if (e.id == chassisId) {
              return (
                <Typography variant="h6">Shoe Type: {e.shoeType}</Typography>
              );
            }
          })}
          {capacities.map((e) => {
            if (e.id == capacitiesId) {
              return (
                <Typography variant="h6">
                  Fuel Tank: {e.fuelTank} <br /> Cooling System:{" "}
                  {e.coolingSystem} <br /> Engine Oil: {e.engineOil} <br />{" "}
                  Hydraulic Tank: {e.hydraulicTank}
                  <br /> Transmission: {e.transmission}
                </Typography>
              );
            }
          })}
          {additionalInformation.map((e) => {
            if (e.id == additionalInformationId) {
              return <Typography variant="h6">Brand: {e.brand}</Typography>;
            }
          })}
          {subCategory.map((e) => {
            if (e.id == subCategoryId) {
              return (
                <Typography variant="h6">Sub Category: {e.name}</Typography>
              );
            }
          })}
          {specializedEquipment.map((e) => {
            if (e.id == specializedEquipmentId) {
              return (
                <Typography variant="h6">
                  Specialized Equipment: {e.name}
                </Typography>
              );
            }
          })}
          {techniqueCategory.map((e) => {
            if (e.id == techniqueCategoryId) {
              return (
                <Typography variant="h6">
                  Technique Category: {e.name}
                </Typography>
              );
            }
          })}
          {aboutProduct.map((e) => {
            if (e.id == aboutProductId) {
              return (
                <Typography variant="h6">
                  Transmission system: {e.transmissionSystem} <br /> Power
                  system: {e.powerSystem} <br /> Cabinand controls:{" "}
                  {e.cabinandControls} <br />
                  Adaptive to work: {e.adaptiveAbilityToWork} <br /> Ease of
                  maintenance: {e.easeOfMaintenance}
                </Typography>
              );
            }
          })}
          <Button
            color="warning"
            variant="contained"
            onClick={() => setInfo(false)}
            sx={{ mt: 3 }}
            fullWidth
          >
            Close
          </Button>
        </MuiModal>
      }
    </>
  );
}
