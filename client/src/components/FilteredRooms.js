import React from 'react';
import { Modal,Button } from 'react-bootstrap';
import { Link, useLoaderData,useNavigate } from 'react-router-dom'

export default function FilteredRooms({ filteredRooms,handleBookRoom,roomDetails }) {
  return (
    <div className='d-flex gap-3'>
      {filteredRooms.map((room) => {
        return (
          <div key={room._id} className="col-lg-4 col-md-4 col-sm-12 mb-4 mt-4">
            <div className="card product_item">
              <div className="body">
                <div className="cp_img">
                  <img src={room.imagesUrl[0]} alt="Product" className="img-fluid" />
                </div>
                <div key={room._id} className="product_details">
                  <h5>
                    <a href="ec-product-detail.html">{room.name}</a>
                  </h5>
                  <ul key={room._id} className="product_price list-unstyled">
                    <li className="old_price">{room.aminities}</li>
                    <li className="">$MaxOcupancy: {room.maxOccupancy}</li>
                    <li className="">Category: {room.category}</li>
                    <li className="new_price">Price:$ {room.Price}</li>
                  </ul>
                </div>
                <div className="hover d-flex m-3 justify-content-around">
                  <a href="javascript:void(0);" className="btn btn-primary btn-sm waves-effect">
                    <Button className="zmdi zmdi-plus" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => roomDetails(room._id)}>view Details</Button>
                  </a>{" "}
                  <Button className="zmdi zmdi-plus " type="button" onClick={() => handleBookRoom(room)}>Book Room</Button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

