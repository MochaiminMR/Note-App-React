import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { showFormattedDate } from "../utils/data";



function NoteItem({ title, body, createdAt, id}) {
  const formattedDate = showFormattedDate(new Date(createdAt));
  return (
    <div className="note-item">
      <Link to={`/notes/${id}`}>
        <h4 className="note-item__title">{title}</h4>
      </Link>
      <p className="note-item__createdAt">{formattedDate}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

NoteItem.propType = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default NoteItem;
