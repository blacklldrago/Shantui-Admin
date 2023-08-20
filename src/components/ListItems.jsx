import * as React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, useNavigate } from "react-router-dom";
import CategoryIcon from "@mui/icons-material/Category";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import SettingsIcon from "@mui/icons-material/Settings";
import ConstructionIcon from "@mui/icons-material/Construction";
import SummarizeIcon from "@mui/icons-material/Summarize";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import HdrWeakIcon from "@mui/icons-material/HdrWeak";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import FactCheckIcon from "@mui/icons-material/FactCheck";

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
            <ProductionQuantityLimitsIcon color="warning" />
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
            <ProductionQuantityLimitsIcon />
          </ListItemIcon>
          <ListItemText primary="About Product" />
        </ListItemButton>
      )}

      {pathname == "/panel/additionalInformation" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/additionalInformation");
          }}
        >
          <ListItemIcon>
            <FactCheckIcon color="warning" />
          </ListItemIcon>
          <ListItemText primary="More Info" sx={{ color: "#ED6C02" }} />
        </ListItemButton>
      ) : (
        <ListItemButton
          onClick={() => {
            navigate("/panel/additionalInformation");
          }}
        >
          <ListItemIcon>
            <FactCheckIcon />
          </ListItemIcon>
          <ListItemText primary="More Info" />
        </ListItemButton>
      )}

      {pathname == "/panel/capacities" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/capacities");
          }}
        >
          <ListItemIcon>
            <ViewInArIcon color="warning" />
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
            <ViewInArIcon />
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
            <HdrWeakIcon color="warning" />
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
            <HdrWeakIcon />
          </ListItemIcon>
          <ListItemText primary="Chassis" />
        </ListItemButton>
      )}

      {pathname == "/panel/dimensions" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/dimensions");
          }}
        >
          <ListItemIcon>
            <SquareFootIcon color="warning" />
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
            <SquareFootIcon />
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

      {pathname == "/panel/customer" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/customer");
          }}
        >
          <ListItemIcon>
            <SupportAgentIcon color="warning" />
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
            <SupportAgentIcon />
          </ListItemIcon>
          <ListItemText primary="Customer" />
        </ListItemButton>
      )}

      {pathname == "/panel/order" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/order");
          }}
        >
          <ListItemIcon>
            <SummarizeIcon color="warning" />
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
            <SummarizeIcon />
          </ListItemIcon>
          <ListItemText primary="Order" />
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

      {pathname == "/panel/operatingCharacteristics" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/operatingCharacteristics");
          }}
        >
          <ListItemIcon>
            <AgricultureIcon color="warning" />
          </ListItemIcon>
          <ListItemText primary="Characteristics" sx={{ color: "#ED6C02" }} />
        </ListItemButton>
      ) : (
        <ListItemButton
          onClick={() => {
            navigate("/panel/operatingCharacteristics");
          }}
        >
          <ListItemIcon>
            <AgricultureIcon />
          </ListItemIcon>
          <ListItemText primary="Characteristics" />
        </ListItemButton>
      )}

      {pathname == "/panel/specializedEquipment" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/specializedEquipment");
          }}
        >
          <ListItemIcon>
            <ConstructionIcon color="warning" />
          </ListItemIcon>
          <ListItemText primary="Equipment" sx={{ color: "#ED6C02" }} />
        </ListItemButton>
      ) : (
        <ListItemButton
          onClick={() => {
            navigate("/panel/specializedEquipment");
          }}
        >
          <ListItemIcon>
            <ConstructionIcon />
          </ListItemIcon>
          <ListItemText primary="Equipment" />
        </ListItemButton>
      )}

      {pathname == "/panel/techniqueCategory" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/techniqueCategory");
          }}
        >
          <ListItemIcon>
            <SettingsIcon color="warning" />
          </ListItemIcon>
          <ListItemText
            primary="Technique Category"
            sx={{ color: "#ED6C02" }}
          />
        </ListItemButton>
      ) : (
        <ListItemButton
          onClick={() => {
            navigate("/panel/techniqueCategory");
          }}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Technique Category" />
        </ListItemButton>
      )}

      {/* {pathname == "/panel/users" ? (
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
      )} */}

      {/* {pathname == "/panel/roles" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/roles");
          }}
        >
          <ListItemIcon>
            <BrandingWatermarkIcon color="warning" />
          </ListItemIcon>
          <ListItemText primary="Roles" sx={{ color: "#ED6C02" }} />
        </ListItemButton>
      ) : (
        <ListItemButton
          onClick={() => {
            navigate("/panel/roles");
          }}
        >
          <ListItemIcon>
            <BrandingWatermarkIcon />
          </ListItemIcon>
          <ListItemText primary="Roles" />
        </ListItemButton>
      )} */}
    </React.Fragment>
  );
};
