import React from 'react'
import styled from 'styled-components'
import Video from './Video';
  
  const VideosContainer = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid block;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    justify-content: center;
  `
const Videos = (props) => {
  const { data } = props

  return (
    <VideosContainer>
      {
        data && data.data.map((element) => 
          <Video key={element.uid} video={element}/>
        )
      }
    </VideosContainer>
  ) 
}

export default Videos