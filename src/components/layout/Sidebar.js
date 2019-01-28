import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <React.Fragment>
      <Link to="/client/add" className="btn btn-outline-info btn-block mb-3">
        Add Client <i className="fas fa-user" />
      </Link>

      <div className="card text-center border-warning text-white mb-3">
        <div className="card-body">
          <h3>Interest</h3>
          <h4 className="display-4">
            0%
          </h4>
          <a href="posts.html" className="btn btn-outline-light btn-sm">View</a>
        </div>
      </div>

      <div className="card text-center border-success text-white mb-3">
        <div className="card-body">
          <h4>Categories</h4>
          <h4 className="display-4">
            <i className="fas fa-folder"></i> 2
                  </h4>
          <a href="categories.html" className="btn btn-outline-light btn-sm">View</a>
        </div>
      </div>
    </React.Fragment>
  );
};
