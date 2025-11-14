import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../services/user";
export const SignUp = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    Dob: "",
  });

  function emailHandler(e) {
    setUser((prevUser) => ({ ...prevUser, email: e.target.value }));
  }
  function passwordHandler(e) {
    setUser((prevUser) => ({ ...prevUser, password: e.target.value }));
  }
  function phoneNumberHandler(e) {
    setUser((prevUser) => ({ ...prevUser, phoneNumber: e.target.value }));
  }
  function confirmPasswordHandler(e) {
    setUser((prevUser) => ({ ...prevUser, confirmPassword: e.target.value }));
  }
  function firstNameHandler(e) {
    setUser((prevUser) => ({ ...prevUser, firstName: e.target.value }));
  }
  function lastNameHandler(e) {
    setUser((prevUser) => ({ ...prevUser, lastName: e.target.value }));
  }

  function dobHandler(e) {
    setUser((prevUser) => ({ ...prevUser, Dob: e.target.value }));
  }
  const navigate = useNavigate();
  async function onRegister(e) {
    e.preventDefault();
    if (user.firstName == "") toast.warning("Please enter the first name");
    else if (user.lastName == "") toast.warning("Please enter last name");
    else if (user.email == "") toast.warning("Please enter the email");
    else if (user.phoneNumber == "") toast.warning("Please enter the mobile");
    else if (user.password == "") toast.warning("Please enter the password");
    else if (user.Dob == "") toast.warning("Please enter DOB");
    else if (user.confirmPassword == "")
      toast.warning("Please enter the confirm password");
    else if (user.confirmPassword != user.password)
      toast.error("Password doesn't match");
    else {
      const data = await register(user);
      try {
        if (data.status == "success") navigate("/");
        else toast.error(data.status);
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <div>
      <h1 className="page-header">Sign Up</h1>
      <form className="row g-2 mx-auto w-50">
        <div className="col-md-6">
          <label htmlFor="inputFirstName" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputFirstName"
            onChange={firstNameHandler}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputLastName" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputLastName"
            onChange={lastNameHandler}
            required
          />
        </div>
        <div>
          <label htmlFor="inputEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            onChange={emailHandler}
            required
          />
        </div>
        <div>
          <label htmlFor="inputMobile" className="form-label">
            Mobile Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="inputMobile"
            onChange={phoneNumberHandler}
            required
          />
        </div>
        <div>
          <label htmlFor="inputDob" className="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            className="form-control"
            id="inputDob"
            onChange={dobHandler}
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
        </div>
        <div>
          <button className="btn btn-success w-100" onClick={onRegister}>
            Sign Up
          </button>
        </div>
        <div className="mb-3">
          Already have an account? <Link to="/login">Sign-In</Link>
        </div>
      </form>
    </div>
  );
};
