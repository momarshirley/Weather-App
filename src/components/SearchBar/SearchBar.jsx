import React from "react";
import PropTypes from "prop-types";
import search_icon from "../../assets/search.png";
import "./searchBar.css";

const SearchBar = ({ inputRef, onButtonClick, handleKeyDown }) => {
  return (
    <div className="search-bar">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        onKeyDown={handleKeyDown}
      />
      <img src={search_icon} alt="Search Icon" onClick={onButtonClick} />
    </div>
  );
};

SearchBar.propTypes = {
  inputRef: PropTypes.object.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
};

export default SearchBar;
