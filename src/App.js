import React, { Component } from 'react';
import './App.css';
// DB Json
import { categories } from './categories.json'
// import { tasks } from './tasks.json'
// Create categories
import Forms from './components/CategoriesForm'
// Create task
import TasksForm from './components/TaskForm'

console.log(categories)
class App extends Component {
  constructor() {
    super();
    this.state = {
      categories,   
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  // Create new data Joss

  handleAddTodo(categories){
    this.setState({
      categories:[...this.state.categories, categories]
    })
  }

  removeCategorie(index){
    this.setState({
      categories: this.state.categories.filter((e, i) => {
        return i !== index
      })
    })
  }

  render() {
    //const { tasks } = this.state;
    const categories = this.state.categories.map((categories, i) =>{

      return (
        
      <div className="col-md-4" key={i}>
        <div className="card mt-4">
            <div className="card-header">
              <h3>{categories.name} </h3>
              <span className="badge badge-pill badge-danger ml-2">
                {categories.code}
              </span>
            </div>
            <div className="card-body">
            <ul>{
              categories.task.map((task) => {
               return <li>{task.name}</li> 
              })
            }
            </ul>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeCategorie.bind(this, i)}
              >
              Delete
              </button>
            </div>
        </div>
      </div>
      )
    })

    // Return before the request
    return (
      <div className="App">

      <nav className="navbar navbar-dark bg-dark">
        <a href=" " className="text-white">
          Tasks
          <span className="badge badge-pill badge-light ml-2">
            { this.state.categories.length}
          </span>
        </a>
      </nav>
        
      <div className="container">
      <div className="row mt-4">
        <div className="col-md-4 text-center pt-4 ">

          <Forms onAddTodo={this.handleAddTodo}></Forms>

          <TasksForm className="mt-4" ></TasksForm>
        </div>
        <div className="col-md-8">
          <div className="row">
            {categories}
          </div>
        </div>
      </div>
    </div>
      </div>
    );
  }
}

export default App;
