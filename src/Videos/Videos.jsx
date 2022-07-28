import React from 'react'
import styled from 'styled-components'
import Video from './Video'
  
  const VideosContainer = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid block;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    justify-content: center;
    z-index: 1;
    & img {
      z-index: 1;
      position: relative;
    }
  `

  const CannotFind = styled.div`
    width: 100%;
    font-size: 1rem;
    text-align: center;
    line-height: 40rem;
  `
const Videos = (props) => {
  const { result, change, offset, perPage, total } = props

  if (total === 0) {
    return (
      <CannotFind>
        <h2>검색결과를 찾을 수 없습니다.</h2>
      </CannotFind>
    )
  }



  return (
    <VideosContainer>
      {
        change === true 
        ?
        <>
          {
            result && result.slice(offset, offset + perPage).map(element => 
              <Video key={element.uid} video={element}/>
            )
          }
        </>
        :
        <>
        {
          result && result.map((element) => 
            <Video key={element.uid} video={element}/>
          )
        }
        </>
      }

    </VideosContainer>
  ) 
}

export default Videos