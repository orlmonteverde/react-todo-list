import React from 'react';

const Navigation = ({ nTodo }) => (
  <nav className="navbar navbar-dark bg-dark">
    <a className="text-white" href="">
      Tasks
    </a>
    <span className="badge badge-pill badge-light ml-2">
      {nTodo}
    </span>
  </nav>
);
export default Navigation;