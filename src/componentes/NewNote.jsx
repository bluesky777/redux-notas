import { useDispatch } from "react-redux";
import { createNote } from "../reducers/noteReducer";
import { createNew } from "../services/notes";

const NewNote = () => {
  const dispatch = useDispatch();

  const addNote = async (e) => {
    e.preventDefault();
    const { target } = e;
    const content = target.note.value;
    target.note.value = "";
    dispatch(createNote(content));
  };

  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button>Add</button>
    </form>
  );
};

export default NewNote;
