import { createNew, getNotes } from "../services/notes";

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_NOTES":
      return action.payload;

    case "ADD_NOTE":
      return [...state, action.payload];

    case "TOGGLE_IMPORTANCE":
      const { id } = action.payload;
      return state.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            isImportant: !note.isImportant,
          };
        }
        return note;
      });
    default:
      return state;
  }
};

export default noteReducer;

export const createNote = (content) => {
  return async (dispatch) => {
    const newNote = await createNew(content);

    dispatch({
      type: "ADD_NOTE",
      payload: newNote,
    });
  };
};

export const toggleImportantNote = (id) => {
  return {
    type: "TOGGLE_IMPORTANCE",
    payload: {
      id,
    },
  };
};

export const initNotes = () => {
  return async (dispatch) => {
    const notes = await getNotes();

    dispatch({
      type: "INIT_NOTES",
      payload: notes,
    });
  };
};
