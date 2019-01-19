import React, { Component } from 'react';

class CategoriesForm extends Component {
  constructor () {
    super();
    this.state = {
      title: '',
      responsible: '',
      description: ''
    };
    // Para que no se pierda el scoop 
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    // Evita registrar la pagina
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      code: '',
      Name: '',
      description: ''
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
  // Evento para modificar el favlor
    this.setState({
      [name]: value
    });
  }


  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
          <label for="formGroupExampleInput">Categories</label>
            <input
              type="text"
              name="code"
              className="form-control"
              value={this.state.code}
              // Text change in the input
              onChange={this.handleInputChange}
              placeholder="Code"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="Name"
              className="form-control"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="Name"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Description"
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

export default CategoriesForm;
