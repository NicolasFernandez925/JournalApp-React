import { Button } from 'antd';
import React, {useState } from 'react';

import { usePalette } from 'react-palette'
import { useHistory, useParams } from 'react-router-dom';
import { Loading } from '../components/loading/Loading';
import { ModalVideo } from '../components/modalVideo/ModalVideo';
import { MovieList } from '../components/movieList/MovieList';
import { useFetch } from '../hooks/useFetch';
import { API_KEY, URL_API } from '../utils/constant';


import './stylesPages/movie.scss';

export const Movie = () => {

    const {id} = useParams();

        const movieInfo= useFetch(
            `${URL_API}/movie/${id}}?api_key=${API_KEY}&language=es-ES`
        )

    if(movieInfo.loading || !movieInfo.result){
        return <Loading/>
    }
    return (
        <RenderMovie movie={movieInfo} id={id}/>
    )
}


const RenderMovie = ({movie, id}) => {
    
    const {result:{backdrop_path, poster_path}} = movie;

    const backDropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`
    const { data } = usePalette(backDropPath);

    // me traigo las peliculas similares al id de la pelicula que se selecciono
    const movies= useFetch(
        `${URL_API}/movie/${id}/similar?api_key=${API_KEY}&language=es-ES&page=1`
    )

    if(movies.loading || !movies.result.results){
       return <Loading />
    }

    return (
        <>
            <div 
                className="movie__bg container-fluid" 
                style={{ backgroundImage: `URL('${backDropPath}')`}}        
            >
                <div className="movie__dark"></div>
    
                <div className="row movie__content ">
                    <div className="col-12 col-md-6 movie__poster">      
                        <PosterMovie image={poster_path}/>
                    </div>  
                    <div className="col-12 col-md-6">
                        <MovieInfo data={data} movieInfo ={movie}/>
                    </div>  
                </div>
            </div>

            {
                (movies.result.results.length > 0) && (
                    <div className="container">
                        <h2 className="text-center py-5">Peliculas similares</h2>          
                        <MovieList movies={movies} />
                    </div>
                )
            }      

        </>
    )
}


const PosterMovie = ({image}) => {
    
    const posterPath = `https://image.tmdb.org/t/p/original${image}`;

    return <div style={{backgroundImage: `url('${posterPath}')`}} />
}

const MovieInfo = ({movieInfo,data}) =>{

    const {id, genres, title, overview, release_date} = movieInfo.result;
    const [isVisibleModal, setIsVisibleModal]  = useState(false);

   const history =  useHistory();

   const handleReturn = () =>{
       
        if(history.length <= 2){
            history.push('/');
        }
        else{
            history.goBack();
        }   
    }

    const videoMovie = useFetch(
        `${URL_API}/movie/${id}/videos?api_key=${API_KEY}&language=es-Es`
    )

    const openModal = () => setIsVisibleModal(true);
    const closeModal = () => setIsVisibleModal(false);

    // funcion modal
    const renderVideo = () => {
        if(videoMovie.result) {
            if(videoMovie.result.results.length > 0) {
                
                return (
                    <>
                        <i className="far fa-play-circle"></i>
                        <Button            
                            onClick ={openModal}
                        >
                            Ver trailer
                        </Button>
                        <ModalVideo 
                            videoKey={videoMovie.result.results[0].key} 
                            videoPlatform ={videoMovie.result.results[0].site}
                            isOpen ={isVisibleModal}
                            close = {closeModal}                   
                        />
                    </>
                )
            }
        }
    }
   
    return (
         <>
            <div className="movie__info-header">
                <h2 style={{color: `${data.vibrant}`}}>
                    {title}
                    
                </h2>
                <span className="movie__release-date">{release_date}</span>
                {renderVideo()}
                <p>{overview}</p>
                <h4>Géneros</h4>
                <ul>
                    {
                        genres.map( genre => (
                            <li
                                key={genre.id}
                            >
                                {genre.name},
                            </li>
                         ))
                    }
                    
                </ul>
                <div className="row">
                    <div className="col-12">
                        <button
                            style={{color: `${data.vibrant}`,
                                    backgroundColor: `${data.darkVibrant}`}}
                            className="movie__buttom_return"
                            onClick={handleReturn}
                        >
                           <i class="fas fa-long-arrow-alt-left"></i> Volver atrás
                        </button>
                    </div>
                </div>

            </div>
         </>
    )
}

