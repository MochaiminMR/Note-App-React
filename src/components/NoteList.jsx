import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

function NoteList({ notes}) {
  return (
    <div className="note-list">
      {notes.map((item) => (
        <NoteItem
          key={item.id}
          id={item.id}
          title={item.title}
          body={item.body}
          createdAt={item.createdAt}
        />
      ))}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
