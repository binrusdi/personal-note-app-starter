import React, { useState } from "react";
import { getAllNotes } from "../utils/local-data";

function DisplayNote() {
  const [notes, setNotes] = useState(getAllNotes());
  let noteList = notes.map((note) => {
    return (
      <article key={note.id}>
        <h2>{note.title}</h2>
        <span>{note.createdAt}</span>
        <p>{note.body}</p>
      </article>
    );
  });
  return (
    <div className="display-note">
      {noteList}
    </div>
  );
}

export default DisplayNote;
