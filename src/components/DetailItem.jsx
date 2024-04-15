import React from "react";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import { IoArchive } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdUnarchive } from "react-icons/md";
import { showFormattedDate } from "../utils/data";

export default function DetailItem({
  title,
  createdAt,
  archived,
  body,
  onArchive,
  onDelete,
  id,
}) {
  const formattedDate = showFormattedDate(new Date(createdAt));
  return (
    <div>
      <div className="note-item__content">
        <h4 className="detail-page__title">{title}</h4>
        <p className="detail-page__createdAt">{formattedDate}</p>
        <p className="detail-page__body">{body}</p>
        <div className="detail-page__action">
          <DeleteButton id={id} onDelete={onDelete} type={"delete"}>
            <RiDeleteBin6Fill />
          </DeleteButton>

          <ArchiveButton
            className="action"
            id={id}
            onArchive={onArchive}
            type={"archive"}
          >
            {archived === true ? <MdUnarchive /> : <IoArchive />}
          </ArchiveButton>
        </div>
      </div>
    </div>
  );
}

DetailItem.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  body: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
