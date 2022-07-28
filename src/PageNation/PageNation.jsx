import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BiFirstPage, BiLastPage } from 'react-icons/bi'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useMemo } from 'react'


const PageNationContainer = styled.div`
  cursor: default;
  position: absolute;
  bottom: 5rem;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  width: 20rem;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  & span {
    line-height: 100%;
    font-size: 1rem;
    letter-spacing: 5px;
    cursor: pointer;
  }
  & button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    &:disabled {
      color: grey;
      cursor: default;
    }
  }
`

const PageNation = (props) => {
  const { page, perPage, total, onSearchByPage, change, onSetPageFromMain, setPage } = props
  const pageNationNum = Math.ceil( total / perPage) === 0 ? 1 : Math.ceil( total / perPage)
  const pageLength = useMemo(() => [...'x'.repeat(pageNationNum).split('').keys()], [pageNationNum])
  const lastIndex = pageLength.length
  const [showPage, setShowPage] = useState([])
  const [pages, setPages] = useState(0)

  useEffect(() => {
    setPages(0)
  }, [])
  useEffect(() => {
    setShowPage(pageLength)
  }, [pageLength])

  const minusNums = (e) => {
    setPages((prev) => prev - 1)
    onSearchByPage(Number(pages - 2))
  }

  const plusNums = (e) => {
    setPages((prev) => prev + 1)
    onSearchByPage(Number(pages + 2))
  }

  const onSetFirst = () => {
    setPages(0)
    onSearchByPage(1)
  }

  const onSetLast = () => {
    setPages(pageLength.length - 1)
    onSearchByPage(pageLength.length)
  }

  const onSetPage = (e) => {
    setPages(Number(e.target.outerText) - 1)
    onSearchByPage(Number(e.target.outerText))
  }

  const onSetFilteredPage = (e) => {
    setPage(Number(e.target.outerText))
  }

  const numPages = Math.ceil(total / perPage);


  return (
    <PageNationContainer>
      {
        change === false 
        ?
        <>
          <button disabled={pages === 0} onClick={onSetFirst}><BiFirstPage /></button>
          <button disabled={pages === 0} onClick={minusNums}><IoIosArrowBack/></button>
            {
              showPage.map((element, index) => 
              pages === index
                ? <span style={{fontWeight: 'bolder'}} key={index}>{element+1}</span>
                : <span onClick={onSetPage} key={index}>{element+1}</span>
              )
            }
          <button disabled={pages + 1 === lastIndex} onClick={onSetLast}><IoIosArrowForward /></button>
          <button disabled={pages + 1 === lastIndex} onClick={plusNums}><BiLastPage /></button>
        </>
        :
        <>
          <button disabled={pages + 1 === lastIndex} onClick={() => setPage((prev) => prev-1)}><BiFirstPage /></button>
          <button disabled={pages + 1 === lastIndex} onClick={() => setPage((prev) => prev-1)}><IoIosArrowBack /></button>
            {
              showPage.map((element, index) => (
                page === index + 1
                ? <span style={{fontWeight: 'bolder'}} key={index}>{element+1}</span>
                : <span onClick={onSetFilteredPage} key={index}>{element+1}</span>
              ))
            }
          <button disabled={page === numPages} onClick={() => setPage((prev) => prev+1)}><IoIosArrowForward /></button>
          <button disabled={page === numPages} onClick={() => setPage((prev) => prev+1)}><BiLastPage /></button>
        </>
      }
    </PageNationContainer>
  )
}

export default PageNation