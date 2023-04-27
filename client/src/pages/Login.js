import React, { useContext } from "react";
import "../css/Login.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

export default function Login() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  // const [user,setUser]=useState({});
  const [userInput, setUserInput] = useState({ email: "", password: "" });

  const [statusMessage, setStatusMessage] = useState("");

  function handleOnChange(e) {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  }

  const handleLoginBtn = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:4000/users/login",
        userInput
      );

      if (res.data.success) {
        if (res.data.user.role == "admin") {
          navigate("/admin");
        } else {
          navigate("/rooms/getAll");
        }
        setUser(res.data);
        // setStatusMessage("logged in successfully");
        localStorage.setItem("currentUser", JSON.stringify(res.data));
      } else {
        setStatusMessage(res.data.message);
      }
    } catch (error) {
      setStatusMessage("logging in failed");
    }
  };
  return (
    <div>
      <div className="container bootstrap snippets bootdey ">
        {/* <div className="header">
    <ul className="nav nav-pills pull-right">
      <li ><a href="http://getbootstrap.com/examples/jumbotron-narrow/#">Home</a></li>
      <li ><a href="http://getbootstrap.com/examples/jumbotron-narrow/#">Register</a></li>
      <li className="active"><a href="http://getbootstrap.com/examples/jumbotron-narrow/#">Sign in</a></li>
    </ul>
    <h3 className="text-muted prj-name">Project name</h3>
  </div> */}

        <div
          className="jumbotron"
          style={{ height: "auto", minHeight: "300px" }}
        >
          {/*   
    <div className="col-md-4">
       <img src="https://bootdey.com/img/Content/Manbrown2.png" className="img-responsive center-block img-user"/> 
    </div> */}
          <div className="col-md-6 form-content">
            <form
              className="form-horizontal"
              role="form"
              onSubmit={handleLoginBtn}
            >
              <div className="form-group text-center">
                <div className="col-sm-10 reg-icon">
                  <span className="fa fa-user fa-2x">Sign in</span>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="Username"
                    placeholder="Username"
                    name="email"
                    value={userInput.email}
                    onChange={handleOnChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword3"
                    placeholder="Password"
                    name="password"
                    value={userInput.password}
                    onChange={handleOnChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-info">
                    <span className="glyphicon glyphicon-share-alt"></span>
                    Sign in
                  </button>
                  <p>{statusMessage}</p>
                  <p>new user ?</p>
                  <Link to="/signup">click here to signup</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
