import React, { useState } from "react";
import PropTypes from "prop-types";



function RegisterInput2({register}) {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  
  }
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
  
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  
  }

  
  const onSubmitHandler = (event) => { 
    event.preventDefault();
    if( password !== confirmPassword){
      alert('password not match');
      return;
    }
    register({name, email, password});
  }


  return (
    <div>
      <form onSubmit={onSubmitHandler} className="input-register">
        <div>
          <label htmlFor="name">Nama</label>
          <input
            type="text"
            id="name"
            placeholder="Nama"
            value={name}
            onChange={handleNameChange}
            className="input-register"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="input-register"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={handlePasswordChange}
            className="input-register"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            autoComplete="current-password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="input-register"
          />
        </div>
        <button className="button-register">Register</button>
      </form>
    </div>
  );
}

RegisterInput2.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput2;
