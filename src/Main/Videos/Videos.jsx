import axios from 'axios'
import React from 'react'
import useSWR from 'swr';
import styled from 'styled-components'
  
  const VideosContainer = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid block;
    margin: auto;
    display: grid;
    grid: repeat(3);
  `

const fetcher = async (url) => {
  const result = await axios.get(url)
  return result.data
}
const Videos = () => {
  
  const { data, error } = useSWR('http://trusuite.truabutment.com/api/tada/list', fetcher)

  console.log(data, error)
  return (
    <VideosContainer>

    </VideosContainer>
  ) 
}

export default Videos