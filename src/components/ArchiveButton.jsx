import React from 'react';
import PropTypes from 'prop-types';


function ArchiveButton({ id, onArchive, children}) {
  return (
    <button className="action" onClick={() => onArchive(id)}>
      {children}
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default ArchiveButton;