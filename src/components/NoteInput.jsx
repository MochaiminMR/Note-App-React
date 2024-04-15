import React, { useState } from "react";
import PropTypes from "prop-types";

import { FaCheck } from "react-icons/fa6";


function NoteInput({addNote}) {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  

  const TitileChangeEventHandler = (event) =>{
    setTitle(event.target.value);
  }

  const bodyChangeEventHandler = (event) =>{
    setBody(event.target.value);
  }

  const submitEventHandler = (event) => { 
    event.preventDefault();
    addNote({title, body});
  }
  
  return (
    <div>
      <form className="add-new-page__input" onSubmit={submitEventHandler}>
        <input
          className="add-new-page__input__title"
          type="text"
          placeholder="Catatan Rahasia"
          value={title}
          onChange={TitileChangeEventHandler}
          required
        />
        <textarea
          className="add-new-page__input__body"
          type="text"
          placeholder="Sebenarnya saya adalah ...."
          value={body}
          onChange={bodyChangeEventHandler}
          required
        />
        <div className="add-new-page__action">
          <button className="action" type="submit">
            <FaCheck />
          </button>
        </div>
      </form>
    </div>
  );
}


NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
