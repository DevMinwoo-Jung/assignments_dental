import React from 'react'
import styled from 'styled-components'
import { BiFirstPage, BiLastPage } from 'react-icons/bi'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const PageNationContainer = styled.div`
  cursor: pointer;
  margin: 2rem auto 0;
  width: 20rem;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  & span {
    line-height: 100%;
    font-size: 1rem;
    letter-spacing: 5px;
  }
  & button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`

const PageNationVer = (props) => {
  const { limit, page, total, onSetPage } = props
  const numPages = Math.ceil(total / limit);

  const goSetPage = (e) => {
    onSetPage(e)
  } 

  return (
    <PageNationContainer>
      <button disabled={page === 0} onClick={() => onSetPage(0)}><BiFirstPage /></button>
      <button disabled={page === 0} onClick={()=> goSetPage(page - 1)}><IoIosArrowBack/></button>
        {
          Array(numPages)
          .fill()
          .map((element, index) => (
            page === index
            ? <span style={{fontWeight: 'bolder'}} key={index}>{element+1}</span>
            : <span onClick={onSetPage} key={index}>{element+1}</span>
          ))
        }
      <button disabled={page === numPages} onClick={goSetPage(page + 1)}><IoIosArrowForward /></button>
      <button disabled={page === numPages} onClick={goSetPage(numPages)}><BiLastPage /></button>
    </PageNationContainer>
  )
}

export default PageNationVer