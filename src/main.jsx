import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Bangla from "./pages/Bangla";
import English from "./pages/English";
import Bangladesh from "./pages/Bangladesh";
import International from "./pages/International";
import Vugol from "./pages/Vugol";
import Science from "./pages/Science";
import Computer from "./pages/Computer";
import Ethics from "./pages/Ethics";
import MentalAbility from "./pages/MentalAbility";
import AnalicitalAbility from "./pages/AnalicitalAbility";
import MainLayout from "./layout/MainLayout";
import Root from "./layoutComponent/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>
             
    ,
    children: [
      {
        path: '',
        element :  <MainLayout></MainLayout>
      },

      {
        path: '/bangla',
        element: 
              <div className="lg: max-w-screen-xl lg:mx-auto">
                  <Bangla></Bangla> 
              </div>
      },
      {
        path: '/english',
        element: 
        <div className="lg: max-w-screen-xl lg:mx-auto">
                  <English></English> 
              </div>
      },
      {
        path: '/bangladesh',
        element: 
        <div className="lg: max-w-screen-xl lg:mx-auto">
                  <Bangladesh></Bangladesh> 
              </div>
      },
      {
        path: '/international',
        element: 
        <div className="lg: max-w-screen-xl lg:mx-auto">
                 <International></International> 
              </div>
      },
      {
        path: '/vugol',
        element: 
        <div className="lg: max-w-screen-xl lg:mx-auto">
                 <Vugol></Vugol>
              </div>
      }
      ,
      {
        path: '/science',
        element: 
        <div className="lg: max-w-screen-xl lg:mx-auto">
                 <Science></Science>
              </div>
      },
      {
        path: '/computer',
        element: 
        <div className="lg: max-w-screen-xl lg:mx-auto">
                 <Computer></Computer>
              </div>
      },
      {
        path: '/ethics',
        element: 
        <div className="lg: max-w-screen-xl lg:mx-auto">
                 <Ethics></Ethics>
              </div>
      },
      {
        path: '/mentalAbility',
        element: 
        <div className="lg: max-w-screen-xl lg:mx-auto">
                 <MentalAbility></MentalAbility>
              </div>
      },
      {
        path: '/analiticalAbility',
        element: 
        <div className="lg: max-w-screen-xl lg:mx-auto">
                <AnalicitalAbility></AnalicitalAbility>
              </div>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);