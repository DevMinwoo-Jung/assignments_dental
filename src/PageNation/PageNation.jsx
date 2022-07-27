import React, { useEffect, useState } from 'react'
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

const PageNation = () => {
  const pageLength = [0,1,2,3,4,5,6,7,8,9,10];
  const lastIndex = pageLength.length
  const [showPage, setShowPage] = useState([])
  const [page, setPage] = useState()

  useEffect(() => {
    setPage(0)
  }, [])
  
  useEffect(() => {
    console.log(page)
    setShowPage(pageLength.splice(page, 5))
  }, [page])

  const minusNums = () => {
    setPage((prev) => prev - 1)
  }

  const plusNums = () => {
    setPage((prev) => prev + 1)
  }

  const onSetFirst = () => {
    setPage(0)
  }

  const onSetLast = () => {
    setPage(pageLength.length - 5)
  }

  const onSetPage = (e) => {
    console.log(pageLength / 2)
    setPage(Number(e.target.outerText) - 1)
  }

  return (
    <PageNationContainer>
      <button disabled={page <= 4} onClick={onSetFirst}><BiFirstPage /></button>
      <button disabled={page === 0} onClick={minusNums}><IoIosArrowBack/></button>
        {
          showPage.map((element, index) => 
            page === index 
            ? <span style={{fontWeight: 'bolder'}} key={index}>{element+1}</span>
            : <span onClick={onSetPage} key={index}>{element+1}</span>
          )
        }
      <button disabled={page === lastIndex - 1} onClick={plusNums}><IoIosArrowForward /></button>
      <button disabled={page >= lastIndex - 5} onClick={onSetLast}><BiLastPage /></button>
    </PageNationContainer>
  )
}

export default PageNation