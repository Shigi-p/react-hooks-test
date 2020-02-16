import React, { useState } from "react";
import {
  TextField,
  Button
} from "@material-ui/core";
import "./App.scss";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("")
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <form noValidate autoComplete="off" className="search__form">
      <TextField
        label="Movie title"
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        className="search__form__textfield"
      />
      <Button onClick={callSearchFunction} type="submit" value="SEARCH" variant="contained" className="search__form__button">
        Search!
      </Button>
    </form>
  );
};

export default Search;