import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { axiosRequest } from "../../utils/axiosRequest";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";
import MuiModal from "../../components/Modal";
import ProductsCard from "../../components/ProductsCard";

import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";

import Circle from "../../components/Loaders/Circle";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [aboutProduct, setAboutProduct] = useState([]);
  const [additionalInfo, setAdditionalInfo] = useState([]);
  const [engine, setEngine] = useState([]);
  const [operatingCharacteristics, setOperatingCharacteristics] = useState([]);
  const [dimensions, setDimensions] = useState([]);
  const [chassis, setChassis] = useState([]);
  const [capacities, setCapacities] = useState([]);
  const [subcategories, setSubCategories] = useState([]);
  const [specializedEquipment, setSpecializedEquipment] = useState([]);
  const [techniqueCategory, setTechniqueCategory] = useState([]);

  const [loader, setLoader] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [image, setImage] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [idx, setIdx] = useState(null);
  const [imageName, setImageName] = useState("");
  // idx's"
  const [specializedEquipmentidx, setSpecializedEquipmentidx] = useState(null);
  const [specializedEquipmentidx1, setSpecializedEquipmentidx1] =
    useState(null);
  const [engineidx, setEngineidx] = useState(null);
  const [engineidx1, setEngineidx1] = useState(null);
  const [operatingCharacteristicsidx, setOperatingCharacteristicsidx] =
    useState(null);
  const [operatingCharacteristicsidx1, setOperatingCharacteristicsidx1] =
    useState(null);
  const [diamensionidx, setDiamensionidx] = useState(null);
  const [diamensionidx1, setDiamensionidx1] = useState(null);
  const [chassisidx, setChassisidx] = useState(null);
  const [chassisidx1, setChassisidx1] = useState(null);
  const [capacitiesidx, setСapacitiesidx] = useState(null);
  const [capacitiesidx1, setCapacitiesidx1] = useState(null);
  const [additionalInfoidx, setAdditionalInfoidx] = useState(null);
  const [additionalInfoidx1, setAdditionalInfoidx1] = useState(null);
  const [subCategoryidx, setSubCategoryidx] = useState(null);
  const [subCategoryidx1, setSubCategoryidx1] = useState(null);
  const [techidx, setTechidx] = useState(null);
  const [techidx1, setTechidx1] = useState(null);
  const [aboutProductidx, setAboutProductidx] = useState(null);
  const [aboutProductidx1, setAboutProductidx1] = useState(null);

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(null);

  const handleModal = (obj) => {
    setEditModal(true);
    setIdx(obj.id);
    setImageName(obj.productImages);
    setEngineidx1(obj.engineId);
    setProductName(obj.productName);
    setOperatingCharacteristicsidx1(obj.operatingCharacteristicsId);
    setDiamensionidx1(obj.dimensionsId);
    setPrice(obj.price);
    setSpecializedEquipmentidx1(obj.specializedEquipmentId);
    setTechidx1(obj.techniqueCategoryId);
    setAboutProductidx1(obj.aboutProductId);
    setAdditionalInfoidx1(obj.additionalInformationId);
    setSubCategoryidx1(obj.subCategoryId);
    setCapacitiesidx1(obj.capacitiesId);
    setChassisidx1(obj.chassisId);
  };
  const getProducts = async () => {
    setLoader(true);
    try {
      const { data } = await axiosRequest.get("Product/GetFilterProducts");
      setLoader(false);
      setProduct(data.data);
    } catch (error) {
      setLoader(false);
    }
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
  const getChassis = async () => {
    setLoader(true);
    try {
      const { data } = await axiosRequest.get("Chassis/GetFilterChassis");
      setChassis(data.data);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };
  const getEngine = async () => {
    setLoader(true);
    try {
      const { data } = await axiosRequest.get("Engine/GetFilterEngine");
      setEngine(data.data);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };
  const getOperatingCharacteristics = async () => {
    setLoader(true);
    try {
      const { data } = await axiosRequest.get(
        "OperatingCharacteristics/GetFilterOperatingCharacteristics"
      );
      setLoader(false);
      setOperatingCharacteristics(data.data);
    } catch (error) {
      setLoader(false);
    }
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
  const getCapacities = async () => {
    setLoader(true);
    try {
      const { data } = await axiosRequest.get("Capacities/GetFilterCapacities");
      setCapacities(data.data);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
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
      setTechniqueCategory(data.data);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  const addProduct = async (event) => {
    event.preventDefault();
    setLoader(true);
    let newProduct = new FormData();
    newProduct.append("ProductImages", image);
    newProduct.append("ProductName", event.target["productName"].value);
    newProduct.append("EngineId", engineidx);
    newProduct.append(
      "OperatingCharacteristicsId",
      operatingCharacteristicsidx
    );
    newProduct.append("DimensionsId", diamensionidx);
    newProduct.append("Price", event.target["price"].value);
    newProduct.append("ChassisId", chassisidx);
    newProduct.append("CapacitiesId", capacitiesidx);
    newProduct.append("AdditionalInformationId", additionalInfoidx);
    newProduct.append("SubCategoryId", subCategoryidx);
    newProduct.append("SpecializedEquipmentId", specializedEquipmentidx);
    newProduct.append("TechniqueCategoryId", techidx);
    newProduct.append("AboutProductId", aboutProductidx);

    try {
      const { data } = await axiosRequest.post(
        "Product/AddProduct",
        newProduct
      );
      getProducts();
      setAddModal(false);
      setChassisidx("");
      setEngineidx("");
      setСapacitiesidx("");
      setOperatingCharacteristicsidx("");
      setDiamensionidx("");
      setSubCategoryidx("");
      setAdditionalInfoidx("");
      setSpecializedEquipmentidx("");
      setTechidx("");
      setAboutProductidx("");
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  const deleteProduct = async (id) => {
    setLoader(true);

    try {
      const { data } = await axiosRequest.delete(
        `Product/DeleteProduct?id=${id}`
      );

      getProducts();
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  const editProduct = async (event) => {
    event.preventDefault();
    setLoader(true);
    let updatedProduct = new FormData();
    updatedProduct.append("Id", imageName);
    updatedProduct.append("Id", idx);
    updatedProduct.append("ProductImages", imageName);
    updatedProduct.append("ProductName", event.target["productName"].value);
    updatedProduct.append("EngineId", engineidx1);
    updatedProduct.append(
      "OperatingCharacteristicsId",
      operatingCharacteristicsidx1
    );
    updatedProduct.append("DimensionsId", diamensionidx1);
    updatedProduct.append("Price", event.target["price"].value);
    updatedProduct.append("ChassisId", chassisidx1);
    updatedProduct.append("CapacitiesId", capacitiesidx1);
    updatedProduct.append("AdditionalInformationId", additionalInfoidx1);
    updatedProduct.append("SubCategoryId", subCategoryidx1);
    updatedProduct.append("SpecializedEquipmentId", specializedEquipmentidx1);
    updatedProduct.append("TechniqueCategoryId", techidx1);
    updatedProduct.append("AboutProductId", aboutProductidx1);

    try {
      const { data } = await axiosRequest.put(
        "Product/UpdateProduct",
        updatedProduct
      );
      getProducts();
      setEditModal(false);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  useEffect(() => {
    getProducts();
    getAboutProduct();
    getAdditionalInfo();
    getEngine();
    getOperatingCharacteristics();
    getDimensions();
    getChassis();
    getCapacities();
    getSubCategories();
    getSpecializedEquipment();
    getTechniqueCategory();
  }, []);

  return (
    <>
      {loader ? (
        <Circle />
      ) : (
        <>
          <Title>Products</Title>
          <Grid container spacing={2} direction="row">
            <Grid item alignSelf="flex">
              <IconButton color="warning" onClick={() => setAddModal(true)}>
                <AddCircle fontSize="large" />
              </IconButton>
            </Grid>

            {product.length > 0 &&
              product.map((e) => {
                return (
                  <Grid key={e.id} item xs={12} sm={6} md={4} lg={3}>
                    <ProductsCard
                      productName={e.productName}
                      img={e.productImages}
                      engineId={e.engineId}
                      operatingCharacteristicsId={e.operatingCharacteristicsId}
                      dimensionsId={e.dimensionsId}
                      price={e.price}
                      chassisId={e.chassisId}
                      capacitiesId={e.capacitiesId}
                      additionalInformationId={e.additionalInformationId}
                      subCategoryId={e.subCategoryId}
                      specializedEquipmentId={e.specializedEquipmentId}
                      techniqueCategoryId={e.techniqueCategoryId}
                      aboutProductId={e.aboutProductId}
                      //massives
                      //massives
                      //massives
                      engine={engine}
                      operatingCharacteristics={operatingCharacteristics}
                      dimensions={dimensions}
                      chassis={chassis}
                      capacities={capacities}
                      additionalInformation={additionalInfo}
                      subCategory={subcategories}
                      specializedEquipment={specializedEquipment}
                      techniqueCategory={techniqueCategory}
                      aboutProduct={aboutProduct}
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
                          deleteProduct(e.id);
                        }}
                      >
                        <Delete />
                      </IconButton>
                    </ProductsCard>
                  </Grid>
                );
              })}
          </Grid>

          <MuiModal
            open={addModal}
            handleClose={() => {
              setAddModal(false);
              setChassisidx("");
              setEngineidx("");
              setСapacitiesidx("");
              setOperatingCharacteristicsidx("");
              setDiamensionidx("");
              setSubCategoryidx("");
              setAdditionalInfoidx("");
              setSpecializedEquipmentidx("");
              setTechidx("");
              setAboutProductidx("");
            }}
            title="Add Product"
          >
            <form onSubmit={addProduct}>
              <TextField
                fullWidth
                id="productName"
                name="productName"
                label="Product Name"
                color="warning"
                sx={{
                  mb: "10px",
                }}
              />
              <FormControl fullWidth>
                <InputLabel color="warning" id="Engine">
                  Engine
                </InputLabel>
                <Select
                  fullWidth
                  id="engineId"
                  name="engineId"
                  label="Engine"
                  color="warning"
                  sx={{
                    mb: "10px",
                  }}
                  value={engineidx}
                  onChange={(e) => setEngineidx(e.target.value)}
                >
                  {engine.map((e) => {
                    return (
                      <MenuItem value={e.id}> Model: {e.engineModel}</MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel color="warning" id="OperatingCharacteristicsId">
                  Operating Characteristics
                </InputLabel>
                <Select
                  fullWidth
                  id="operatingCharacteristicsId"
                  name="operatingCharacteristicsId"
                  label="Operating Characteristics"
                  color="warning"
                  sx={{
                    mb: "10px",
                  }}
                  value={operatingCharacteristicsidx}
                  onChange={(e) =>
                    setOperatingCharacteristicsidx(e.target.value)
                  }
                >
                  {operatingCharacteristics.map((e) => {
                    return (
                      <MenuItem value={e.id}>
                        {" "}
                        Weight: {e.operatingWeight}, Blade Type: {e.bladeType}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel color="warning" id="dimensionsId">
                  Diamensions
                </InputLabel>
                <Select
                  fullWidth
                  id="dimensionsId"
                  name="dimensionsId"
                  label="Dimensions"
                  color="warning"
                  sx={{
                    mb: "10px",
                  }}
                  value={diamensionidx}
                  onChange={(e) => setDiamensionidx(e.target.value)}
                >
                  {dimensions.map((e) => {
                    return (
                      <MenuItem value={e.id}>
                        {" "}
                        Width:{e.transportWidth}, Height:{e.transportLength},
                        Lenght:{e.transportHeight}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <TextField
                fullWidth
                id="price"
                name="price"
                label="Price"
                color="warning"
                sx={{
                  mb: "10px",
                }}
                type="number"
              />
              <FormControl fullWidth>
                <InputLabel color="warning" id="chassisId">
                  Chassis
                </InputLabel>
                <Select
                  fullWidth
                  id="Chassis"
                  name="Chassis"
                  label="Chassis"
                  color="warning"
                  sx={{
                    mb: "10px",
                  }}
                  value={chassisidx}
                  onChange={(e) => setChassisidx(e.target.value)}
                >
                  {chassis.map((e) => {
                    return (
                      <MenuItem value={e.id}>
                        {" "}
                        Shoe Type: {e.shoeType}{" "}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel color="warning" id="capacitiesId">
                  Capacities
                </InputLabel>
                <Select
                  fullWidth
                  id="capacitiesId"
                  name="capacitiesId"
                  label="Capacities"
                  color="warning"
                  sx={{
                    mb: "10px",
                  }}
                  value={capacitiesidx}
                  onChange={(e) => setСapacitiesidx(e.target.value)}
                >
                  {capacities.map((e) => {
                    return (
                      <MenuItem value={e.id}>
                        Fuel Tank: {e.fuelTank}, Cooling System:{" "}
                        {e.coolingSystem}, Engine Oil: {e.engineOil},
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel color="warning" id="additionalInformationId">
                  Additional Information
                </InputLabel>
                <Select
                  fullWidth
                  id="additionalInformationId"
                  name="additionalInformationId"
                  label="Additional Information"
                  color="warning"
                  sx={{
                    mb: "10px",
                  }}
                  value={additionalInfoidx}
                  onChange={(e) => setAdditionalInfoidx(e.target.value)}
                >
                  {additionalInfo.map((e) => {
                    return <MenuItem value={e.id}>Brand: {e.brand}</MenuItem>;
                  })}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel color="warning" id="subCategoryId">
                  Sub Category
                </InputLabel>
                <Select
                  fullWidth
                  id="subCategoryId"
                  name="subCategoryId"
                  label="Additional Information"
                  color="warning"
                  sx={{
                    mb: "10px",
                  }}
                  value={subCategoryidx}
                  onChange={(e) => setSubCategoryidx(e.target.value)}
                >
                  {subcategories.map((e) => {
                    return <MenuItem value={e.id}>{e.name}</MenuItem>;
                  })}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel color="warning" id="specializedEquipmentId">
                  Specialized Equipment
                </InputLabel>
                <Select
                  fullWidth
                  id="specializedEquipmentId"
                  name="specializedEquipmentId"
                  label="Additional Information"
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
              <FormControl fullWidth>
                <InputLabel color="warning" id="techniqueCategoryId">
                  Technique Category
                </InputLabel>
                <Select
                  fullWidth
                  id="techniqueCategoryId"
                  name="techniqueCategoryId"
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
              <FormControl fullWidth>
                <InputLabel color="warning" id="aboutProductId">
                  About Product
                </InputLabel>
                <Select
                  fullWidth
                  id="aboutProductId"
                  name="aboutProductId"
                  label="About Product"
                  color="warning"
                  sx={{
                    mb: "10px",
                  }}
                  value={aboutProductidx}
                  onChange={(e) => setAboutProductidx(e.target.value)}
                >
                  {aboutProduct.map((e) => {
                    return (
                      <MenuItem value={e.id}>
                        Power System: {e.powerSystem}, Transmission System:{" "}
                        {e.transmissionSystem}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              <input
                type="file"
                name="productImages"
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
            title="Edit Product"
          >
            <form onSubmit={editProduct}>
              <TextField
                fullWidth
                id="productName"
                name="productName"
                label="Product Name"
                color="warning"
                sx={{
                  mb: "10px",
                }}
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
              <FormControl fullWidth>
                <InputLabel color="warning" id="Engine">
                  Engine
                </InputLabel>
                <Select
                  fullWidth
                  id="engineId"
                  name="engineId"
                  label="Engine"
                  color="warning"
                  sx={{
                    mb: "10px",
                  }}
                  value={engineidx1}
                  onChange={(e) => setEngineidx1(e.target.value)}
                >
                  {engine.map((e) => {
                    return (
                      <MenuItem value={e.id}> Model: {e.engineModel}</MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel color="warning" id="OperatingCharacteristicsId">
                  Operating Characteristics
                </InputLabel>
                <Select
                  fullWidth
                  id="operatingCharacteristicsId"
                  name="operatingCharacteristicsId"
                  label="Operating Characteristics"
                  color="warning"
                  sx={{
                    mb: "10px",
                  }}
                  value={operatingCharacteristicsidx1}
                  onChange={(e) =>
                    setOperatingCharacteristicsidx1(e.target.value)
                  }
                >
                  {operatingCharacteristics.map((e) => {
                    return (
                      <MenuItem value={e.id}>
                        {" "}
                        Weight: {e.operatingWeight}, Blade Type: {e.bladeType}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel color="warning" id="dimensionsId">
                  Diamensions
                </InputLabel>
                <Select
                  fullWidth
                  id="dimensionsId"
                  name="dimensionsId"
                  label="Dimensions"
                  color="warning"
                  sx={{
                    mb: "10px",
                  }}
                  value={diamensionidx1}
                  onChange={(e) => setDiamensionidx1(e.target.value)}
                >
                  {dimensions.map((e) => {
                    return (
                      <MenuItem value={e.id}>
                        {" "}
                        Width:{e.transportWidth}, Height:{e.transportLength},
                        Lenght:{e.transportHeight}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <TextField
                fullWidth
                id="price"
                name="price"
                label="Price"
                color="warning"
                sx={{
                  mb: "10px",
                }}
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <FormControl fullWidth>
                <InputLabel color="warning" id="chassisId">
                  Chassis
                </InputLabel>
                <Select
                  fullWidth
                  id="Chassis"
                  name="Chassis"
                  label="Chassis"
                  color="warning"
                  sx={{
                    mb: "10px",
                  }}
                  value={chassisidx1}
                  onChange={(e) => setChassisidx1(e.target.value)}
                >
                  {chassis.map((e) => {
                    return (
                      <MenuItem value={e.id}>
                        {" "}
                        Shoe Type: {e.shoeType}{" "}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel color="warning" id="capacitiesId">
                  Capacities
                </InputLabel>
                <Select
                  fullWidth
                  id="capacitiesId"
                  name="capacitiesId"
                  label="Capacities"
                  color="warning"
                  sx={{
                    mb: "10px",
                  }}
                  value={capacitiesidx1}
                  onChange={(e) => setCapacitiesidx1(e.target.value)}
                >
                  {capacities.map((e) => {
                    return (
                      <MenuItem value={e.id}>
                        Fuel Tank: {e.fuelTank}, Cooling System:{" "}
                        {e.coolingSystem}, Engine Oil: {e.engineOil},
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel color="warning" id="additionalInformationId">
                  Additional Information
                </InputLabel>
                <Select
                  fullWidth
                  id="additionalInformationId"
                  name="additionalInformationId"
                  label="Additional Information"
                  color="warning"
                  sx={{
                    mb: "10px",
                  }}
                  value={additionalInfoidx1}
                  onChange={(e) => setAdditionalInfoidx1(e.target.value)}
                >
                  {additionalInfo.map((e) => {
                    return <MenuItem value={e.id}>Brand: {e.brand}</MenuItem>;
                  })}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel color="warning" id="subCategoryId">
                  Sub Category
                </InputLabel>
                <Select
                  fullWidth
                  id="subCategoryId"
                  name="subCategoryId"
                  label="Additional Information"
                  color="warning"
                  sx={{
                    mb: "10px",
                  }}
                  value={subCategoryidx1}
                  onChange={(e) => setSubCategoryidx1(e.target.value)}
                >
                  {subcategories.map((e) => {
                    return <MenuItem value={e.id}>{e.name}</MenuItem>;
                  })}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel color="warning" id="specializedEquipmentId">
                  Specialized Equipment
                </InputLabel>
                <Select
                  fullWidth
                  id="specializedEquipmentId"
                  name="specializedEquipmentId"
                  label="Additional Information"
                  color="warning"
                  sx={{
                    mb: "10px",
                  }}
                  value={specializedEquipmentidx1}
                  onChange={(e) => setSpecializedEquipmentidx1(e.target.value)}
                >
                  {specializedEquipment.map((e) => {
                    return <MenuItem value={e.id}>{e.name}</MenuItem>;
                  })}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel color="warning" id="techniqueCategoryId">
                  Technique Category
                </InputLabel>
                <Select
                  fullWidth
                  id="techniqueCategoryId"
                  name="techniqueCategoryId"
                  label="Technique Category"
                  color="warning"
                  sx={{
                    mb: "10px",
                  }}
                  value={techidx1}
                  onChange={(e) => setTechidx1(e.target.value)}
                >
                  {techniqueCategory.map((e) => {
                    return <MenuItem value={e.id}>{e.name}</MenuItem>;
                  })}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel color="warning" id="aboutProductId">
                  About Product
                </InputLabel>
                <Select
                  fullWidth
                  id="aboutProductId"
                  name="aboutProductId"
                  label="About Product"
                  color="warning"
                  sx={{
                    mb: "10px",
                  }}
                  value={aboutProductidx1}
                  onChange={(e) => setAboutProductidx1(e.target.value)}
                >
                  {aboutProduct.map((e) => {
                    return (
                      <MenuItem value={e.id}>
                        Power System: {e.powerSystem}, Transmission System:{" "}
                        {e.transmissionSystem}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              <input
                type="file"
                name="productImages"
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

export default Products;
