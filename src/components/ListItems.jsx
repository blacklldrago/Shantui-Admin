import BarChartIcon from "@mui/icons-material/BarChart";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import CategoryIcon from "@mui/icons-material/Category";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import "../App.css";
export const MainListItems = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <React.Fragment>
      {pathname == "/panel/products" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/products");
          }}
        >
          <ListItemIcon>
            <LocalGroceryStoreIcon color="warning" />
          </ListItemIcon>
          <ListItemText primary="Products" sx={{ color: "#ED6C02" }} />
        </ListItemButton>
      ) : (
        <ListItemButton
          onClick={() => {
            navigate("/panel/products");
          }}
        >
          <ListItemIcon>
            <LocalGroceryStoreIcon />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItemButton>
      )}

      {pathname == "/panel/aboutProduct" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/aboutProduct");
          }}
        >
          <ListItemIcon>
            <LocalGroceryStoreIcon color="warning" />
          </ListItemIcon>
          <ListItemText primary="About Product" sx={{ color: "#ED6C02" }} />
        </ListItemButton>
      ) : (
        <ListItemButton
          onClick={() => {
            navigate("/panel/aboutProduct");
          }}
        >
          <ListItemIcon>
            <LocalGroceryStoreIcon />
          </ListItemIcon>
          <ListItemText primary="About Product" />
        </ListItemButton>
      )}

      {pathname == "/panel/subcategories" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/subcategories");
          }}
        >
          <ListItemIcon>
            <BarChartIcon color="warning" />
          </ListItemIcon>
          <ListItemText primary="Sub Categories" sx={{ color: "#ED6C02" }} />
        </ListItemButton>
      ) : (
        <ListItemButton
          onClick={() => {
            navigate("/panel/subcategories");
          }}
        >
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Sub Categories" />
        </ListItemButton>
      )}

      {pathname == "/panel/additionalInformation" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/additionalInformation");
          }}
        >
          <ListItemIcon>
            <CategoryIcon color="warning" />
          </ListItemIcon>
          <ListItemText
            primary="Additional Information"
            sx={{ color: "#ED6C02" }}
          />
        </ListItemButton>
      ) : (
        <ListItemButton
          onClick={() => {
            navigate("/panel/additionalInformation");
          }}
        >
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Additional Information" />
        </ListItemButton>
      )}

      {pathname == "/panel/capacities" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/capacities");
          }}
        >
          <ListItemIcon>
            <CategoryIcon color="warning" />
          </ListItemIcon>
          <ListItemText primary="Capacities" sx={{ color: "#ED6C02" }} />
        </ListItemButton>
      ) : (
        <ListItemButton
          onClick={() => {
            navigate("/panel/capacities");
          }}
        >
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Capacities" />
        </ListItemButton>
      )}

      {pathname == "/panel/chassis" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/chassis");
          }}
        >
          <ListItemIcon>
            <CategoryIcon color="warning" />
          </ListItemIcon>
          <ListItemText primary="Chassis" sx={{ color: "#ED6C02" }} />
        </ListItemButton>
      ) : (
        <ListItemButton
          onClick={() => {
            navigate("/panel/chassis");
          }}
        >
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Chassis" />
        </ListItemButton>
      )}

      {pathname == "/panel/customer" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/customer");
          }}
        >
          <ListItemIcon>
            <CategoryIcon color="warning" />
          </ListItemIcon>
          <ListItemText primary="Customer" sx={{ color: "#ED6C02" }} />
        </ListItemButton>
      ) : (
        <ListItemButton
          onClick={() => {
            navigate("/panel/customer");
          }}
        >
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Customer" />
        </ListItemButton>
      )}

      {pathname == "/panel/dimensions" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/dimensions");
          }}
        >
          <ListItemIcon>
            <CategoryIcon color="warning" />
          </ListItemIcon>
          <ListItemText primary="Dimensions" sx={{ color: "#ED6C02" }} />
        </ListItemButton>
      ) : (
        <ListItemButton
          onClick={() => {
            navigate("/panel/dimensions");
          }}
        >
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Dimensions" />
        </ListItemButton>
      )}

      {pathname == "/panel/engine" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/engine");
          }}
        >
          <ListItemIcon>
            <CategoryIcon color="warning" />
          </ListItemIcon>
          <ListItemText primary="Engine" sx={{ color: "#ED6C02" }} />
        </ListItemButton>
      ) : (
        <ListItemButton
          onClick={() => {
            navigate("/panel/engine");
          }}
        >
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Engine" />
        </ListItemButton>
      )}

      {pathname == "/panel/operatingCharacteristics" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/operatingCharacteristics");
          }}
        >
          <ListItemIcon>
            <CategoryIcon color="warning" />
          </ListItemIcon>
          <ListItemText
            primary="OperatingCharacteristics"
            sx={{ color: "#ED6C02" }}
          />
        </ListItemButton>
      ) : (
        <ListItemButton
          onClick={() => {
            navigate("/panel/operatingCharacteristics");
          }}
        >
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="OperatingCharacteristics" />
        </ListItemButton>
      )}

      {pathname == "/panel/specializedEquipment" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/specializedEquipment");
          }}
        >
          <ListItemIcon>
            <CategoryIcon color="warning" />
          </ListItemIcon>
          <ListItemText
            primary="SpecializedEquipment"
            sx={{ color: "#ED6C02" }}
          />
        </ListItemButton>
      ) : (
        <ListItemButton
          onClick={() => {
            navigate("/panel/specializedEquipment");
          }}
        >
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="SpecializedEquipment" />
        </ListItemButton>
      )}

      {pathname == "/panel/techniqueCategory" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/techniqueCategory");
          }}
        >
          <ListItemIcon>
            <CategoryIcon color="warning" />
          </ListItemIcon>
          <ListItemText primary="TechniqueCategory" sx={{ color: "#ED6C02" }} />
        </ListItemButton>
      ) : (
        <ListItemButton
          onClick={() => {
            navigate("/panel/techniqueCategory");
          }}
        >
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="TechniqueCategory" />
        </ListItemButton>
      )}

      {pathname == "/panel/users" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/users");
          }}
        >
          <ListItemIcon>
            <PersonIcon color="warning" />
          </ListItemIcon>
          <ListItemText primary="Users" sx={{ color: "#ED6C02" }} />
        </ListItemButton>
      ) : (
        <ListItemButton
          onClick={() => {
            navigate("/panel/users");
          }}
        >
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItemButton>
      )}

      {pathname == "/panel/brands" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/brands");
          }}
        >
          <ListItemIcon>
            <BrandingWatermarkIcon color="warning" />
          </ListItemIcon>
          <ListItemText primary="Brands" sx={{ color: "#ED6C02" }} />
        </ListItemButton>
      ) : (
        <ListItemButton
          onClick={() => {
            navigate("/panel/brands");
          }}
        >
          <ListItemIcon>
            <BrandingWatermarkIcon />
          </ListItemIcon>
          <ListItemText primary="Brands" />
        </ListItemButton>
      )}

      {pathname == "/panel/order" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/order");
          }}
        >
          <ListItemIcon>
            <CategoryIcon color="warning" />
          </ListItemIcon>
          <ListItemText primary="Order" sx={{ color: "#ED6C02" }} />
        </ListItemButton>
      ) : (
        <ListItemButton
          onClick={() => {
            navigate("/panel/order");
          }}
        >
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Order" />
        </ListItemButton>
      )}
    </React.Fragment>
  );
};
