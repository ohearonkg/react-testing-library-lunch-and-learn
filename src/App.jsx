import React from "react";
import SignInForm from "./components/SignInForm";

const App = () => (
  <div>
    <title>Testing Example</title>
    <SignInForm onSubmitFunction={saveUser} />
  </div>
);

export default App;
