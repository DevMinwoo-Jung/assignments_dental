import React from 'react'

const Video = ({ props }) => {
  const { title, category, create_at, create_at_format, create_by, id, length, link, thumb, view} = props.videoData;

  return (
    <div>
      <img src={thumb} alt="" />
    </div>
  )
}

export default Video