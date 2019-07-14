import React, { useState } from "react";

const SignInForm = () => {
  const [username, setUsername] = useState("");

  return (
    <form>
      <label>
        Username
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </label>
    </form>
  );
};

export default SignInForm;
