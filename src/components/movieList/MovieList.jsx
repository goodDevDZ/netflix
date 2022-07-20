import React ,{useRef, useState } from 'react';
import './MovieList.scss';
import { ArrowForward, ArrowBack } from '@material-ui/icons'
import { Slider } from '@material-ui/core';

import Movie from './movie/Movie'


 const MovieList = ({type}) => {
    const [slideNumber,setSlideNumber]=useState(0)
    const [isGetFinal,setIsGetFinal]=useState(false)
    const [isMoved,setIsMoved]=useState(false)

    const movieListRef=useRef()
    const movieRef=useRef()

    const scroll=(direction)=>{
        const movieWidth=300 +5;
        const old=movieListRef.current.getBoundingClientRect().x - 100

        const calc=10-((window.innerWidth-100)/movieWidth)
        console.log((window.innerWidth-100)/movieWidth)
        console.log(window.innerWidth-100)
        let clickNumber=Math.round(calc)
        
        // if(clickNumber%1!==1){
        //     clickNumber=(Math.round(clickNumber)+1)
        // }
        console.log(clickNumber)

        if(direction==="prev"){
                 if(slideNumber>0){
                    movieListRef.current.style.transform=`translateX(${(movieWidth+old)}px)`
                    setSlideNumber(slideNumber-1)
                 }
                 if(isGetFinal&&slideNumber===2){
                    movieListRef.current.style.transform=`translateX(${(movieWidth+old+100)}px)`
                    setSlideNumber(slideNumber-1)
                 }
            }   
        if(direction==="next"){
                if(slideNumber<=clickNumber-2){
                    movieListRef.current.style.transform=`translateX(${(-movieWidth+old)}px)`
                    setSlideNumber(slideNumber+1)
                }
                if(slideNumber===clickNumber-1){
                    movieListRef.current.style.transform=`translateX(${(-movieWidth+old-100)}px)`
                    setSlideNumber(slideNumber+1)
                    setIsGetFinal(true)
                }
                setIsMoved(true)

        }
    }
  return (
    <div  className="movie-box">
        <div  className="movie-list">
        <div className="container">
            <div className="movie-list__title">{type}</div>
            <ArrowForward className="slider-icon slider-icon--next" onClick={_=>{scroll("next")}} />
                <ArrowBack style={{display:isMoved?"block":"none"}} className="slider-icon slider-icon--prev" onClick={_=>{scroll("prev")}} />
            <div ref={movieListRef} className="movie-list__slider">


                <Movie id={0}movieRef={movieRef} />
                <Movie id={1}movieRef={movieRef} />
                <Movie id={2}movieRef={movieRef} />
                <Movie id={3}movieRef={movieRef} />
                <Movie id={4}movieRef={movieRef} />
                <Movie id={5}movieRef={movieRef} />
                <Movie id={6}movieRef={movieRef} />
                <Movie id={7}movieRef={movieRef} />
                <Movie id={8}movieRef={movieRef} />
                <Movie id={9}movieRef={movieRef} />
            
            
                
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default MovieList;
