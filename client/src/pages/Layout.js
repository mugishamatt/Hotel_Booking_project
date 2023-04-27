// import React from 'react'
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import MainPage from "./MainPage";

const { Component, useContext } = require("react");

// export default function Layout() {
//   return (
//     <div>
//       <Navbar/>
//       <Outlet/>
//     </div>
//   )
// }
export default function Layout() {
  let loggedin;
  if(window.location.href == "http://localhost:3000/"){
    loggedin =false
  }else{
    loggedin = true
  }

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
