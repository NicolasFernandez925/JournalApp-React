import { Card } from 'antd';
import React, { Loading, Lazy } from 'react';
import { Link } from 'react-router-dom';
import './moviesCatalog.scss';

export const MoviesCatalog = ({movies}) => {
    const {results} = movies;
    return (    
            <div className="row">
                    {
                        results.map( movie => (
                            <MovieCard 
                                key={movie.id}
                                movie = {movie}/>
                        ))
                    }
            </div>     
    )
}

const MovieCard = ({movie}) => {

    const { id, title, poster_path } = movie;

    const { Meta } = Card;
    const posterPath = `https://image.tmdb.org/t/p/original/${poster_path}`;

    const handleClickScrollTop = () => {
        window.scroll({
         top: 0, 
         left: 0, 
         behavior: 'smooth'
       });
     }

    return (
        <div className="col-12 col-md-2 movie__catalog">
           <Link 
                to= {`/movie/${id}`} 
                onClick={handleClickScrollTop}
           >
                <Card 
                    hoverable
                    style = {{width: 240}}
                    cover = {<img loading="lazy" alt={title} src={posterPath} />}
                    actions = {[<i className="far fa-eye"></i> ]}
                >
                    <Meta title={title}/>
                </Card>
           </Link>
        </div>    
    )
}
