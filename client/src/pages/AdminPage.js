


import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AdminPage() {
  return (
    <>
    <div >
        <NavLink to="/rooms/getall" style={{paddingRight:"20px"}}>rooms pages</NavLink>
        <NavLink to="/admin/users" style={{paddingRight:"20px"}}>Users</NavLink>
        <NavLink to="/admin/addroom"style={{paddingRight:"20px"} }>Add rooms</NavLink>
        <NavLink to="#">bookings</NavLink>




      
    </div>
 


    </>
  )
}
