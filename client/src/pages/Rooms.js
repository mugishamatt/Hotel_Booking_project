import React, { useEffect, useContext } from "react";
import axios from "axios";
import "../Card.css";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import moment from "moment";

//antd
//import 'antd/dist/antd.css'
import { DatePicker, Space } from "antd";
import FilteredRooms from "../components/FilteredRooms";
import FilteredCategory from "../components/FilteredCategory";
import { UserContext } from "../App";
const { RangePicker } = DatePicker;

export function Rooms() {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  useEffect(() => {
    if (!user) {
      navigate("/home");
    }
  }, []);

  //loader data
  const roomsData = useLoaderData();

  const [show, setShow] = useState(false);
  const [roomdetails, setRoomDetails] = useState({});
  const [checkin, setCheckin] = useState();
  const [checkout, setCheckout] = useState();
  const [searchName, setSearchName] = useState("");
  const [duplicate, setDuplicate] = useState([]);
  const [category, setCategory] = useState("");
  // const[type , settype]=useState('all')
  //get alldata

  // console.log(roomsData)

  const navigate = useNavigate();
  if (navigate.state === "loading") {
    return <p>loading..</p>;
  }

  const roomDetails = (id) => {
    const room = roomsData.find((room) => room._id === id);

    setRoomDetails(room);
  };

  function handleBookRoom(room) {
    //  console.log(room._id)
    navigate(`/rooms/${room._id}`, { state: { room, checkin, checkout } });
  }
  //filter by date
  function filterByDate(dates) {
    //  console.log(moment(dates[0].$d).format('DD-MM-YYYY'))
    //  console.log(moment(dates[1].$d).format('DD-MM-YYYY'))
    setCheckin(moment(dates[0].$d).format("DD-MM-YYYY"));
    setCheckout(moment(dates[1].$d).format("DD-MM-YYYY"));
  }
  //filter by search
  function filterByName() {
    if (!searchName) {
      setDuplicate([]);
      return;
    }

    const filteredRooms = roomsData.filter((room) =>
      room.name.toLowerCase().includes(searchName.toLowerCase())
    );

    setDuplicate(filteredRooms);
  }
  function filterByCategory(e) {
    setCategory(e.target.value);

    if (e.target.value === "All") {
      setDuplicate(roomsData);
    } else {
      const filteredCategories = roomsData.filter(
        (room) => room.category === e.target.value
      );
      setDuplicate(filteredCategories);
    }
  }

  return (
    <div className="container">
      {/* antd */}

      {/* filter by ctagory */}

      <div className="d-flex w-100 mt-4">
        <div className="w-50 ">
          <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
        </div>

        <div className="col-md-5  justify-content-center">
          <input
            type="text"
            className="form-control i2"
            placeholder="Search Rooms"
            value={searchName}
            onKeyUp={filterByName}
            onChange={(e) => {
              setSearchName(e.target.value);
            }}
          />
        </div>
        <div className="col-md-4">
          <select
            className=" w-75 p-2"
            aria-label="Default select example"
            value={category}
            onChange={(e) => filterByCategory(e)}
          >
            <option selected value="All">
              Filter By category
            </option>
            <option value="">All</option>
            <option value="single">single</option>
            <option value="double">double</option>
          </select>
        </div>
      </div>

      <div className="row clearfix">
        {/* searched by key */}
        {duplicate.length > 0 ? (
          <FilteredRooms
            filteredRooms={duplicate}
            handleBookRoom={handleBookRoom}
            roomDetails={roomDetails}
          />
        ) : (
          roomsData.map((room) => {
            return (
              <>
                <div
                  key={room._id}
                  className="col-lg-4 col-md-4 col-sm-12 mb-4 mt-4"
                >
                  <div className="card product_item">
                    <div className="body">
                      <div className="cp_img">
                        <img
                          src={room.imagesUrl[0]}
                          alt="Product"
                          className="img-fluid"
                        />
                      </div>
                      <div key={room._id} className="product_details">
                        <h5>
                          <a href="ec-product-detail.html">{room.name}</a>
                        </h5>
                        <ul
                          key={room._id}
                          className="product_price list-unstyled"
                        >
                          <li className="old_price">{room.aminities}</li>
                          <li className="">
                            $MaxOcupancy: {room.maxOccupancy}
                          </li>
                          <li className="">Category: {room.category}</li>
                          <li className="new_price">Price:$ {room.Price}</li>
                        </ul>
                      </div>
                      <div className="hover d-flex justify-content-around m-4">
                        <a
                          href="javascript:void(0);"
                          className="btn btn-primary btn-sm waves-effect"
                        >
                          <Button
                            className="zmdi zmdi-plus"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => roomDetails(room._id)}
                          >
                            view Details
                          </Button>
                        </a>
                        {/* <Link to={`/rooms/${room._id}`}> */}
                        <Button
                          className="zmdi zmdi-plus "
                          type="button"
                          onClick={() => handleBookRoom(room)}
                        >
                          Book Room
                        </Button>
                        {/* </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        )}

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  {roomdetails.name}
                </h1>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="cp_img">
                {roomdetails.imagesUrl && (
                  <img
                    src={roomdetails.imagesUrl[0]}
                    alt="Product"
                    className="img-fluid"
                  />
                )}
              </div>

              <div className="modal-body">{roomdetails.description}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const dataLoader = async () => {
  const res = await axios.get("http://localhost:4000/rooms/getAll");
  // console.log(res.data.room)
  return res.data.room;
};
