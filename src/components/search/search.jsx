import React from 'react';

const Search = () => {
  return (
    <form className="pipeline__search search" action="">
      <input className="search__input" placeholder="Enter Jira Number" />
      <button className="search__button">Search</button>
    </form>
  )
};

export default Search;