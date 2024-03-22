// components/Note.js
import React from 'react';

const Note = ({ note }) => {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      {/* Add functionality for editing/deleting notes */}
    </div>
  );
};

export default Note;
