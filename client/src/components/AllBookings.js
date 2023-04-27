import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { useLoaderData,useNavigate } from 'react-router-dom'

export function AllBookings({bookingsLoader}) {
const [bookings, setBookings] = useState([])
    const bookingsData=useLoaderData()
    // console.log(bookingsData[0].current)
    useEffect(()=>{
        bookingsFun()
    },[])
    const navigate=useNavigate()
    if(navigate.state==='loading'){
        return <p>loading..</p>
    }

    const bookingsFun= async()=>{

        const res=await axios.get('http://localhost:4000/bookings/getallbookings')
        setBookings(res.data) ;
    }

   
  return (
    <div>
        
    <h2>booking list</h2>
    <div className="row justify-content-center">
  <div className="col-lg-10">
      <div className="main-box clearfix">
          <div className="table-responsive">
              <table className="table user-list">
                  <thead>
                      <tr>
                          <th><span>bookig id</span></th>
                          <th><span>Customer</span></th>
                          <th><span>checkin</span></th>
                          <th><span>checkout</span></th>
                          <th><span>status</span></th>
                          
            <th><span>Action</span></th>
                          
                      </tr>
                  </thead>
                  <tbody>
{bookings && bookings.map((booking)=>{
return <tr key={booking._id}>
                          <td>
                              {booking._id}
                          </td>
                          <td>
                              {booking.userid}
                          </td>
                          <td>
                              {booking.checkin}
                          </td>
                          
                          <td>
                              {booking.checkout}
                          </td>
                          <td>
                              {booking.status}
                          </td>

                          <td style={{width: "20%"}}>
                              
                              <a href="#"  className="table-link">
                                  <span className="fa-stack">
                                      <i className="fa fa-square fa-stack-2x"></i>
                                      <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                  </span>
                              </a>
                              <a href="#" className="table-link danger">
                                  <span className="fa-stack">
                                      <i className="fa fa-square fa-stack-2x"></i>
                                      <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                  </span>
                              </a>
                          </td>
                      </tr>
})}
                                      
                  </tbody>
              </table>
          </div>
      
      </div>
  </div>
</div>
    
  </div>
  )
}
export const bookingsLoader= async()=>{

    const res=await axios.get('http://localhost:4000/bookings/getallbookings')
    return res.data
}
export default AllBookings
