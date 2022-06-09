import axios from "axios";

const options = (param) => {
  return {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/search.json",
    params: { q: param },
    headers: {
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      "X-RapidAPI-Key": "8b43d4ddf9mshc1ecb5d0bcc050ap1b5a86jsnea7ef7e1e4ad",
    },
  };
};

export const getAutocompleteRequest = async (param) => {
  const res = await axios.request(options(param));
  const data = await res.data;
  return data;
};
