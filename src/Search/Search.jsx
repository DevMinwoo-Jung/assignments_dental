import React, { useRef } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useEffect, useCallback } from 'react'

  const SearchContainer = styled.div`
    width: 20rem;
    height: 2.2rem;
    border: 0.5px solid #A3A3A3;
    border-right: none;
    border-radius: 30px;
    display: flex;
    margin-bottom: 3rem;
    -webkit-box-shadow: 18px 18px 11px -6px #A3A3A3; 
    box-shadow: 18px 18px 11px -6px #A3A3A3;
  `

  const Category = styled.div`
    position: relative;
    width: 30%;
    height: 100%;
    text-align: center;
    line-height: 2.2rem;
    border-radius: 30px 0 0 30px;
    font-size: 10px;
    cursor: pointer;
    font-weight: bolder;
    & span {
      left: 1rem;
      position: absolute;
    }
  `

  const CategorySelect = styled.div`
    justify-content: space-between;
    width: 100%;
    & svg {
      fill: blue;
      width: 2rem;
      right: 0;
      top: 0.6rem;
      position: absolute;
    }
  `

  const SearchText = styled.div`
    width: 60%;
    height: 100%;
    & input {
      width: 95%;
      height: 2.0rem;
      border: none;
      margin-left: 0.5rem;
    }
  `

  const CategoreisDiv = styled.div`
    width: 100px;
    z-index: 100;
    background-color: white;
    position: absolute;
    margin: 3rem 1rem;
    font-size: 0.8rem;
    -webkit-box-shadow: 3px 3px 15px 5px #000000; 
    box-shadow: 3px 3px 15px 5px #000000;
    & p {
      margin: auto;
      border-bottom: 1px solid grey;
      font-weight: bold;
      &:last-child {
        border-bottom: none;
      }
    }
  `

  const SearchIcon = styled.div`
    width: 10%;
    height: 85%;
    font-size: 12px;
    border-radius: 99px;
    text-align: center;
    line-height: 2.5rem;
    cursor: pointer;
    margin-top: 0.1rem;
    margin-right: 0.3rem;
    background: linear-gradient(45deg, #14aee1,#25e5ab);
    color: white;

  `
const Search = (props) => {
  const { onFilterData, setPara, category, onSetResult } = props
  const searchPara = useRef()
  const categories = ['ALL',...category]
  const [filter, setFilter] = useState(categories[0])
  const [show, setShow] = useState(false)

  const goFilterData = () => {
    onFilterData(searchPara.current.value.toUpperCase().trim())
    setPara(searchPara.current.value.toUpperCase().trim())
    searchPara.current.value = ''
  }
  
  const goSetResult = (e) => {
    onSetResult(e.target.innerText)
    setFilter(e.target.innerText)
    searchPara.current.value = ''
  }
  
  const onShow = () => {
    setShow((prev) => !prev)
  }

  return (
    <SearchContainer>
      <Category onClick={onShow}>
        <CategorySelect>
          <span>{filter}</span>
          {
            show === true 
            ?
            <IoIosArrowUp style={{color: 'blue', fontSize: '0.9rem'}}/>
            :
            <IoIosArrowDown style={{color: 'blue', fontSize: '0.9rem'}}/>
          }
        </CategorySelect>
        {
          show === true ?
          <CategoreisDiv>
            {
              categories.map(element => 
                <p key={element} onClick={goSetResult}>{element}</p>
              )
            }
          </CategoreisDiv>
          : null
        }

      </Category>
      <SearchText>
        <input placeholder='Search' ref={searchPara} type="text"/>
      </SearchText>
      <SearchIcon  onClick={goFilterData}>
        <FontAwesomeIcon style={{marginBottom:'0.3rem'}} icon={faSearch}/>
      </SearchIcon>
    </SearchContainer>
  )
}

export default Search