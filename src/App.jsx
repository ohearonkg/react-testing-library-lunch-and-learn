import React from "react";
import SignInForm from "./components/SignInForm";
import axios from "axios";

const saveUser = async ({ username, password }) => {
  const { data } = await axios.post(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

const App = () => (
  <div>
    <title>Testing Example</title>
    <SignInForm onSubmitFunction={saveUser} />
  </div>
);

export default App;
