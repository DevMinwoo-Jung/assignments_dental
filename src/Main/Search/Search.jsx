import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

  const SearchContainer = styled.div`
    width: 20rem;
    height: 2.5rem;
    border: 1px solid black;
    border-radius: 30px;
    display: flex;
  `

  const Category = styled.div`
    width: 30%;
    height: 100%;
    border: 1px solid pink;
    border-radius: 30px 0 0 30px;
    cursor: pointer;
  `

  const SearchText = styled.div`
    width: 60%;
    height: 100%;
    & input {
      width: 95%;
      height: 2.2rem;
    }
  `

  const SearchIcon = styled.div`
    width: 10%;
    height: 85%;
    font-size: 12px;
    border-radius: 99px;
    border: 1px solid purple;
    text-align: center;
    line-height: 2.5rem;
    cursor: pointer;
    margin-right: 0.3rem;
    margin-top: 0.1rem;
  `
  
const Search = () => {

  return (
    <SearchContainer>
      <Category>

      </Category>
      <SearchText>
        <input type="text" />
      </SearchText>
      <SearchIcon>
        <FontAwesomeIcon icon={faSearch} />
      </SearchIcon>
    </SearchContainer>
  )
}

export default Search