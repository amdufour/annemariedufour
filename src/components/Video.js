import React from 'react'

const Video = ({src, captions, description, autoplay, loop, controls}) => {
  return (
    <video autoPlay={autoplay} muted loop={loop} controls={controls}>
      <source src={src} type="video/mp4" />
      <track kind="captions" srcLang="en" src={captions} />
      <track kind="description" srcLang="en" src={description} />
    </video>
  )
}

export default Video