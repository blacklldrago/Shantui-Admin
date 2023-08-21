import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  IconButton,
  Tooltip,
} from "@mui/material";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MuiModal from "./Modal";
import { useState } from "react";

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
      <Card sx={{width:300, mt: 10 }}>
        <CardActionArea>
          <CardMedia component="img" height="170" alt="" />
          <CardContent>
            <Tooltip title={productName} arrow>
              <Typography gutterBottom variant="h5" noWrap component="div">
                Name: {productName}
              </Typography>

              <Typography variant="h6" noWrap component="div">
                Price: {price} $
              </Typography>
              <Typography noWrap component="div">
                Click For More Info
                <IconButton color="primary" onClick={() => setInfo(true)}>
                  <FeaturedPlayListIcon />
                </IconButton>
              </Typography>
            </Tooltip>
          </CardContent>
        </CardActionArea>
        <CardActions>{children}</CardActions>
      </Card>

      <MuiModal
        open={info}
        handleClose={() => setInfo(false)}
        title="All information about product "
      >
        {engine.map((e) => {
          if (e.id == engineId) {
            return <Typography>{e.engineModel}</Typography>;
          }
        })}
        {operatingCharacteristics.map((e) => {
          if (e.id == operatingCharacteristicsId) {
            return <Typography>{e.bladeType}</Typography>;
          }
        })}
        {dimensions.map((e) => {
          if (e.id == dimensionsId) {
            return (
              <Typography>
                {e.transportLength} x {e.transportWidth} x {e.transportHeight}
              </Typography>
            );
          }
        })}
        {chassis.map((e) => {
          if (e.id == chassisId) {
            return <Typography>{e.shoeType}</Typography>;
          }
        })}
        {capacities.map((e) => {
          if (e.id == capacitiesId) {
            return (
              <Typography>
                {e.fuelTank} {e.coolingSystem} {e.engineOil} {e.hydraulicTank}{" "}
                {e.transmission}
              </Typography>
            );
          }
        })}
        {additionalInformation.map((e) => {
          if (e.id == additionalInformationId) {
            return <Typography>{e.brand}</Typography>;
          }
        })}
        {subCategory.map((e) => {
          if (e.id == subCategoryId) {
            return <Typography>{e.name}</Typography>;
          }
        })}
        {specializedEquipment.map((e) => {
          if (e.id == specializedEquipmentId) {
            return <Typography>{e.name}</Typography>;
          }
        })}
        {techniqueCategory.map((e) => {
          if (e.id == techniqueCategoryId) {
            return <Typography>{e.name}</Typography>;
          }
        })}
        {aboutProduct.map((e) => {
          if (e.id == aboutProductId) {
            return (
              <Typography>
                {e.transmissionSystem} {e.powerSystem} {e.cabinandControls}{" "}
                {e.adaptiveAbilityToWork} {e.easeOfMaintenance}
              </Typography>
            );
          }
        })}
      </MuiModal>
    </>
  );
}
