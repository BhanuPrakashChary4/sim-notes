// src/App.js
import React from 'react';
import NoteList from './components/NoteList';

const App = () => {
  return (
    <div>
      <h1>Notes App</h1>
      <NoteList />
      {/* Add other components for CRUD operations */}
    </div>
  );
};

export default App;
