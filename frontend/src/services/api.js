// services/api.js
const API_URL = 'http://localhost:5000/api/notes'; // Update with your backend URL

export const fetchNotes = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

export const fetchNoteById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();
  return data;
};

export const createNote = async (note) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  });
  const data = await response.json();
  return data;
};

export const updateNote = async (id, note) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  });
  const data = await response.json();
  return data;
};

export const deleteNote = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
};
