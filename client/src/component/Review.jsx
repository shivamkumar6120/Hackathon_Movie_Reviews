import React from "react";
import { useLocation } from "react-router-dom";

export const Review = () => {
    const location = useLocation();
  return (
    <div className="container mt-3">
   
      <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">Titanic <span className="bg-primary p-1 rounded-2 text-white fs-6 ps-2 pe-2">9/10</span></h5>
           {location.pathname=='/home/all-reviews'|| '/home/shared-with-me' ? <div className="text-secondary mb-1">Reviewed By : John Doe</div>:""}
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <p className="text-body-secondary opacity-50">
            Last Updated : 19/02/25
          </p>

          {location.pathname=='/home/my-reviews' ? <div className="d-flex gap-2">
            <button className="btn btn-primary">Edit</button>
            <button className="btn btn-success">Share</button>
            <button className="btn btn-danger">Delete</button>
        </div>:""}
        </div>
      </div>
    </div>
  );
};
