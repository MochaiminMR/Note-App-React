import React, { useContext } from "react";
import PropTypes from "prop-types";
import {LocaleContext} from "../contexts/LocaleContext";


function SearchBar({ keyword, keywordChange }) {
const { locale, toggleLocale } = useContext(LocaleContext);
  return (
    <div className="search-bar">
      <input
        className="search-bar"
        type="text"
        placeholder={locale === 'id' ? 'Cari Catatan' : 'Search Notes'}
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </div>
  );
}

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
