import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className="search">
    <div>
      <img src="search.svg" alt ="search" />
    <input
            type = "text"
            placeholder="What are you looking for"
            value={searchTerm}
            onChange = {(e) => setSearchTerm(e.currentTarget.value)}
            />
    </div>
    </div>
  )
}

export default Search;