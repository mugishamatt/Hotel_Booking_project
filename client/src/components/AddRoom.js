import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { NavLink, useParams, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../App";
// import RoomsList from "./RoomsList";
axios.defaults.baseURL = "http://localhost:4000";
export default function AddRoom(editBtn, update, isEditBtn, setisEditBtn) {
  //  const[input,setInput]=useState()
  const { user, setUser } = useContext(UserContext);
  const [formValues, setFormValues] = useState({
    name: "",
    Price: "",
    maxOccupancy: "",
    description: "",
    phoneNumber: "",
    category: "",
    image1: "",
    image2: "",
    image3: "",
  });
  const [successfully, setSuccessfully] = useState("");
  const [error, setError] = useState("");
  const [dbData, setdbData] = useState([]);
  const { state } = useLocation();
  const { room } = useParams();
  const [imgs, setImgs] = useState({ 0: "", 1: "", 2: "" });
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  let config = {
    headers: {
      Authorization: "Bearer " + user?.token,
    },
  };

  useEffect(() => {
    if (update)
      // editBtn(input)
      setFormValues(update);
  }, [update]);

  async function fetchData() {
    const res = await axios.get("/rooms/getAll");
    if (res) {
      setdbData(res.data.room);
    } else {
      alert("not found");
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  function handleEditBtn(room) {
    setIsEdit(true);
    setFormValues(room);
    for (let i = 0; i < room.imagesUrl.length; i++) {
      setImgs((prev) => ({ ...prev, [i]: room.imagesUrl[i] }));
    }
  }

  function handleDelete(id) {
    const arr = dbData.filter((std) => std._id === id);

    axios
      .delete(`/rooms/${id}`)
      .then((response) => {
        console.log(response.data);
        setdbData((prev) => prev.filter((std) => std._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function handleAddRoomBtn() {
    const roomobj = {
      ...formValues,
      imagesUrl: [formValues.image1, formValues.image2, formValues.image3],
    };
    try {
      const result = await axios.post("/rooms/addroom", roomobj);

      if (result) {
        setSuccessfully(" Room added successfully");
        setFormValues({
          name: "",
          Price: "",
          maxOccupancy: "",
          description: "",
          phoneNumber: "",
          category: "",
          image1: "",
          image2: "",
          image3: "",
        });
        fetchData();
      }
    } catch (error) {
      setError("failed adding room");
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  const handleEditRoomBtn = () => {
    axios
      .put(`/rooms/${formValues._id}`, formValues)
      .then((res) => {
        setSuccessfully(res.message);
        setIsEdit(false);
        setFormValues({
          name: "",
          Price: "",
          maxOccupancy: "",
          description: "",
          phoneNumber: "",
          category: "",
          image1: "",
          image2: "",
          image3: "",
        });
        setImgs({ 0: "", 1: "", 2: "" });
        fetchData();
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="row">
      <div className="col-md-5">
        <input
          type="text"
          className="form-control mt-1"
          placeholder="name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />

        <input
          type="text"
          className="form-control mt-1"
          placeholder="rentperday"
          name="Price"
          value={formValues.Price}
          onChange={handleInputChange}
        />

        <input
          type="text"
          className="form-control mt-1"
          placeholder="maxcount"
          name="maxOccupancy"
          value={formValues.maxOccupancy}
          onChange={handleInputChange}
        />

        <input
          type="text"
          className="form-control mt-1"
          placeholder="description"
          name="description"
          value={formValues.description}
          onChange={handleInputChange}
        />

        <input
          type="text"
          className="form-control mt-1"
          placeholder="phonenumber"
          name="phoneNumber"
          value={formValues.phoneNumber}
          onChange={handleInputChange}
        />
      </div>

      <div className="col-md-6">
        <input
          type="text"
          className="form-control mt-1"
          placeholder="type"
          name="category"
          value={formValues.category}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="form-control mt-1"
          placeholder="Image url 1"
          name="image1"
          value={formValues.image1 || imgs[0]}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="form-control mt-1"
          placeholder="Image url 2"
          name="image2"
          value={formValues.image2 || imgs[1]}
          onChange={handleInputChange}
        />

        <input
          type="text"
          className="form-control mt-1"
          placeholder="Image url 3"
          name="image3"
          value={formValues.image3 || imgs[2]}
          onChange={handleInputChange}
        />

        <div className="mt-1 text-right">
          {isEdit ? (
            <button className="btn btn-primary" onClick={handleEditRoomBtn}>
              Edit Room
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleAddRoomBtn}>
              Add Room
            </button>
          )}
        </div>
        <div>
          {successfully && <p className="text-primary">{successfully}</p>}
          {error && <p className="text-danger">{error}</p>}
        </div>
        <NavLink to="/admin" style={{ paddingRight: "20px" }}>
          go back
        </NavLink>
      </div>
      <div className="roomList">{/* <RoomsList/> */}</div>

      <table className="table caption-top m-4 w-100">
        <caption>List of Rooms</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price perday</th>
            <th scope="col">max per Room</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {dbData &&
            dbData.map((room, index) => {
              return (
                <tr key={index}>
                  <th>{room.name}</th>
                  <td>{room.Price}</td>
                  <td>{room.maxOccupancy}</td>
                  <td>{room.phoneNumber}</td>
                  <td>{room.category} </td>

                  <td>
                    <a
                      className="table-link"
                      onClick={() => handleEditBtn(room)}
                    >
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x"></i>
                        <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                    <a
                      className="table-link danger"
                      onClick={() => handleDelete(room._id)}
                    >
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x"></i>
                        <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
