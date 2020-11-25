
import React, {useState, useEffect} from 'react';
import { Loading } from '../components/loading/Loading';
import { MoviesCatalog } from '../components/moviesCatalog/MoviesCatalog';
import { PaginationMovies } from '../components/pagination/Pagination';
import { API_KEY, URL_API } from '../utils/constant';

export const NewMovies = () => {

   const [movieList, setMovieList] = useState([]);
   const [page, setPage] = useState(1);
 
   useEffect(() => {
       
        (async() => {
                const response = await fetch(`
                        ${URL_API}/movie/now_playing?api_key=${API_KEY}&lenguaje=es-ES&page=${page}`
                );

                const movies = await response.json();
                setMovieList(movies);
       
        })();

        
   }, [page])

   const onChangePage = page => {
       setPage(page);
   }

    return ( 
        <div className=" container pt-5">
            <div className="row">
                <div className="col-12">
                    <h2>Ultimos lanzamientos</h2>
                </div>
            </div>
            { movieList.results ? (
                <div className="row">
                    <div className="col-12">
                        <MoviesCatalog movies = {movieList}/>
                    </div>
                    <div className="col-12">
                        <PaginationMovies 
                            currentPage={movieList.page }
                            totalItems ={movieList.total_results}
                            onChangePage = {onChangePage}
                        />
                    </div>
                </div> 
            ) : (
                <div className="row">
                    <div className="col-12">
                        <Loading />
                    </div>
                </div>

            )}        
            <div className="row container-fluid">
                <div className="col-12">
                
                </div>
            </div>
        </div>
    )
}
