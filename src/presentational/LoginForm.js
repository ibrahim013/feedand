import React from 'react';
import { Link } from 'react-router-dom';


const LoginForm = ({ onSubmit, onChange, email, password }) => {
  return (
     <div className="login-container">
    <div className="food-container">
      <div className="food-highlight">
       <div className="menu-wrapper">
         <img src="img/1494324_orig.jpg" alt="" />
         <div className="overlay">
            <div className="text">Hi, Lets get you something yummy</div>
          </div>
       </div>
      </div>
    </div>
    <div className="login-page">
      <div className="page-logo">
        <img src="img/Andela-logo-landscape-blue-400px.png" alt="" width="100" height="35" />
      </div>
      <div className="login-action">
        <div className="row login-form">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input
                className="validate"
                id="email"
                name="email"
                type="email"
                onChange={onChange}
                value={email}
                required
              />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
              <input
              className="validate"
              id="password"
              name="password"
              type="password"
              onChange={onChange}
              value={password}
              required
            />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="cta">
              <p>
                <input type="checkbox" id="test5" />
                <label htmlFor="test5">Remember me</label>
              </p>
              <p>
                <a href="#"> Forgot password</a>
              </p>
            </div>
            <div className="cta-button-section">
            <button type="submit" className="button shadow-effect login-botton">Login</button>
            <Link to="/register">
            <button className="button shadow-effect signin-botton">Sign Up</button>
          </Link>
                
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default LoginForm;





