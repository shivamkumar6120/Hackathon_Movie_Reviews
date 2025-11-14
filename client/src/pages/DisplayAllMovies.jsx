import React from "react";
import { useNavigate } from "react-router-dom";


export const DisplayAllMovies = () => {
    const navigate = useNavigate()
    function onSubmit(){
        navigate('/home/add-review')
    }
  return (
    <div className="container-fluid w-75 mx-auto mt-3">
     <h1 className="mb-3 mt-3">All Movies</h1>
      <div className="card pt-3 pb-3" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Avatar</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Release Date: 19/12/2025
          </h6>
          <button className="btn btn-primary mt-2" onClick={onSubmit}>
            Review this Movie
          </button>
        </div>
      </div>
    </div>
  );
};
