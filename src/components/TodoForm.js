import React, { Component } from 'react';

class TodoForm extends Component {
  state = {
    title: '',
    responsible: '',
    description: '',
    priority: 'low'
  };
  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddTodo(this.state);
  }

  render() {
    return (
      <div className="card">
        <form className="card-body" onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <input
              type="text"
              name="title"
              onChange={ this.handleInput }
              className="form-control"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              onChange={ this.handleInput }
              className="form-control"
              placeholder="responsible"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Description"
              onChange={ this.handleInput }
            />
          </div>
          <div className="form-group">
            <select
              name="priority"
              className="form-control"
              onChange={ this.handleInput }
            >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <input value="Send" className="btn btn-primary" type="submit" />
        </form>
      </div>
    ); 
  }
}

export default TodoForm;
