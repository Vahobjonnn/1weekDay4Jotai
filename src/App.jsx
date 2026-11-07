import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About"

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
    ]
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
};

export default App;
