import React from "react";
import SignInForm from "./components/SignInForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const UserProfile = ({ match: { userID } }) => (
  <div data-testid={`USER-PROFILE-${userID}`}>Profile Page {userID}</div>
);

const App = () => (
  <Router>
    <title>Testing Example</title>
    <Switch>
      <Route path="/" exact component={SignInForm} />
      <Route path="/user/:userID" component={UserProfile} />
    </Switch>
  </Router>
);

export default App;
