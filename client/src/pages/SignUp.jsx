import React from 'react'

export const SignUp = () => {
  return (
    <div>
    <form class="row g-3">
      <div class="col-md-4">
        <label for="inputFirstName" class="form-label">First name</label>
        <input type="text" class="form-control" id="inputFirstName"  required/>
      </div>

     <div class="col-md-4">
        <label for="inputLastName" class="form-label">Last name</label>
        <input type="text" class="form-control" id="inputLastName"  required/>
     </div>
    </form>
    </div>
  )
}
