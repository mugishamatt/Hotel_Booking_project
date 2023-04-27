

import React from 'react';
 import axios from 'axios';
// const axios = require('axios');
 import '../css/Signup.css'
 import { useState,useEffect,useReducer } from 'react';
 import{NavLink} from "react-router-dom"


 const initialState={name:"",email:"",password:"",role:""}

 const reducer= function(state,action){
  switch(action.type) {
    case "RESET":
      return action.value;
    default:
      return { ...state, [action.input]: action.value };
 }
}

export default function SignUp() {

  const [state,dispatch]=useReducer(reducer,initialState)
  const [successfully,setSuccefully]=useState('')// 
  const [error, setError] = useState("");

  // const {userInput,setUserInput}=useState({name:"",email:"",password:"",role:""})
   
  const handleOnchange=(e)=>{
    const action={
      input:e.target.name,
      value:e.target.value
    }
    dispatch(action)
  }
  //validation


    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
 
  const handleSignup = async (e) => {
    e.preventDefault();

  //   const { name, email, password, role } = state;
  //   // const isValidEmail = validateEmail(email);
  //   const isValidPassword = validatePassword();
   
  
  //   if (!name || !email || !password || !role) {
  //     setError("Please fill in all fields.");
  //     return;
  //   }
   
  // // if (!isValidEmail) {
  // //   setError("Please enter a valid email address.");
  // //   return;
  // // }

  // // if (!isValidPassword) {
  // //   setError("Please enter a valid password.");
  // //   return;
  // // }
  //   if(isValidPassword){

  //   }
  const { name, email, password, role } = state;
  const isValidEmail = validateEmail(email);
  const isValidPassword = password.length >= 3;

  if (!name || !email || !password || !role) {
    setError("Please fill in all fields.");
    return;
  }

  if (!isValidEmail) {
    setError("Please enter a valid email address.");
    return;
  }

  if (!isValidPassword) {
    setError("Please enter a valid password.");
    return;
  }

    try {
      const response = await axios.post('http://localhost:4000/users', state);
      console.log(response.data);
  
      dispatch({ type: "RESET", value: initialState });
      setSuccefully("Signed up successfully");
      e.target.reset(); // reset the form fields
      
    } catch (error) {
      console.error(error);
      setError("Signup failed. Please try again.");
    }
  };

  
  return (
    <div>
        <div className="container bootstrap snippets bootdey">
  {/* <div className="header">
    <ul className="nav nav-pills pull-right">
      <li ><a href="http://getbootstrap.com/examples/jumbotron-narrow/#">Home</a></li>
      <li className="active"><a href="http://getbootstrap.com/examples/jumbotron-narrow/#">Signup</a></li>
      <li><a href="http://getbootstrap.com/examples/jumbotron-narrow/#">About</a></li>
    </ul>
    <h3 className="text-muted prj-name">Project name</h3>
  </div> */}


  <div className="jumbotron text-center" style={{ minHeight: '400px', height: '400px' }}>


    <div className="col-md-10 col-md-offset-2">
        <form className="form-horizontal" role="form" onSubmit={handleSignup}>
            <div className="form-group text-center">
                <div className="col-sm-10 reg-icon">
                    <span className="fa fa-user fa-3x">Sign up</span>
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="name" placeholder="Name" name="name" onChange={handleOnchange}/>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-10">
                  <input type="email" className="form-control" id="inputEmail3" placeholder="Email" name="email"  onChange={handleOnchange}/>
                </div>
              </div>
            
              <div className="form-group">
                <div className="col-sm-10">
                  <input type="password" className="form-control" id="inputPassword3" placeholder="Password" name="password"  onChange={handleOnchange}/>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="Username" placeholder="role" name="role"  onChange={handleOnchange}/>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-info" >
                    <span className="glyphicon glyphicon-share-alt"></span>
                    Signup
                  </button>
                  {successfully&&<p className="text-primary">{successfully}</p>}
                 {error&&<p className="text-danger">{error}</p>}
                 < div className='login-link'>
                  {/* <NavLink></NavLink> */}
                 <NavLink to="/login"> Click here Login </NavLink>
                 </div>
                </div>
              </div>
        </form>
    </div>
  </div>
</div>                                        
      
    </div>
  )
}
