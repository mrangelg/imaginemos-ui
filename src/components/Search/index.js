import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import styled from "styled-components";

const SearchField = styled.div`
  position: relative;
  width: 100%;
  background-color: #f8f8f8;
  border-radius: 0.625rem;
  height: 2rem;
`;

const SearchIconStyled = styled(SearchIcon)`
  position: absolute;
  padding: 0.25rem 1.25rem;
`;

const SearchBody = styled(InputBase)`
  width: 100%;
  padding-left: 3.75rem;
`;

function Search() {
  return (
    <SearchField>
      <SearchIconStyled />
      <SearchBody
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
      />
    </SearchField>
  );
}

export default Search;
