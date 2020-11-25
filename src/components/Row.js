import React, { useState, useRef, useEffect} from 'react'
import RowStyle from '../styles/components/Row.module.scss'
import {BrowserRouter, Link} from 'react-router-dom'
import movieTrailer from 'movie-trailer'
import TraillerVideo from './Video.js'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';

function Row({title, cat, fetchData}) {
    const base_URL = 'https://image.tmdb.org/t/p/w200/'
    const [traillerUrl, setTraillerUrl] = useState('')
    const [errorTrailler, setErrorTrailler] = useState('')

    //useRef to know the "this" of the object i clicked
    const movieRef = useRef(null);
    const rowRef = useRef(null);


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

    function moveMoviePostTop() {
        let findID = movieRef.current.offsetTop;
        window.scrollTo({ top: findID, behavior: 'smooth'})
    }

    useEffect(() => {
        window.addEventListener('load', () => {

        const urlParams = new URLSearchParams(window.location.search)
        const getCat = urlParams.get('cat')
        const getid = String(urlParams.get('id'))
        if(cat === getCat) {
            let rowRefContent = rowRef.current
            let movieDiv= rowRefContent.querySelector(`#${getid}`)
            if(movieDiv !== null) {
                console.log('success!')
                let movieName = movieDiv.alt
                movieTrailer( movieName, {id: true} )
                .then( url => {
                    setTraillerUrl(url)
                })
                .catch( () => {
                    setTraillerUrl('')
                    setErrorTrailler(`unfortunately the trailler for ${movieName} is not avaliable`)
                })
            }
        }

        })

    }, [cat])


    return (
        <div className={RowStyle.row} id={cat} ref={rowRef}>
            <h2>{title}</h2>
            <div className={RowStyle.movieImage} id="merda">
            {fetchData.map( movie => (
                <BrowserRouter key={`${movie.id}10`}>
                    <Link ref={movieRef} to={`?cat=${cat}&id=mov_${movie.id}&name=${movie.name == null ? movie.original_title : movie.name}`} onClick={ () => {
                        handleMovieClick(movie)
                        moveMoviePostTop()
                    }}>
                        <img
                            id={`mov_${movie.id}`}
                            key={movie.id}
                            src={`${base_URL}${ movie.poster_path === null ? movie.backdrop_path : movie.poster_path }`}
                            alt={movie.name == null ? movie.original_title : movie.name}
                        />
                    </Link>
                </BrowserRouter>
                ))}
                </div>
                <div>
                <div className={RowStyle.traillerContainer}>
                    {errorTrailler && <p className={RowStyle.error}>{errorTrailler}</p>}
                    {traillerUrl && <TraillerVideo url={traillerUrl}/>}
                </div>
            </div>
        </div>
    )
}


export default Row