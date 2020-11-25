import React from 'react';
import { MovieList } from '../components/movieList/MovieList';
import { SliderMovies } from '../components/sliderMovies/SliderMovies';
import { useFetch } from '../hooks/useFetch';
import { URL_API, API_KEY } from '../utils/constant';

import './stylesPages/home.scss';

export const Home = () => {

    const newMovies =  useFetch(
       `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`
    );

    const popularMovies = useFetch(
       `${URL_API}/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`
    )

    const topRatedMovies = useFetch(
        `${URL_API}/movie/top_rated?api_key=${API_KEY}&language=es-ES&page=1`
    )

    return (
        <>
            <SliderMovies newMovies={newMovies}/>
            <div className="container-fluid home__container">
                <div className="row">
                    <h2 >Películas populares</h2>
                    <div className="col-12 col-md-12 ">
                        <MovieList movies={popularMovies}/>
                    </div>
                    <h2>Top mejores películas puntuadas</h2>
                    <div className="col-12 col-md-12">
                        <MovieList movies={topRatedMovies}/>
                    </div> 
                </div>   
            </div>  
              
        </>
    )
}
