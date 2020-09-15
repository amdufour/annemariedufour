import React from 'react'

const Video = ({src, captions, description}) => {
  return (
    <video autoPlay muted loop>
      <source src={src} type="video/mp4" />
      <track kind="captions" srcLang="en" src={captions} />
      <track kind="description" srcLang="en" src={description} />
    </video>
  )
}

export default Video