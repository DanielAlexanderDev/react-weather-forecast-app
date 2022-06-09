import React from "react";
import SuggestionItem from "../SuggestionItem/SuggestionItem";
const Suggestions = ({ data, onSearch }) => {
  return (
    <div>
      {data.map((item) => (
        <p
          onClick={() => onSearch(item.name)}
          key={item.id}
        >{`${item.name}, ${item.country}`}</p>
      ))}
    </div>
  );
};

export default Suggestions;
