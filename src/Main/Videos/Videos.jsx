import axios from 'axios'
import React from 'react'
import useSWR from 'swr';
import styled from 'styled-components'
import Video from './Video';
  
  const VideosContainer = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid block;
    margin: auto;
    display: grid;
    grid: repeat(3);
  `

const Videos = () => {
  const fetcher = async (url) => {
    const result = await axios.get(url)
    return result.data
  }
  const { data, error } = useSWR('http://trusuite.truabutment.com/api/tada/list', fetcher)

  const viodeData = data?.data
  console.log(viodeData[0])

  // console.log(data.data.length)
  return (
    <VideosContainer>
      
      {/* {
        viodeData.map((videoData) => 
          <Video key={videoData.uid} videoData={videoData}/>
        )
      } */}
    </VideosContainer>
  ) 
}

export default Videos