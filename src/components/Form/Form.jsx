import React, { useState, useCallback } from "react";
import { debounce } from "lodash";

const Form = ({ submitSearch, changeSearch }) => {
  const [location, setLocation] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!location || location === "") return;
    submitSearch(location);
  };

  const handleOnChange = (e) => {
    setLocation(e.target.value);
    changeSearch(e.target.value);
  };
  const debouncedHandleSearch = debounce(handleOnChange, 500);

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        aria-label="location"
        placeholder="Search for location"
        onChange={debouncedHandleSearch}
        accessKey={"q"}
        required
      />
      <button type="submit" onClick={onSubmit}>
        Search
      </button>
    </form>
  );
};

export default Form;
