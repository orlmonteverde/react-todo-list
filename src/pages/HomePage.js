import React, { Component } from 'react';

import './HomePage.css';
import {
  TodoCard,
  TodoForm,
  Navigation
} from '../components';
import logo from '../logo.svg';
import { todos } from '../todos.json';

class HomePage extends Component {
  state = {
    todos
  };

  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  removeTodo = (index) => (event) => {
    if (event.target.tagName === "BUTTON") {
      this.setState({
        todos: this.state.todos.filter((todo, i) => i !== index)
      });
    }
  }

  render() {
    const todos = this.state.todos.map((todo, i) => (
      <TodoCard key={i} todo={todo} index={i} onClick={ this.removeTodo }/>
    ));
    return (
      <div className="Home">
        <Navigation nTodo={todos.length}/>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              <img src={logo} className="Home-logo" alt="logo" />
              <TodoForm onAddTodo={ this.addTodo }/>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              {todos}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
