import React from 'react';

export const SearchInput = ({ launchSearch }) => {
  // Keep track of the input.
  let input

  const handleClick = () => {
    launchSearch(input.value)
    input.value = ''
  }
  
  return (
    <div>
      <input type="text" ref={ node => input = node } />
      <button onClick={handleClick}>Search</button>
    </div>
  )
}