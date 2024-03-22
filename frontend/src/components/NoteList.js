// components/NoteList.js
import React, { useState, useEffect } from 'react';
import { fetchNotes } from '../services/api';

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      try {
        const fetchedNotes = await fetchNotes();
        setNotes(fetchedNotes);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    getNotes();
  }, []);

  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note._id}>{note.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
