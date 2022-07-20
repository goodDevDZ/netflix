import React from 'react'
import './FullVideo.scss'
import { ArrowBack } from '@material-ui/icons'


 const FullVideo = () => {

    const video="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"

  return (
    <div className="full-video">

            <div className="full-video__wrapper">
              <ArrowBack className="full-video__exit"/>
            <span>HOME</span>
            </div>

            <video className="video"  autoPlay progress controls src={video} />
    </div>
  )
}

export default FullVideo;