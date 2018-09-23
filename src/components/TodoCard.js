import React from 'react';

const TodoCard = ({todo, onClick, index}) => (
  <div className="col-md-4">
    <div className="card mt-4">
      <div className="card-header">
        <h3>{todo.title}</h3>
        <span className="badge badge-pill badge-danger ml-2">
          {todo.priority}
        </span>
      </div>
      <div className="card-body">
        <p>{todo.description}</p>
        <p><mark>{todo.responsible}</mark></p>
      </div>
      <div className="card-footer">
        <button
          className="btn btn-danger"
          onClick={onClick(index)}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
);


export default TodoCard;
