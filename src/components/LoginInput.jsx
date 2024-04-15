import React from "react";
import PropTypes from "prop-types";

class LoginInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  onSubmitHandler(event) {
    event.preventDefault();

    this.props.login({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className="input-login">
        <label htmlFor="email" className="">
          Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.onEmailChange}
          className="input-login__input" // Sesuaikan kelas dengan input-login
        />
        <label htmlFor="password" className="">
          Password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          autoComplete="current-password"
          value={this.state.password}
          onChange={this.onPasswordChange}
          className="input-login__input" // Sesuaikan kelas dengan input-login
        />
        <button className="">Login</button>
      </form>
    );
  }
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
