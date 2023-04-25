
import axios from "axios";
import React from 'react'
import  { useState, useEffect } from "react";
import{NavLink} from 'react-router-dom'

export default function AddRoom() {
  const [successfully,setSuccefully]=useState('')// 
  const [error, setError] = useState("");



    const [name, setname] = useState("");
    const [Price, setPrice] = useState();

    const [maxOccupancy, setmaxOccupancy] = useState();
    const [description, setdescription] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [category, setcategory] = useState("");
    const [image1, setimage1] = useState("");
    const [image2, setimage2] = useState("");
    const [image3, setimage3] = useState("");
    async function addRoom()
    {
        console.log("clicked")
        const roomobj = {
            name , 
            Price, maxOccupancy ,description ,phoneNumber ,category ,imagesUrl:[image1 ,image2 ,image3]
        }
        try {
            const result = await axios.post('http://localhost:4000/rooms/addroom' , roomobj)

            if(result){
              setSuccefully(" Room added succesfully")
            }
        } catch (error) {
          setError("failed adding room")
            
        }
    }
    return (
      <div className="row">
       
          <div className="col-md-5">
            <input
              type="text"
              className="form-control mt-1"
              placeholder="name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
  
            <input
              type="text"
              className="form-control mt-1"
              placeholder="rentperday"
              value={Price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
  
            <input
              type="text"
              className="form-control mt-1"
              placeholder="maxcount"
              value={maxOccupancy}
              onChange={(e) => {
                setmaxOccupancy(e.target.value);
              }}
            />
  
            <input
              type="text"
              className="form-control mt-1"
              placeholder="description"
              value={description}
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />
  
            <input
              type="text"
              className="form-control mt-1"
              placeholder="phonenumber"
              value={phoneNumber}
              onChange={(e) => {
                setphoneNumber(e.target.value);
              }}
            />
            
          </div>
  
          <div className="col-md-6">
          <input
              type="text"
              className="form-control mt-1"
              placeholder="type"
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
            />
          <input
              type="text"
              className="form-control mt-1"
              placeholder="Image url 1"
              value={image1}
              onChange={(e) => {
                setimage1(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Image url 2"
              value={image2}
              onChange={(e) => {
                setimage2(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Image url 3"
              value={image3}
              onChange={(e) => {
                setimage3(e.target.value);
              }}
            />
            <div className='mt-1 text-right'>
            <button className="btn btn-primary" onClick={addRoom}>ADD ROOM</button>
            </div>
            <div>
            {successfully&&<p className="text-primary">{successfully}</p>}
            {error&&<p className="text-danger">{error}</p>}
            </div>
            <NavLink to="/admin"style={{paddingRight:"20px"} }>go back</NavLink>
          </div>
       
      </div>
    );
  }

