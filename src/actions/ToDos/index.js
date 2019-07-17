import { ADD_TO_DO, REMOVE_TO_DO, TOGGLE_TO_DO } from "./constants";

export const addToDo = ({ id, text }) => ({
  type: ADD_TO_DO,
  payload: {
    id,
    text
  }
});

export const removeToDo = ({ id }) => ({
  type: REMOVE_TO_DO,
  payload: { id }
});

export const toggleToDo = ({ id }) => ({
  type: TOGGLE_TO_DO,
  payload: {
    id
  }
});
