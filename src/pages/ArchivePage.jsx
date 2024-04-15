import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// components
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";

// context
import { LocaleContext } from "../contexts/LocaleContext";

// fetch data from API
import { getArchivedNotes} from "../utils/api2";

function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notesArsip, setNotesArsip] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  const { locale } = React.useContext(LocaleContext);

  useEffect(() => {
    async function getData() {
      await getArchivedNotes().then(({ data }) => {
        setNotesArsip(data);
        setIsLoading(false);
      });
    }
    getData();
  }, []);

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotesArchive = notesArsip.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <section>
          <h2>{locale === "id" ? "Catatan Arsip" : "Active Arsip"}</h2>
          <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
          {notesArsip.length > 0 ? (
            <NoteList notes={filteredNotesArchive} />
          ) : (
            <p>Tidak ada data</p>
          )}
        </section>
      )}
    </>
  );
}

export default ArchivePage;
