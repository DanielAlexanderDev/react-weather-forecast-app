import React from "react";
import { SuggestionContainer, SuggestionText } from ".";

const Suggestions = ({ data, onSearch }) => {
  return (
    <SuggestionContainer>
      {data.map((item) => (
        <SuggestionText
          onClick={() => onSearch(item.name)}
          key={item.id}
        >{`${item.name}, ${item.country}`}</SuggestionText>
      ))}
    </SuggestionContainer>
  );
};

export default Suggestions;
