import React, { useState } from "react";
import { debounce } from "lodash";
import {
  FormContainer,
  Input,
  Button,
  Select,
  InputContainer,
  Option,
} from "./styles";

const Form = ({ submitSearch, changeSearch, suggestions }) => {
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

  const debouncedHandleSearch = debounce(handleOnChange, 200);

  return (
    <FormContainer onSubmit={onSubmit}>
      <InputContainer>
        <Input
          autoComplete="off"
          id="suggestions"
          aria-label="location"
          placeholder="Search for location"
          onChange={debouncedHandleSearch}
          accessKey={"q"}
          required
        />
        {suggestions.length > 0 && (
          <Select>
            {suggestions.map((sugg) => (
              <Option key={sugg.id} onClick={() => submitSearch(sugg.name)}>
                {sugg.name}-{sugg.country}
              </Option>
            ))}
          </Select>
        )}
      </InputContainer>
      <Button type="submit" onClick={onSubmit}>
        Search
      </Button>
    </FormContainer>
  );
};

export default Form;
