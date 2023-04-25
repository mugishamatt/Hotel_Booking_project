

import { useState,useEffect } from 'react'
import axios from 'axios'

import React from 'react'

import {useParams, useLocation} from 'react-router-dom'
import moment from 'moment';
// import { useNavigate} from 'react-router-dom'


export default function Bookings() {

  const[loading, setloading]=useState(true);
  const[error, seterror]=useState(false)
//   const[success, setsuccess]=useState(false)   
  const[roomData , setroomData]=useState()

  const {state} = useLocation(); 
  const{room,checkin,checkout}=state

  const {id} = useParams(); 
  // days from-to
  const checkInDate = moment(checkin, 'DD-MM-YYYY');
  const checkOutDate = moment(checkout, 'DD-MM-YYYY');
  const totalDays = checkOutDate.diff(checkInDate, 'days')+1 || 0;
 //total amout
const totalAmount=(room.Price*totalDays)

// OnClick

async function bookRoom (){

    const roomDetails={
        room,
        checkin:checkInDate,
        checkout:checkOutDate,
        totalAmount,
        totalDays,
        // userid:userid


    }
    try {
        const res= axios.post('http://localhost:4000/bookings/bookroom',roomDetails)
        
    } catch (error) {
        
    }


}


 useEffect(() => {
        
  try {
      setloading(true);
      (async function fetchData(){
        const data = await axios.get(`http://localhost:4000/rooms/${id}`)
        // console.log(`from`,data.data);
      setroomData(data);
      setloading(false);
      }
        )()
      // settotalAmount(data.rentperday * totalDays)
    } catch (error) {
      console.log(error);
      setloading(false);
    }
    
}, [])
  return (
    <div className='m-5'>
            
    {loading?(<h1>isLoading...</h1>):error?(<h1>error..</h1>) : (<h2>booking details</h2>)}
    
        <div className="row p-3 mb-5 bs" data-aos='flip-right' duration='2000'>
    
              <div className="col-md-6 my-auto">
                
                 <div>
                 <h1> {room.name}</h1>
                   <img src={room.imagesUrl[0]} style={{height:'400px'}} />
                 
                 </div>
    
              </div>
              <div className="col-md-6 text-right">
                   <div>
                   <h1><b>Booking Details</b></h1>
                   <hr />
    
                   <p><b>Name</b> : {room.name}</p>
                   <p><b>checkin </b> : {checkin}</p>
                   <p><b>Check out</b> : {checkout}</p>
                   <p><b>Max Count </b>:{room.maxOccupancy} </p>
                   </div>
                   
                   <div className='mt-5'>
                   <h1><b>Amount</b></h1>
                   <hr />
        
                <p>Total Days : <b>{totalDays}</b></p>
                <p>Price Per Day: <b>{`$ ${room.Price}`}</b></p>
                <h1><b>Total Amount : {`$ ${totalAmount}`}</b></h1>
 
                   </div>
                   <button className='btn btn-primary' onClick={bookRoom}>Pay Now</button>
                  
    
                   
              </div>
    
        </div>
    
   
    </div>
  )
}
