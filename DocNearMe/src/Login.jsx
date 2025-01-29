import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>Login to Your Account</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit">Log In</button>
      </form>

      <p>
        New here? <Link to="/register">Create an account</Link>
      </p>
    </div>
  );
}

export default Login;
