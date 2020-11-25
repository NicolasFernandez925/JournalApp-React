import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Link } from 'react-router-dom';
import { Loading } from '../loading/Loading';
import './stylesSlidesMovies.scss'

export const SliderMovies = ({newMovies}) => {
    const {result, loading, error} = newMovies;
   
    if(loading || !result.results) {
        return <Loading/>
     }

    const {results:movies} = result;
    const imgPath = `https://image.tmdb.org/t/p/original`;
    return (
        <>
            <AwesomeSlider bullets={false}>
                {
                    movies.map( movie =>(
                        <div 
                            data-src={`${imgPath}${movie.backdrop_path}`}
                            key={movie.id}
                        >
                            <div className="slider__info-content">
                                    <h2 className="">{movie.title}</h2>
                                    <p>{movie.overview.substr(0,300)}</p>
                                    <Link 
                                        to={`movie/${movie.id}`}
                                        className="slider__button"
                                    >
                                        Ver más
                                    </Link>
                            </div>
                           
                        </div>
                    ))
                }

            </AwesomeSlider>
        </>
    )
}


