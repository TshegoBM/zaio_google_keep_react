import React, { useState } from "react";
import "./Form.css";
import { uid } from 'uid';

// Form component
const Form = (props) => {
  // State variables for title, text, and form visibility
  console.log(props);
  const { edit, selectedNote, toggleModal } = props;
  const [title, setTitle] = useState((edit && selectedNote.title) || "");
  const [text, setText] = useState((edit && selectedNote.text) || "");
  const [isActiveForm, setIsActiveForm] = useState(edit);

  // Event handler for title input change
  const titleChangeHandler = (event) => setTitle(event.target.value);

  // Event handler for text input change
  const textChangeHandler = (event) => {
    setText(event.target.value);
    setIsActiveForm(true);
  };

  // Event handler for form submission
  const submitFormHandler = (event) => {
    event.preventDefault();
    //Add data to array
    // setUserInput({
    //   Title: "",
    //   Text: ""
    // })

    if(!edit) {
    props.addNote({
      id: uid(),// Generate unique ID for the note
      title,
      text,
    }); // Call addNote function from props
    setIsActiveForm(false); // Hide form after submission
  } else {
    props.editNote({
      id:selectedNote.id,
      title,
      text
    })
    toggleModal()
  }
  setTitle(""); // Clear title input
  setText(""); // Clear text input
  };

  

  // Event handler for form click
  const formClickHandler = () => {
    setIsActiveForm(true);
  };

  // JSX for the Form component
  return (
    <div>
      <div className="form-container active-form" onClick={formClickHandler}>
        <form
          onSubmit={submitFormHandler}
          className={isActiveForm ? "form" : ""}
        >
          {isActiveForm && (
            <input
              onChange={titleChangeHandler}
              value={title}
              type="text"
              className="note-title"
              placeholder="Title"
            />
          )}

          <input
            onChange={textChangeHandler}
            value={text}
            type="text"
            className="note-text"
            placeholder="Take a note..."
          />

          {isActiveForm ? (
            <div className="form-actions">
              <div className="icons">
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    add_alert
                  </span>
                  <span className="tooltip-text">Remind me</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    person_add
                  </span>
                  <span className="tooltip-text">Collaborator</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    palette
                  </span>
                  <span className="tooltip-text">Change Color</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    image
                  </span>
                  <span className="tooltip-text">Add Image</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    archive
                  </span>
                  <span className="tooltip-text">Archive</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    more_vert
                  </span>
                  <span className="tooltip-text">More</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    undo
                  </span>
                  <span className="tooltip-text">Undo</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">
                    redo
                  </span>
                  <span className="tooltip-text">Redo</span>
                </div>
              </div>
              <button type="submit" className="close-btn">
                Close
              </button>
            </div>
          ) : (
            <div className="form-actions">
              <div className="tooltip">
                <span className="material-symbols-outlined hover">
                  check_box
                </span>
                <span className="tooltip-text">New List</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">brush</span>
                <span className="tooltip-text">New Drawing</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">image</span>
                <span className="tooltip-text">New Image</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

// Export the Form component as the default export
export default Form;
