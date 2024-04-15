import React from "react";

//components
import NoteInput from "../components/NoteInput";

//utils
import { addNote } from "../utils/api2";

// library
import { useNavigate } from "react-router-dom";



function AddPage() {
  const navigate = useNavigate();

  async function addNoteHandler(note) {
    // note call addNote function from api2.js
    await addNote(note);
    navigate("/");
  }

  return (
    <section className="add-new-page">  
      <NoteInput addNote={addNoteHandler} />
    </section>
  );
}

export default AddPage;
