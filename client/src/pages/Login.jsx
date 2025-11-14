
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/user";
import { toast } from "react-toastify";
export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  function emailHandler(e) {
    setUser((prevUser) => ({ ...prevUser, email: e.target.value }));
  }
  function passwordHandler(e) {
    setUser((prevUser) => ({ ...prevUser, password: e.target.value }));
  }
  async function onLogin() {
    if (user.email == "") {
        toast.warning('please enter email')
    } 
    else if (user.password == "") {
        toast.warning('please enter password')
    } 
    else {
          const response = await login(user)
          if (response['status'] == 'success') {
            toast.success('login successful')
    
            // get the token from response and cache it in local storage
            localStorage.setItem('token', response['data']['token'])

            // set the logged in user information
            navigate('/home')
          } else {
            toast.error(response['error'])
          }
        }
  }
  return (
    <div>
      <h1 className="page-header mb-3">Sign In</h1>
      <div className="form-floating mb-3 w-50 mx-auto">
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          placeholder="name@example.com"
          onChange={emailHandler}
        />
        <label htmlFor="inputEmail">Email address</label>
      </div>
      <div className="form-floating  w-50 mx-auto mb-3">
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          placeholder="Password"
          onChange={passwordHandler}
        />
        <label htmlFor="inputPassword">Password</label>
      </div>

      <div className="w-50 mx-auto">
        <button className="btn btn-primary w-100" onClick={onLogin}>
          Sign In
        </button>
      </div>

      <div className="mb-3 w-50 mx-auto mt-3">
        Don't have an account yet? <Link to="/signup">Sign-Up</Link>
      </div>
    </div>
  );
};
