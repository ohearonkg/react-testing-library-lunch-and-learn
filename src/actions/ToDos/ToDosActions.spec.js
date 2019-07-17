import { ADD_TO_DO, REMOVE_TO_DO, TOGGLE_TO_DO } from "./constants";
import { addToDo, removeToDo, toggleToDo } from "./";

const sampleToDoID = "ABC";
const sampleToDoText = "SAMPLETODOTEXT";

describe("To Do Action Creators", () => {
  /**
   * Adding a To Do
   */
  it("Should create the correct action for adding a to do", () => {
    const addToDoAction = addToDo({ id: sampleToDoID, text: sampleToDoText });
    expect(addToDoAction).toEqual({
      type: ADD_TO_DO,
      payload: {
        id: sampleToDoID,
        text: sampleToDoText
      }
    });
  });

  /**
   * Removing a To Do
   */
  it("Should create the correct action for removing a to do", () => {
    const removeToDoAction = removeToDo({ id: sampleToDoID });
    expect(removeToDoAction).toEqual({
      type: REMOVE_TO_DO,
      payload: {
        id: sampleToDoID
      }
    });
  });

  /**
   * Toggling a To Do
   */
  it("Should create the correct action for toggling a to do", () => {
    const toggleToDoAction = toggleToDo({ id: sampleToDoID });
    expect(toggleToDoAction).toEqual({
      type: TOGGLE_TO_DO,
      payload: {
        id: sampleToDoID
      }
    });
  });
});
