import React, { useEffect, useState } from "react";
import Detailitem from "../components/DetailItem";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/api2";
import { useNavigate, useParams } from "react-router-dom";


const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getNote(id);
        setData(data);
      } catch (error) {
        console.error("Error fetching note:", error);
      }
    };
    fetchData();
  }, [id]);

  const onDeleteHandler = async (id) => {
    try {
      await deleteNote(id);
      navigate("/");
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const onArchive = async (id) => {
    try {
      await archiveNote(id);
      navigate("/");
    } catch (error) {
      console.error("Error archiving note:", error);
    }
  };

  const onUnarchive = async (id) => {
    try {
      await unarchiveNote(id);
      navigate("/");
    } catch (error) {
      console.error("Error unarchiving note:", error);
    }
  };

  return (
    <>
      <div className="detail-page">
        {/* Place any additional elements or components related to detail page here */}
      </div>
      {data ? (
        <Detailitem
          onArchive={data.archived === false ? onArchive : onUnarchive}
          onDelete={() => onDeleteHandler(data.id)}
          {...data}
        />
      ) : (
        <p>Data tidak ditemukan</p>
      )}
    </>
  );
};


export default DetailPage;
