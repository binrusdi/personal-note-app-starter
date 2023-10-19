import React from "react";
import { useState } from "react";
import { getAllNotes } from "../utils/local-data";

function ActiveNote() {
 const [notes, setNotes] = useState(getAllNotes());
 const listNote = notes.map((note) => {
  return (
   <article key={note.id}>
    <h2>{note.title}</h2>
    <span>{note.createdAt}</span>
    <p>{note.body}</p>
   </article>
  );
 })
 return listNote;
}

export default ActiveNote
