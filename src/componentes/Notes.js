import { toggleImportantNote } from "../reducers/noteReducer";
import { useSelector, useDispatch } from "react-redux";

const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const toggleImportant = (id) => {
    dispatch(toggleImportantNote(id));
  };

  return (
    <>
      {notes.map((note) => {
        return (
          <div key={note.id} onClick={() => toggleImportant(note.id)}>
            {note.content}
            <code style={{ fontSize: ".9em", fontWeight: "bold" }}>
              {" "}
              - {note.isImportant ? "Importante!!" : "No importa"}
            </code>
          </div>
        );
      })}
    </>
  );
};

export default Notes;
