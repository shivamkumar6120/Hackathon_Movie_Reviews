import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate()

    function onLogout(){
        localStorage.removeItem('token')
        navigate('/')
    }
  return (
    <div className='container-fluid'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to='display-all-movies' className="navbar-brand">Movie Reviews</Link>
    <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to='display-all-movies' aria-current="page" href="#">All Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="my-reviews">My Reviews</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="shared-with-me">Shared with me</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="all-reviews">All Reviews</Link>
        </li>
      </ul>
      <div className="d-flex gap-4 align-items-center">
        <Link to="edit-profile" className='nav-link'>Edit Profile</Link>
        <Link to='change-password'  className='nav-link'>Change Password</Link>
        <button className="btn text-warning" type="submit" onClick={onLogout}>Logout</button>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
