import { useEffect } from "react";
import { useDispatch } from "react-redux";
import NewNote from "./componentes/NewNote";
import Notes from "./componentes/Notes";
import { initNotes } from "./reducers/noteReducer";
import { getNotes } from "./services/notes";


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(initNotes());
    
  }, [dispatch])
  

  
  const filterSelected = (filter) => {
    console.log(filter)
  }

  return (
    <div className="app" style={{ padding: "30px" }}>
      <NewNote />

      <div>
        all 
        <input type="radio" name="filter" onChange={ () => filterSelected('ALL') } />
        important!!
        <input type="radio" name="filter" onChange={ () => filterSelected('IMPORTANT') } />
        not important 
        <input type="radio" name="filter" onChange={ () => filterSelected('NOT_IMPORTANT') } />
      </div>
      <Notes />
      
    </div>
  );
};

export default App;
