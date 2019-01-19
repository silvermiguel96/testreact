import React, { Component } from 'react';

class TaskForm extends Component {


render (){
  return (
    <div className="card mt-4">
        <form  className="card-body">
          <div className="form-group">
          <label for="formGroupExampleInput">Tasks</label>
            <input
              type="text"
              name="Name"
              className="form-control"
              value=""
              // Text change in the input
              onChange={this.handleInputChange}
              placeholder="Name"
              />
          </div>

          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
  )
}
}

export default TaskForm