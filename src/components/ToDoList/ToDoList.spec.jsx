import React from "react";
import { render as rtlRender } from "@testing-library/react";
import ToDoList from ".";
import toDosReducer from "../../reducers/ToDos";

import { createStore } from "redux";
import { Provider } from "react-redux";

const render = (ui, reducer, initialState = undefined) => {
  const store = createStore(reducer, initialState);
  return rtlRender(<Provider store={store}>{ui}</Provider>);
};

describe("To Do List", () => {
  /**
   * Rendering list of to do item
   */
  it("Should render a list of to do items", () => {
    const { getByText, debug } = render(<ToDoList />, toDosReducer, {
      toDos: [
        {
          id: "ABC",
          text: "HI",
          completed: false
        }
      ]
    });
    debug();
  });
});
