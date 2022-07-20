import React from 'react'
import Features from '../../components/Features/Features';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header';
import MovieList from '../../components/movieList/MovieList';


import './Home.scss'

 const Home = () => {
  return (
    <div className="home">
    <Header />
    <Features />
    <MovieList type={"Suggession"}/>
    <MovieList type={"Actions"}/>
    <MovieList type={"Drama"}/>
    <MovieList type={"Drama"}/>
    <MovieList type={"Drama"}/>
    <MovieList type={"Drama"}/>
    <MovieList type={"Drama"}/>
    <MovieList type={"Drama"}/>
    <Footer />

    
    </div>
  )
}
export default Home;