import React, { useState } from "react";

const SignInForm = ({ onSubmitFunction }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitFunction({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </label>

      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>

      <input type="submit" value="Submit" />
    </form>
  );
};

export default SignInForm;
