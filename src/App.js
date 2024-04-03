// Import necessary libraries and components
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";

// Initial array of notes
const NOTES = [
  // {
  //   id: "a123",
  //   title: "some title1",
  //   text: "some text1"
  // },
  // {
  //   id: "a124",
  //   title: "some title1",
  //   text: "some text1"
  // },
  // {
  //   id: "a124",
  //   title: "some title1",
  //   text: "some text1"
  // },
  // {
  //   id: "a124",
  //   title: "some title1",
  //   text: "some text1"
  // }
];

console.log(
  NOTES.map((note) => {
    return note;
  })
);

// App functional component
const App = () => {
  const [notes, setNotes] = useState(NOTES);
  const [selectedNote, setSelectedNote] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  //const [selectedNote,setselectedNote]
// Function to add a new note to the array
  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };

  const editNote = (editedNote) => {
 
    setNotes(prevNotes => {
      const newArray =prevNotes.map(note => {
   
        if(editedNote.id ===note.id) {
         note.title =editedNote.title
         note.text =editedNote.text
        }
       
        return note;
     })
     return newArray;
    })
  }

  // Function to delete a note from the array
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter(note => id !== note.id)
    });
  };

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  // JSX for the App component
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Form addNote={addNote} />
      <Notes notes={notes} deleteNote={deleteNote} toggleModal={toggleModal} setSelectedNote={setSelectedNote}/> 
     {
     isModalOpen && (<Modal isModalOpen={isModalOpen} selectedNote={selectedNote} toggleModal={toggleModal} editNote={editNote}/>
     )}
    </div>
  );
};

// Export the App component as the default export
export default App;
