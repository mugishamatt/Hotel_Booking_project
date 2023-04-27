import React, { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Tabs } from "antd";
import  Users  from "../components/Users";
import AddRoom from "../components/AddRoom";
import AllBookings from "../components/AllBookings";
import { UserContext } from "../App";

export default function AdminPage() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  useEffect(() => {
    if (!user) {
      navigate("/home");
    } else if (user.user.role !== "admin") {
      navigate("/rooms/getAll");
    }
  }, []);
  console.log("Here is the global", user);
  const items = [
    {
      key: "1",
      label: `rooms`,
      children: <AddRoom />,
    },
    {
      key: "2",
      label: `bookings`,
      children: <AllBookings />,
    },
    {
      key: "3",
      label: `users`,
      children: <Users />,
    },
  ];
  console.log(items.children);
  return (
    <>
      <div>
        <NavLink to="/rooms/getall" style={{ paddingRight: "20px" }}>
          rooms pages
        </NavLink>
        <NavLink to="/admin/users" style={{ paddingRight: "20px" }}>
          Users
        </NavLink>
        <NavLink to="/admin/addroom" style={{ paddingRight: "20px" }}>
          Add rooms
        </NavLink>
        <NavLink to="/admin/bookings" style={{ paddingRight: "20px" }}>
          bookings
        </NavLink>
        <NavLink to="/admin/roomlist" style={{ paddingRight: "20px" }}>
          {" "}
          rooms list
        </NavLink>
        <NavLink to="/admin/profile" style={{ paddingRight: "20px" }}>
          {" "}
          user profile
        </NavLink>

        <Tabs>
          {items.map((item) => (
            <Tabs.TabPane key={item.key} tab={item.label}>
              {item.children}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
    </>
  );
}
