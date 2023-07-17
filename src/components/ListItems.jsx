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

export const MainListItems = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <React.Fragment>
      {pathname == "/panel/categories" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/categories");
          }}
        >
          <ListItemIcon>
            <CategoryIcon color="warning" />
          </ListItemIcon>
          <ListItemText primary="Categories" sx={{color:"#ED6C02"}} />
        </ListItemButton>
      ) : (
        <ListItemButton
          onClick={() => {
            navigate("/panel/categories");
          }}
        >
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Categories" />
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
          <ListItemText primary="Users" sx={{color:"#ED6C02"}} />
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

      {pathname == "/panel/subcategories" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/subcategories");
          }}
        >
          <ListItemIcon>
            <BarChartIcon color="warning" />
          </ListItemIcon>
          <ListItemText primary="Sub Categories" sx={{color:"#ED6C02"}} />
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

      {pathname == "/panel/brands" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/brands");
          }}
        >
          <ListItemIcon>
            <BrandingWatermarkIcon color="warning" />
          </ListItemIcon>
          <ListItemText primary="Brands" sx={{color:"#ED6C02"}} />
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

      {pathname == "/panel/products" ? (
        <ListItemButton
          onClick={() => {
            navigate("/panel/products");
          }}
        >
          <ListItemIcon>
            <LocalGroceryStoreIcon color="warning"/>
          </ListItemIcon>
          <ListItemText primary="Products" sx={{color:"#ED6C02"}} />
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
    </React.Fragment>
  );
};
