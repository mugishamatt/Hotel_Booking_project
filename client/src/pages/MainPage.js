import React, { useContext, useEffect } from "react";
import "../css/footer.css";
import { UserContext } from "../App";

export default function MainPage() {
  const { user, setUser } = useContext(UserContext);
  // let loggedInUser = localStorage.getItem("currentUser");
  // useEffect(() => {
  //   if (loggedInUser) {
  //     const userObject = JSON.parse(loggedInUser);
  //     setUser(userObject);
  //     console.log(user);
  //   }
  
  // }, []);
  return (
    <div>
      <p>Welcome to my hotel</p>
      <div className="image-home" style={{ display: "flex" }}>
        <div className="images-left">
          <img
            src="https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            style={{ width: "300px" }}
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1678286770016-6306ad61df9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            style={{ width: "300px" }}
          />
        </div>
        <div className="images-mid">
          <img
            src="https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            style={{ width: "800px" }}
          />
        </div>
        <div className="images-right">
          <img
            src="https://plus.unsplash.com/premium_photo-1678286770016-6306ad61df9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            style={{ width: "300px" }}
          />
          <img
            src="https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            style={{ width: "300px" }}
          />
        </div>
      </div>

      <section id="footer">
        <div className="container">
          <div className="row text-center text-xs-center text-sm-left text-md-left">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>Quick links</h5>
              <ul className="list-unstyled quick-links">
                <li>
                  <a href="javascript:void();">
                    <i className="fa fa-angle-double-right"></i>Home
                  </a>
                </li>
                <li>
                  <a href="javascript:void();">
                    <i className="fa fa-angle-double-right"></i>About
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>Quick links</h5>
              <ul className="list-unstyled quick-links">
                <li>
                  <a href="javascript:void();">
                    <i className="fa fa-angle-double-right"></i>Home
                  </a>
                </li>
                <li>
                  <a href="javascript:void();">
                    <i className="fa fa-angle-double-right"></i>About
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>Quick links</h5>
              <ul className="list-unstyled quick-links">
                <li>
                  <a href="javascript:void();">
                    <i className="fa fa-angle-double-right"></i>Home
                  </a>
                </li>
                <li>
                  <a href="javascript:void();">
                    <i className="fa fa-angle-double-right"></i>About
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
              <p className="h6">
                &copy; All right Reversed.
                <a
                  className="text-green ml-2"
                  href="https://www.sunlimetech.com"
                  target="_blank"
                >
                  Mugisha
                </a>
              </p>
            </div>
            {/* <hr/> */}
          </div>
        </div>
      </section>
    </div>
  );
}
