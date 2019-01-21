import React, { Component } from 'react';

// BD Json Categories 
import categories from '../categories.json'

console.log(categories)

class TaskForm extends Component {
constructor() {
  super();
  this.state = {
    categories,
  };
  this.setState({ optionTask: []});
}


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
        onChange={this.handleInputChange}
        placeholder="Name"
        />
        
    </div>
    <div className="form-group">
      <select
          name="priority"
          className="form-control"
          value=""
      >
      </select>
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