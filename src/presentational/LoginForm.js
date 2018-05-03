import React from 'react';
import { Link } from 'react-router-dom';


const LoginForm = ({ onSubmit, onChange, email, password }) => {
  return (
    <div className="row">
      <div className="col-lg-10">
        <form className="login-form" onSubmit={onSubmit}>
          <h4 className="login-header">ACCOUNT LOGIN</h4>
          <div className="form-group">
            <input
              className="form-control"
              id="text"
              name="email"
              onChange={onChange}
              value={email}
              placeholder="email"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              id="password"
              name="password"
              type="password"
              onChange={onChange}
              value={password}
              placeholder="Password"
              required
            />
          </div>

          <Link to="/register">
          Don't have an account? Signup
            <i className="material-icons">add</i>
          </Link>

          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
