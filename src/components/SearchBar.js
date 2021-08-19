import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  const onFormSubmit = (event) => {
    // エンター等のイベント発火を止める
    event.preventDefault();
    onSubmit(term);
  };
  return (
    <div className='ui segment'>
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input
            type="text"
            name="search"
            placeholder=""
            value={term}
            onChange={(event) => {
              setTerm(event.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
