import React from 'react'

export const ReviewE = ({btnName}) => {
  return (
    <div className='container mt-3 '>
     <h3>Create Review for {}</h3>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Rating (1-10)
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
          min="1" max="10" step="1"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Your Review
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div className="d-flex gap-2">
        <button className="btn btn-success">{btnName}</button>
        <button className="btn btn-secondary">Cancel</button>
      </div>
    </div>
  )
}
