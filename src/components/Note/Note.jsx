import React from 'react';

function Note({ note, deleteNote }) {
  return (
    <div className="p-4 bg-white rounded shadow-md flex justify-between items-center">
      <p className="flex-1">{note.text}</p>
      <button
        onClick={() => deleteNote(note.id)}
        className="bg-red-500 text-white p-1 rounded ml-4 hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
}

export default Note;
