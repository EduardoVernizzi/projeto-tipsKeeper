import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";




function App() {

  const [notes, setNotes] = useState([])

  function addNote(newNotes) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNotes]
    })
  }

  function deleteNote(indexToDelete) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => index !== indexToDelete);
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
            content={noteItem.content}
            onDelete={deleteNote}
          />
        ))}
      </div>
      <Footer />
    </div>
  )

}

export default App;