import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import toDosReducer from "./reducers/ToDos";
import ToDoList from "./components/ToDoList";

const store = createStore(toDosReducer);

const App = () => (
  <Provider store={store}>
    <div>
      <title>Testing Example</title>
      <ToDoList />
    </div>
  </Provider>
);

export default App;
