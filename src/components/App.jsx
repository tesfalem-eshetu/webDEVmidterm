import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import FormArea from "./FormArea";

function App() {
  const [notes, setNotes] = useState([]);

  function passNote(note) {
    setNotes((prevNotes) => prevNotes.concat(note));
  }

  function deleteNote(id) {
    setNotes((prevNotes) => [
      ...prevNotes.slice(0, id),
      ...prevNotes.slice(id + 1)
    ]);
  }

  function renderNotes() {
    return notes.map(({ title, content }, index) => (
      <Note
        key={index}
        id={index}
        title={title}
        content={content}
        onDelete={deleteNote}
      />
    ));
  }

  return (
    <div>
      <Header />
      <FormArea onAdd={passNote} />
      {renderNotes()}
      <Footer />
    </div>
  );
}

export default App;
