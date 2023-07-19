import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./layout/Layout.jsx";
import {
  Brands,
  Categories,
  Dashboard,
  Login,
  Products,
  SubCategories,
  Users,
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
      // <ProtectedRoute>
        <Suspense fallback={<Circle/>}>
          <Layout />
        </Suspense>
      // </ProtectedRoute>
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
        path: "categories",
        element: (
          <Suspense fallback={<Circle/>}>
            <Categories />
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
        path: "brands",
        element: (
          <Suspense fallback={<Circle/>}>
            <Brands />
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
