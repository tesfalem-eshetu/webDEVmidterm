import React from "react";

function Note({ id, title, content, onDelete }) {
  const ClickHandler = () => onDelete(id);

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={ClickHandler}>DELETE</button>
    </div>
  );
}

export default Note;
