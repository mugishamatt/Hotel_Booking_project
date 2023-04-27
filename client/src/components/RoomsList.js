
import axios from 'axios';

import React, {useEffect, useState,}from 'react'
import { useNavigate,useLocation,useParams} from 'react-router-dom'
import AddRoom from './AddRoom';

export default function RoomsList() {
    const [dbData,setdbData]=useState([]);
    const [isEditBtn,setisEditBtn]=useState(false);
    const[update,setUpdate]=useState({})
    
    
    const {state} = useLocation(); 

    const {room} = useParams(); 
  const navigate = useNavigate()

    useEffect(() => {
        (async function fetchData() {
            const res = await axios.get("http://localhost:4000/rooms/getAll")
            if (res) {
                setdbData (res.data.room)
               
            } else {
                alert('not found')
            }
        })()

    }, [])

    function handleDelete(id){
         const arr=dbData.filter((std)=>std._id===id)
         console.log(arr)
         
        axios.delete(`http://localhost:4000/rooms/${id}`)
        .then(response => {
            console.log(response.data);
            setdbData((prev)=>prev.filter((std)=>std._id!==id))
          })
          .catch(error => {
            console.log(error);

          });
    }
    function handleEditBtn(room){
        // navigate('/admin' , {state:room})
        setisEditBtn(true)
        setUpdate(room)
        console.log("cliked herer")
       }

  return (
    <div>
        <AddRoom isEditBtn={isEditBtn} editBtn={handleEditBtn} setisEditBtn={setisEditBtn} update={update}/>
    <h2>Rooms list</h2>
    <div className="row justify-content-center">
  <div className="col-lg-6">
      <div className="main-box clearfix">
          <div className="table-responsive">
              <table className="table user-list">
                  <thead>
                      <tr>
                          <th><span>Name</span></th>
                          <th><span>Price perday</span></th>
                          <th><span>max per Room</span></th>
                          {/* <th><span>description</span></th> */}
                          <th><span>Phone Number</span></th>
                          <th><span>Category</span></th>
                          {/* <th><span>image1</span></th>
                          <th><span>image2</span></th>
                          <th><span>image2</span></th> */} 
                          
            <th><span>Action</span></th>
                          
                      </tr>
                  </thead>
                  <tbody>
{dbData && dbData.map((room)=>{
return <tr key={dbData._id}>
                          <td>{room.name} </td>
                          <td>{room.Price} </td>
                          <td>{room.maxOccupancy} </td>
                          {/* <td>{room.description} </td> */}
                          <td>{room.phoneNumber} </td>

                          <td>{room.category} </td>
                          {/* <td>{room.imagesUrl[0]} </td>
                          <td>{room.imagesUrl[1]} </td>
                          <td>{room.imagesUrl[2]} </td> 
                          */}

                          <td style={{width: "20%"}}>
                              
                              <a   className="table-link" onClick={()=> handleEditBtn(room)} >
                                  <span className="fa-stack">
                                      <i className="fa fa-square fa-stack-2x"></i>
                                      <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                  </span>
                              </a>
                              <a className="table-link danger" onClick={()=> handleDelete(room._id)}>
                                  <span className="fa-stack">
                                      <i  className="fa fa-square fa-stack-2x"></i>
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
