import {
  createBrowserRouter,
 
} from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Page/Home/Home";
import About from "../Page/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
   Component:RootLayout,
   children:[
    {
       path:'/',
       Component:Home
    },
    {
        path:"/about",
       Component:About
    },
   ]
  },
]);