import React from 'react';
import PropTypes from 'prop-types';


function DeleteButton({ id, onDelete, children}) {
  return <button className='action' onClick={() => onDelete(id)}>
    {children}
  </button>
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default DeleteButton;