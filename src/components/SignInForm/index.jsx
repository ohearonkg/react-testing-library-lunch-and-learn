import React, { useState } from "react";
import { signInUser } from "../../api/signInUser";
import { withRouter } from "react-router-dom";

const SignInForm = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const { id: userID } = await signInUser({ username, password });
    history.push(`/user/${userID}`);
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

export default withRouter(SignInForm);
