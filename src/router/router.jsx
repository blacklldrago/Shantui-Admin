import { lazy } from "react";

export const Users = lazy(() => import("../pages/Users/Users.jsx"));
export const AboutProduct = lazy(() => import("../pages/AboutProduct/AboutProduct.jsx"));
export const Products = lazy(() => import("../pages/Products/Products"));
export const AdditionalInformation = lazy(() => import("../pages/AdditionalInformation/AdditionalInformation.jsx"));
export const Capacities = lazy(() => import("../pages/Capacities/Capacities.jsx"));
export const Chassis = lazy(() => import("../pages/Chassis/Chassis.jsx"));
export const Customer = lazy(() => import("../pages/Customer/Customer.jsx"));
export const Dimensions = lazy(() => import("../pages/Dimensions/Dimensions.jsx"));
export const Engine = lazy(() => import("../pages/Engine/Engine.jsx"));
export const OperatingCharacteristics = lazy(() => import("../pages/OperatingCharacteristics/OperatingCharacteristics.jsx"));
export const Order = lazy(() => import("../pages/Order/Order.jsx"));
export const SpecializedEquipment = lazy(() => import("../pages/SpecializedEquipment/SpecializedEquipment.jsx"));
export const TechniqueCategory = lazy(() => import("../pages/TechniqueCategory/TechniqueCategory.jsx"));
export const SubCategories = lazy(() =>
  import("../pages/SubCategories/SubCategories")
);
export const Login = lazy(() => import("../pages/Login/Login"));
export const Dashboard = lazy(() => import("../components/Dashboard"));
