import { PlayArrow, Info } from '@material-ui/icons';

import React from 'react'

import './Features.scss'

 const Features = () => {
  return (
    <div className="features">
        <div className="features__box">
            <img src="https://upload.wikimedia.org/wikipedia/fr/0/01/Lucifer_%28s%C3%A9rie_t%C3%A9l%C3%A9vis%C3%A9e%29.png" className="features__box__img" />
            <div className="features__box__desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, voluptatibus?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, voluptatibus?
            </div>
            <div className="features__box__btns">
                <button className="btn btn--play">
                    <PlayArrow className="icons"/>
                    <span>Play</span>
                </button>
                <button className="btn btn--info">
                    <Info className="icons"/>
                    <span>info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Features ;
