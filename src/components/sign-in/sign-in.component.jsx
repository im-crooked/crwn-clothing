import React, { Component } from "react";

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogle} from '../../firebase/firebase.utils';

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState = { email: "", password: "" };
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState = { [name]: value };
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email" 
            onChange={this.handleChange}
            type="email"
            value={this.state.email}
            label="email"
            required
          ></FormInput>
          <FormInput
            name="password" 
            onChange={this.handleChange}
            type="password"
            value={this.state.password}
            required
            label="password"
          ></FormInput>
          <div className='buttons'>
          <CustomButton type="submit"> SIGN IN</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogeleSignIn={true}> SIGN IN WITH Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
