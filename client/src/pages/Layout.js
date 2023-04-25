

// import React from 'react'
import Navbar from '../components/Navbar'
import {Outlet} from 'react-router-dom'

const { Component } = require("react");

// export default function Layout() {
//   return (
//     <div>
//       <Navbar/>
//       <Outlet/>
//     </div>
//   )
// }
 class Layout extends Component{
  render(){
    return(
       <div>
      <Navbar/>
      <Outlet/>
    </div>
)
  }
   
 
 }
 export default Layout
