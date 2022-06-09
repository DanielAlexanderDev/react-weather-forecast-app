import React, { useState } from "react";

const Form = ({ submitSearch }) => {
  const [location, setLocation] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!location || location === "") return;
    submitSearch(location);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        aria-label="location"
        placeholder="Search for location"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
        required
      />
      <button type="submit" onClick={onSubmit}>
        Search
      </button>
    </form>
  );
};

export default Form;
