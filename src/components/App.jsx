import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";




function App() {

  const [notes, setNotes] = useState([])

  function addNote(newNote) {
    const noteWithChecked = {
      ...newNote,
      checked: false
    };
    setNotes(prevNotes => [...prevNotes, noteWithChecked]);
  }

  function deleteNote(indexToDelete) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => index !== indexToDelete);
    });
  }

  function checkedNote(indexToChecked) {
    setNotes((prevNotes) => {
      return prevNotes.map((note, index) => {
        if (index === indexToChecked) {
          return {
            ...note,
            checked: !note.checked
          };
        } else {
          return note; 
        }
      });
    });
  }


  return (
    <div className="main-content">
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="notes-grid">
        {notes.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            checked={noteItem.checked}  
            content={noteItem.content}
            onDelete={deleteNote}
            onClick={checkedNote}
          />
        ))}
      </div>
      <Footer />
    </div>
  )

}

export default App;