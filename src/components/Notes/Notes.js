import "./Notes.css";
import Note from "./Note";
import React from "react";


// Functional component for displaying a list of notes
const Notes = (props) => {
  // Destructure props to extract notes array and deleteNote function
  const { notes, deleteNote,toggleModal, setSelectedNote} = props;

  // //Outputting conditional content
      // if(notes.length === 0) {
      //     return  (
      //     <div className="notes">
      //      <p>Notes you add appear here.</p>
      //     </div>
      //     );
      // }

  // Render conditional content based on the length of notes array
  return (
    <div className="notes">
      {notes.length === 0 ? (
        <p>Notes you add appear here.</p>
      ) : (
        notes.map((note, index) => (
          <Note
            key={index}
            note={note}
            deleteNote={deleteNote}
            toggleModal= {toggleModal}
            setSelectedNote={setSelectedNote}
          />
        ))
      )}
    </div>
  );
};

// Export the Notes component as the default export
export default Notes;
