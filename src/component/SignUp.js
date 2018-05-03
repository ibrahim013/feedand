import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import SignUpForm from "../presentational/SignUpForm";
import * as actions from '../actions';


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit (event) {
    event.preventDefault();
    const { email, password } = this.state;

    this.props.signupUser({ email, password });
  };

  render() {
    return (
      <SignUpForm
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        email={this.state.email}
        password={this.state.password}
      />
    );
  }
}


  

export default connect(null, actions)(SignUp);
