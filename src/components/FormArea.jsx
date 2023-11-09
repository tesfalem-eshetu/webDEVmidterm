import React, { useState } from "react";

function FormArea({ onAdd }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function submitNote(event) {
    event.preventDefault();
    onAdd({ title, content });
    setTitle("");
    setContent("");
  }

  return (
    <div>
      <form onSubmit={submitNote}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleTitleChange}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={content}
          onChange={handleContentChange}
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default FormArea;
