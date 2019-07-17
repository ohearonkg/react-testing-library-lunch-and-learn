import toDosReducer from "./";
import {
  ADD_TO_DO,
  REMOVE_TO_DO,
  TOGGLE_TO_DO
} from "../../actions/ToDos/constants";

const sampleToDoID = "ABC";
const sampleToDoText = "SAMPLETODOTEXT";

const initalStateWithToDo = {
  toDos: [{ id: sampleToDoID, text: sampleToDoText, completed: false }]
};
describe("To Dos Reducer", () => {
  /**
   * Default case first time
   * reducer is called
   */
  it("Should return the inital state if called with an undefined action", () => {
    expect(toDosReducer(undefined, {})).toEqual({
      toDos: []
    });
  });

  /**
   * Adding a To Do
   */
  it("Should correctly handle the action of adding a To Do", () => {
    expect(
      toDosReducer(undefined, {
        type: ADD_TO_DO,
        payload: {
          id: sampleToDoID,
          text: sampleToDoText
        }
      })
    ).toEqual({
      toDos: [
        {
          id: sampleToDoID,
          text: sampleToDoText,
          completed: false
        }
      ]
    });
  });

  /**
   * Removing a To Do
   */
  it("Should correctly handle the action of removing a To Do", () => {
    expect(
      toDosReducer(initalStateWithToDo, {
        type: REMOVE_TO_DO,
        payload: {
          id: sampleToDoID
        }
      })
    ).toEqual({
      toDos: []
    });
  });

  /**
   * Toggling a To Do
   */
  it("Should correctly handle the action of toggling a To Do", () => {
    expect(
      toDosReducer(initalStateWithToDo, {
        type: TOGGLE_TO_DO,
        payload: {
          id: sampleToDoID
        }
      })
    ).toEqual({
      toDos: [
        {
          id: sampleToDoID,
          text: sampleToDoText,
          completed: true
        }
      ]
    });
  });
});
