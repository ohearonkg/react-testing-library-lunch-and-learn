import {
  ADD_TO_DO,
  TOGGLE_TO_DO,
  REMOVE_TO_DO
} from "../../actions/ToDos/constants";

const initialState = {
  toDos: []
};

const toDosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_DO:
    case REMOVE_TO_DO:
    case TOGGLE_TO_DO:
    default:
      return state;
  }
};

export default toDosReducer;
