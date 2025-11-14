
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { editProfile } from '../services/user';

export const EditProfile = () => {
      const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    Dob: "",
  });

  function emailHandler(e) {
    setUser((prevUser) => ({ ...prevUser, email: e.target.value }));
  }
  function firstNameHandler(e) {
    setUser((prevUser) => ({ ...prevUser, firstName: e.target.value }));
  }
function phoneNumberHandler(e) {
    setUser((prevUser) => ({ ...prevUser, phoneNumber: e.target.value }));
  }
  function lastNameHandler(e) {
    setUser((prevUser) => ({ ...prevUser, lastName: e.target.value }));
  }

  function dobHandler(e) {
    setUser((prevUser) => ({ ...prevUser, Dob: e.target.value }));
  }
  const navigate = useNavigate();
  async function onEdit(e) {
    e.preventDefault();
    if (user.firstName == "") toast.warning("Please enter the first name");
    else if (user.lastName == "") toast.warning("Please enter last name");
    else if (user.email == "") toast.warning("Please enter the email");
    else if (user.phoneNumber == "") toast.warning("Please enter the mobile");
    else if (user.Dob == "") toast.warning("Please enter DOB");
    else {
      const data = await editProfile(user);
      try {
        if (data.status == "success") navigate("/");
        else toast.error(data.status);
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <div className='container-fluid w-75 mx-auto mt-3'>
      <h3>Edit Profile</h3>
      <form className="row g-2 mx-auto w-100">
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
          <button className="btn btn-primary" onClick={onEdit}>
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}
