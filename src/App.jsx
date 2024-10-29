import React, { useState } from 'react'; // Importing React and the useState hook from React
import Note from './components/Note/Note'; // Importing the Note component from a separate file

// Main App component
function App() {
  // useState hook to keep track of all notes and input text
  const [notes, setNotes] = useState([]); // 'notes' holds an array of all notes, 'setNotes' updates it
  const [noteText, setNoteText] = useState(''); // 'noteText' holds the text input value, 'setNoteText' updates it

  // Function to add a new note
  const addNote = () => {
    if (noteText.trim() === '') return; // Prevents adding empty notes (trim removes whitespace)
    const newNote = { id: Date.now(), text: noteText }; // Creates a new note object with a unique id and text
    setNotes((prevNotes) => [...prevNotes, newNote]); // Adds the new note to the end of the notes array
    setNoteText(''); // Clears the input field after adding the note
  };

  // Function to delete a note by its id
  function deleteNote(id) {
    // Filters out the note with the matching id, keeping only the others
    setNotes(notes.filter(note => note.id !== id));
  }

  // JSX for rendering the component's UI
  return (
    <div className="min-h-screen bg-gray-100 p-5 flex flex-col items-center">
      {/* Title of the app */}
      <h1 className="text-2xl font-bold mb-4">Quick Note App</h1>
      
      {/* Input area for writing a new note */}
      <div className="mb-5 flex">
        <input
          type="text" // Input field type is text
          value={noteText} // The value of the input is bound to noteText
          onChange={(e) => setNoteText(e.target.value)} // Updates noteText state whenever input changes
          placeholder="Write a note..." // Placeholder text shown when input is empty
          className="border border-gray-300 p-2 rounded mr-2" // Tailwind CSS classes for styling
        />
        <button
          onClick={addNote} // Calls addNote function when button is clicked
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600" // Button styles with hover effect
        >
          Add Note
        </button>
      </div>
      
      {/* Display area for all notes */}
      <div className="w-full max-w-md space-y-4">
        {notes.map((note) => (
          // For each note, render a Note component and pass the note and deleteNote function as props
          <Note key={note.id} note={note} deleteNote={deleteNote} />
        ))}
      </div>
    </div>
  );
}

export default App; // Exports the App component to be used in other parts of the app
