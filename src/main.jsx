import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./layout/Layout.jsx";
import {
  AboutProduct,
  AdditionalInformation,
  Capacities,
  Chassis,
  Customer,
  Dashboard,
  Login,
  Products,
  SubCategories,
  Users,
  Dimensions,
  Engine,
  OperatingCharacteristics,
  Order,
  SpecializedEquipment,
  TechniqueCategory,
  Roles
} from "./router/router.jsx";
import AuthCheck from "./utils/AuthCheck";
import ProtectedRoute from "./utils/ProtectedRoute";
import Circle from "./components/Loaders/Circle";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <AuthCheck>
          <Suspense fallback={<Circle/>}>
            <Login />
          </Suspense>
        </AuthCheck>
    ),
    errorElement: (props) => {
      return <div>error</div>;
    },
  },
  {
    path: "/panel",
    element: (
      <ProtectedRoute>
        <Suspense fallback={<Circle/>}>
          <Layout />
        </Suspense>
       </ProtectedRoute>
    ),
    errorElement: (props) => {
      console.log(props);
      return <div>error</div>;
    },
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Circle/>}>
            <Dashboard />
          </Suspense>
        ),
        errorElement: (props) => {
          console.log(props);
          return <div>error</div>;
        },
      },
      {
        path: "users",
        element: (
          <Suspense fallback={<Circle/>}>
            <Users />
          </Suspense>
        ),
        errorElement: (props) => {
          console.log(props);
          return <div>error</div>;
        },
      },
      {
        path: "products",
        element: (
          <Suspense fallback={<Circle/>}>
            <Products />
          </Suspense>
        ),
        errorElement: (props) => {
          console.log(props);
          return <div>error</div>;
        },
      },
      {
        path: "additionalInformation",
        element: (
          <Suspense fallback={<Circle/>}>
            <AdditionalInformation />
          </Suspense>
        ),
        errorElement: (props) => {
          console.log(props);
          return <div>error</div>;
        },
      },
      {
        path: "subcategories",
        element: (
          <Suspense fallback={<Circle/>}>
            <SubCategories />
          </Suspense>
        ),
        errorElement: (props) => {
          console.log(props);
          return <div>error</div>;
        },
      },
      {
        path: "aboutProduct",
        element: (
          <Suspense fallback={<Circle/>}>
            <AboutProduct />
          </Suspense>
        ),
        errorElement: (props) => {
          console.log(props);
          return <div>error</div>;
        },
      },
      {
        path: "capacities",
        element: (
          <Suspense fallback={<Circle/>}>
            <Capacities />
          </Suspense>
        ),
        errorElement: (props) => {
          console.log(props);
          return <div>error</div>;
        },
      },
      {
        path: "chassis",
        element: (
          <Suspense fallback={<Circle/>}>
            <Chassis />
          </Suspense>
        ),
        errorElement: (props) => {
          console.log(props);
          return <div>error</div>;
        },
      },
      {
        path: "customer",
        element: (
          <Suspense fallback={<Circle/>}>
            <Customer />
          </Suspense>
        ),
        errorElement: (props) => {
          console.log(props);
          return <div>error</div>;
        },
      },
      {
        path: "dimensions",
        element: (
          <Suspense fallback={<Circle/>}>
            <Dimensions />
          </Suspense>
        ),
        errorElement: (props) => {
          console.log(props);
          return <div>error</div>;
        },
      },
      {
        path: "engine",
        element: (
          <Suspense fallback={<Circle/>}>
            <Engine />
          </Suspense>
        ),
        errorElement: (props) => {
          console.log(props);
          return <div>error</div>;
        },
      },
      {
        path: "operatingCharacteristics",
        element: (
          <Suspense fallback={<Circle/>}>
            <OperatingCharacteristics />
          </Suspense>
        ),
        errorElement: (props) => {
          console.log(props);
          return <div>error</div>;
        },
      },
      {
        path: "order",
        element: (
          <Suspense fallback={<Circle/>}>
            <Order />
          </Suspense>
        ),
        errorElement: (props) => {
          console.log(props);
          return <div>error</div>;
        },
      },
      {
        path: "specializedEquipment",
        element: (
          <Suspense fallback={<Circle/>}>
            <SpecializedEquipment />
          </Suspense>
        ),
        errorElement: (props) => {
          console.log(props);
          return <div>error</div>;
        },
      },
      {
        path: "techniqueCategory",
        element: (
          <Suspense fallback={<Circle/>}>
            <TechniqueCategory />
          </Suspense>
        ),
        errorElement: (props) => {
          console.log(props);
          return <div>error</div>;
        },
      },
      {
        path: "roles",
        element: (
          <Suspense fallback={<Circle/>}>
            <Roles />
          </Suspense>
        ),
        errorElement: (props) => {
          console.log(props);
          return <div>error</div>;
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

  <RouterProvider router={router} />
);
