import React, { useState, useEffect } from 'react'
import mainURL from '../module/mainFetchURL'
import RowStyle from '../styles/components/Row.module.scss'
import {BrowserRouter, Link} from 'react-router-dom'
import movieTrailer from 'movie-trailer'
import TraillerVideo from './Video.js'

class MovieTyle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movieID: this.props.id
        }
    }
    render() {
        return(
            <img id={this.props.id} src={this.props.src} alt={this.props.alt}/>
        )
    } 
}


function Row({title, fetchURL}) {
//create a fecth data 
    const [movies, setMovies] = useState([]);
    const base_URL = 'https://image.tmdb.org/t/p/w300/';
    const [traillerUrl, setTraillerUrl] = useState('');
    const [errorTrailler, setErrorTrailler] = useState('');

    //A snippet of code which runs based on a specific condition
    //other words this snippet will call the TMDB and pull the information we need from it (images of the movies) 
    useEffect(() => {
        //this useEffects run once when the "row" loads and don't run again 
        async function fetchData() {
            const data = await fetch(
                `${mainURL}${fetchURL}`
            )

            const request = await data.json();
            setMovies(request.results);
            return request;
        }
        fetchData();
        //if you are using a variable pulling from outside if the "useEffect", we have to pass it below in this case "fetchURL"
    }, [fetchURL]);

    const handleMovieClick = (movie) => {
        let movieID;
        movieTrailer( movie.name == null ? movie.original_title : movie.name, {id: true} )
        .then( url => {
            setTraillerUrl(url)
            movieID = url;
            setErrorTrailler('')
            //set Trailler URL empty if you click in the same movie 
            if(traillerUrl === movieID) {
                setTraillerUrl('')
            }
        })

        //set Trailler URL empty to close the window when it does not found any video
        .catch( error => {
            setTraillerUrl('')
            setErrorTrailler(`unfortunately the trailler for ${movie.name == null ? movie.original_title : movie.name} is not avaliable`)
        })
    }

    return (
        <div className={RowStyle.row}>
            <h2>{title}</h2>
            <div className={RowStyle.movieImage}>
            {movies.map( movie => (
                <BrowserRouter key={movie.id}>
                    <Link to={`?id=${movie.id}`} onClick={ () => handleMovieClick(movie)}>
                        <MovieTyle
                            id={movie.id}
                            key={`${movie.id}10`}
                            src={`${base_URL}${ movie.poster_path === null ? movie.backdrop_path : movie.poster_path }`}
                            alt={movie.name == null ? movie.original_title : movie.name}
                        />
                    </Link>
                </BrowserRouter>
                ))}
            </div>
            {errorTrailler && <p className={RowStyle.error}>{errorTrailler}</p>}
            {traillerUrl && 
            <div className={RowStyle.traillerContainer}>
                <TraillerVideo url={traillerUrl}/>
            </div>
            }
        </div>
    )
}


export default Row