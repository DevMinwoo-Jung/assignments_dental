import React from 'react'
import styled from 'styled-components'

const VideoContainer = styled.div`
  position: relative;
  margin: 0 auto;
  display: block;
  height: 240px;
  & p {
    font-size: 0.8rem;
    font-weight: bolder;
    width: 320px;
    line-break: normal;
  }
`

const ImageDiv = styled.div`
  position: relative;
  & span {
    position: absolute;
    width: 3.5rem;
    height: 1rem;
    font-size: 0.8rem;
    background-color: #1e1e1e;
    color: white;
    bottom: 0.5rem;
    right: 0.5rem;
    text-align: center;
    font-weight: bolder;
  }
  & img {
    width: 20rem;
    height: 10rem;
  }
`

const InformationDiv = styled.div`
  display: flex;
  height: 1.5rem;
  line-height: 1.5rem;
  width: 100%;
  & span {
    margin: auto 1rem;
    font-size: 0.8rem;
  }
`

const LengthSpan = styled.span`
  position: absolute;
  z-index: 100;
`

const CategoryBox = styled.div`
  width: 20%;
  height: 1.5rem;
  line-height: 1.5rem;
  font-size: 0.7rem;
  text-align: center;
  font-weight: bolder;
  color: white;
  background-color: #2a7ff1;
`

const ViewsDiv = styled.div`
  right: 0;
  display: flex;
  position: absolute;
`

const Video = (props) => {
  const { title, category, created_at_format, length, thumb, view} = props.video;
  
  return (
    <VideoContainer>
      <ImageDiv>
        <img src={thumb} alt={title} />
        <LengthSpan>{length}</LengthSpan>
      </ImageDiv>
      <p>{title}</p>
      <InformationDiv>
        <CategoryBox>{category}</CategoryBox>
        <span>{created_at_format}</span>
        <ViewsDiv>
          <span>&#128065;&nbsp;&nbsp;&nbsp;&nbsp;{view}</span>
        </ViewsDiv>
      </InformationDiv>
    </VideoContainer>
  )
}

export default Video