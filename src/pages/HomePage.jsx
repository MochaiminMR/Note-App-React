import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

// components
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { IoAdd } from "react-icons/io5";

// context
import { LocaleContext } from "../contexts/LocaleContext";

// fetch data from API
import { deleteNote, getActiveNotes } from "../utils/api2";

function HomePage2() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  const { locale } = React.useContext(LocaleContext);

  useEffect(() => {
    async function getData() {
      await getActiveNotes().then(({ data }) => {
        setNotes(data);
        setIsLoading(false);
      });
    }
    getData();
  }, []);

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <section>
          <h2>{locale === "id" ? "Catatan Aktif" : "Active List"}</h2>
          <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
          {notes.length > 0 ? (
            <NoteList notes={filteredNotes} />
          ) : (
            <p>Tidak ada data</p>
          )}
          <div className="homepage__action">
            <Link className="action" to="/add">
              <IoAdd />
            </Link>
          </div>
        </section>
      )}
    </>
  );
}

export default HomePage2;
