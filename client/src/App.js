 import Layout from './pages/Layout';
 import MainPage from './pages/MainPage';
import './App.css';

import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"

import {dataLoader, Rooms} from './pages/Rooms';
import {usersLoader,Users } from './components/Users';
import Error from './pages/Error';
import SignUp from './components/SignUp';
import Login from './pages/Login';
import AdminPage from './pages/AdminPage';
 import Bookings from './pages/Bookings';
import AddRoom from './components/AddRoom';



function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(

  <Route path='/' element ={<Layout/>} exact>
  <Route path="/home" index element={<MainPage/>}/>
  <Route path="rooms/getAll" element={<Rooms/>} loader={dataLoader}>
 
  </Route>
  <Route path="rooms/:id" element={<Bookings/>}/>
  <Route path="signup" element={<SignUp/>}/>
  <Route path="login" element={<Login/>}/>
  <Route path='admin'element={<AdminPage/>}></Route>
  <Route path="admin/users" element={<Users/>} loader={usersLoader}/>
  
  <Route path="admin/addroom" element={<AddRoom/>}/>
  <Route path="*" element={<Error/>}/>
  </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}
export default App;
