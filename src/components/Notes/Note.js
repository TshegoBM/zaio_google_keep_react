import React, { useState } from "react";

const Note = (props) => {
  // State hooks for title, text, and hover state
  const {toggleModal, note, setSelectedNote} = props;
  const [isHover, setIsHover] = useState(false);

  // Event handler for when a note is clicked
  const noteClickHandler = () => {
    toggleModal();
    setSelectedNote(note);

    // setTitle("changed Title");
    // setText("changed Text");
  };
  // Event handler for when mouse hovers over a note
  const hoverOverHandler = () => {
    setIsHover(true);
  };

  // Event handler for when mouse leaves a note
  const hoverOutHandler = () => {
    setIsHover(false);
  };

  // Event handler for deleting a note
  const deleteHandler = (event) => {
    props.deleteNote(note.id);
    console.log(note.id);
  };
  return (
    <div
      className="note"
      id={props.id}
      onClick={noteClickHandler}
      onMouseOver={hoverOverHandler}
      onMouseOut={hoverOutHandler}
    >
      {isHover && (
        <span className="material-symbols-outlined check-circle">
          check_circle
        </span>
      )}
      <div className="title">{note.title}</div>
      <div className="text">{note.text}</div>

      <div
        className="note-footer"
        style={{ visibility: isHover ? "visible" : "hidden" }}
      >
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
        <div className="tooltip archive" onClick={deleteHandler}>
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
      </div>
    </div>
  );
};

// Export the Note component as the default export
export default Note;
