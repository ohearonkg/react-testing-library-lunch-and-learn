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
      const { id, text } = action.payload;
      return {
        toDos: [...state.toDos, { id, text, completed: false }]
      };
    case REMOVE_TO_DO:
      const indexToBeRemoved = state.toDos.findIndex(
        ({ id }) => id === action.payload.id
      );
      const toDosCopy = [...state.toDos];
      toDosCopy.splice(indexToBeRemoved, 1);
      return {
        toDos: toDosCopy
      };
    case TOGGLE_TO_DO:
      const {
        payload: { id: idToToggle }
      } = action;
      return {
        toDos: state.toDos.map(({ id, text, completed }) =>
          id === idToToggle
            ? { id, text, completed: !completed }
            : { id, text, completed }
        )
      };
    default:
      return state;
  }
};

export default toDosReducer;
