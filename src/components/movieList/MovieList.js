import React  from 'react';
import { Link } from 'react-router-dom';
import './movieList.scss'

export const MovieList = ({movies}) => {
    
    const {result, loading} = movies;
    

    if(loading || !result.results){
        return '';
    }

    const {results:moviesPopulate} = result;

    return (
        <div className="movieList__container">
            
            <div className="movieList__card">
                {
                    moviesPopulate.map(movie => (
                        <ItemMovie 
                            key={movie.id}
                            movie={movie}
                           
                        />
                    ))
                }
               
            </div>
        </div>
    )
}

const ItemMovie = ({movie}) => {
    const {id, poster_path, title} = movie;

    const handleClickTop = () => {
       window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      });
    }

    return (
        <li className="movieList__item-li">
            <img 
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt=""
                className="movieList__img"
            />
            <p className="">{title}</p>
            <Link 
                to={`/movie/${id}`}
                className="movieList__buttom-movie"
                onClick={handleClickTop}
            >
            <i 
                className="fas fa-arrow-right">
                
            </i>
            </Link>
           
        </li>
    )
}
