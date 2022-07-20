import { AddCircleOutlineOutlined, PlayCircleFilled, ThumbUpOutlined} from '@material-ui/icons'
import React ,{useState} from 'react';

import './Movie.scss'

 const Movie = ({movieRef,id}) => {

  const [isHovered,setIsHovered]=useState(false)

  const trailerVid="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"

  return (
    <div onMouseLeave={_=>setIsHovered(false)} onMouseEnter={_=>setIsHovered(true)} ref={movieRef} className="movie" style={{left:isHovered?`${id*300-100 + id*2.5}px`:""}}>
        <img src="https://fr.web.img2.acsta.net/pictures/22/02/21/18/59/0222383.jpg" alt="" className="movie__img" />

      {
        isHovered&&<>
        <video className="movie__video" src={trailerVid} autoPlay loop />
        <div className="movie-info">
          <div className="movie-info__title">Lucifer</div>
          <div className="movie-info__age">+16</div>
          <div className="movie-info__categorie">ACTION</div>
        </div>
          <div className="movie-desc">
            Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet.
          </div>
      <div className="movie-delay">
        1h 30min 
      </div>
        <div className="movie-actions">
            <button className="movie-actions__btns movie-actions__btns--play">
                <PlayCircleFilled className="icon" />
            </button>
            <div className="movie-actions__btns movie-actions__btns--add">
                <AddCircleOutlineOutlined className="icon" />
            </div>
            <div className="movie-actions__btns movie-actions__btns--like">
                <ThumbUpOutlined  className="icon"/>
            </div>
         </div>
        </>


      }
        
    </div>
  )
}


export default Movie