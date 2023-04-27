import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";
import "./App.css";

import {
  createBrowserRouter,
  BrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";

import { dataLoader, Rooms } from "./pages/Rooms";
// import { usersLoader, Users } from "./components/Users";
import Users, { usersLoader } from './components/Users';
import { AllBookings, bookingsLoader } from "./components/AllBookings";
import Error from "./pages/Error";
import SignUp from "./components/SignUp";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";
import Bookings from "./pages/Bookings";
import AddRoom from "./components/AddRoom";
import RoomsList from "./components/RoomsList";

// import { UserContext } from './components/usersContext';
import React from "react";
export const UserContext = React.createContext(null);

function App() {
  // const dataLoaders=[usersLoader,bookingsLoader]
  const [user, setUser] = React.useState(null);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} exact>
        <React.Fragment>
          <Route path="/home" index element={<MainPage />} />
          <Route path="rooms/getAll" element={<Rooms />} loader={dataLoader} />

          <Route path="rooms/:id" element={<Bookings />} />
          <Route path="signup" element={<SignUp />} />

          <Route path="admin" element={<AdminPage />} loader={usersLoader} />
          {/* <Route path='admin'element={<AdminPage/>} loader={bookingsLoader}></Route> */}
          <Route path="admin/users" element={<Users />} loader={usersLoader} />
          <Route
            path="admin/bookings"
            element={<AllBookings />}
            loader={bookingsLoader}
          />
          <Route path="admin/roomlist" element={<RoomsList />} />

          <Route path="admin/addroom" element={<AddRoom />} />

          <Route path="login" element={<Login />} />

          <Route path="*" element={<Error />} />
        </React.Fragment>
      </Route>
    )
  );
  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  );
}
export default App;
