import React, { useState } from "react";
import { debounce } from "lodash";
import { FormContainer, Input, Button } from "./styles";

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

  const debouncedHandleSearch = debounce(handleOnChange, 300);

  return (
    <FormContainer onSubmit={onSubmit}>
      <Input
        type="text"
        aria-label="location"
        placeholder="Search for location"
        onChange={debouncedHandleSearch}
        accessKey={"q"}
        required
      />
      <Button type="submit" onClick={onSubmit}>
        Search
      </Button>
    </FormContainer>
  );
};

export default Form;
