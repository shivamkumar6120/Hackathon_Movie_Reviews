import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { changePassword } from "../services/user";

export const ChangePass = () => {
  const[user,setUser] = useState({
    currPassword:"",
    password:"",
    confirmPassword:"",
  })
  function passwordHandler(e) {
    setUser((prevUser) => ({ ...prevUser, password: e.target.value }));
  }
  function confirmPasswordHandler(e) {
    setUser((prevUser) => ({ ...prevUser, confirmPassword: e.target.value }));
  }
  function currPasswordHandler(e){
    setUser((prevUser)=>({...prevUser, currPassword: e.target.value}))
  }

  async function onSubmit(e){
    if(user.currPassword=""){
        toast.warn("Enter the curr Password")
    }
    else if(user.password=""){
        toast.warn("Enter the Password")
    }
    else if(user.confirmPassword=""){
        toast.warn("Enter the confirm Password")
    }
    else{
        const token = localStorage.getItem('token')
        const id = token.id;
        const response = await changePassword(user,id)
    }
  }
  return (
    <div className="container-fluid w-75 mx-auto mt-3">
      <h3>Change Password</h3>
      <div>
        <label htmlFor="inputCurrPassword" className="form-label">
          Current Password
        </label>
        <input
          type="password"
          className="form-control"
          id="inputCurrPassword"
          onChange={currPasswordHandler}
          required
        />
      </div>
      <div>
        <label htmlFor="inputPassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          onChange={passwordHandler}
          required
        />
      </div>
      <div>
        <label htmlFor="inputConfirmPassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="inputConfirmPassword"
          onChange={confirmPasswordHandler}
          required
        />
        <div>
          <button className="btn btn-primary mt-3" onClick={onSubmit}>
            Change password
          </button>
        </div>
      </div>
    </div>
  );
};
