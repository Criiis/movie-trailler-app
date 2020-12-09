import React, { useState, useRef, useEffect} from 'react'
import {BrowserRouter, Link} from 'react-router-dom'
import movieTrailer from 'movie-trailer'
import TrailerVideo from './Video.js'
import styled from 'styled-components'
import styleVariables from '../styles/variables'


const RowContainer = styled.div`
    width: 100%;
    padding: ${styleVariables.padding.containerPadding};
    .movieImage {
        display: flex;
        overflow-x: scroll;
        padding: ${styleVariables.padding.verticalPadding};
        min-height: 200px;

        &::-webkit-scrollbar{
            height: 10px;
            width: 10px;
            background: transparent;
        }
        &::-webkit-scrollbar-thumb:horizontal{
            background: transparent;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 10px;
        }
        &:hover {
            &::-webkit-scrollbar-thumb:horizontal{
                background: white;
            }
        }
        img {
            width: 200px;
            padding: 5px;
            transition: transform 0.2s  ;
            &:hover {
                transform: scale(1.05);
            }
        }
    }
    .trailerContainer {
        width: 100%;

        iframe {
            width: 100%;
            height: 400px;
        }
    }
    .error {
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
    }
`

export default function Row({title, cat, fetchData, status, pageStatus}) {
    const base_URL = 'https://image.tmdb.org/t/p/w200/'
    const [trailerUrl, setTrailerUrl] = useState('')
    const [errorTrailer, setErrorTrailer] = useState('')
    //useRef to know the "this" of the object i clicked
    const movieRef = useRef(null);
    const rowRef = useRef(null);

    const handleMovieClick = (movie) => {
        let movieID;

        let findID = movieRef.current.offsetTop;
        window.scrollTo({ top: findID, behavior: 'smooth'})

        movieTrailer( movie.name == null ? movie.original_title : movie.name, {id: true} )
        .then( url => {
            setTrailerUrl(url)
            setErrorTrailer('')
            movieID = url;
            //set Trailer URL empty if you click in the same movie 
            if(trailerUrl === movieID) {
                setTrailerUrl('')
            }
        })
        //set Trailer URL empty to close the window when it does not found any video
        .catch( error => {
            setTrailerUrl('')
            setErrorTrailer(`unfortunately the trailer for ${movie.name == null ? movie.original_title : movie.name} is not avaliable`)
        })
    }


    //this useEffect will be the one to search for the correct movie when the page loads
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        const getCat = urlParams.get('cat')
        const getid = String(urlParams.get('id'))

        if(cat === getCat) {
            if(status === true && pageStatus === true) {
                let rowRefContent = rowRef.current
                let movieDiv= rowRefContent.querySelector(`#${getid}`)

                if(movieDiv !== null) {
                    let movieName = movieDiv.alt
                    movieTrailer( movieName, {id: true} )
                    .then( url => {
                        setTrailerUrl(url)
                    })
                    .catch( () => {
                        setTrailerUrl('')
                        setErrorTrailer(`unfortunately the trailer for ${movieName} is not avaliable`)
                    })
                }

                let insideContainerRow = rowRefContent.querySelector('.movieImage')
                insideContainerRow.scrollTo({
                    left: movieDiv.offsetLeft - 25,
                    behavior: 'smooth'
                })

            }
        }

    }, [cat, status, pageStatus])


    return (
    <RowContainer id={cat} ref={rowRef}>
        <h2>{title}</h2>
        <div className="movieImage">

        {fetchData.map( movie => (
            <BrowserRouter key={`${movie.id}10`}>
                <Link to={`?cat=${cat}&id=mov_${movie.id}&name=${movie.name == null ? movie.original_title : movie.name}`} onClick={ () => {
                    handleMovieClick(movie)
                }}>
                    <img
                        ref={movieRef}
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
            <div className="trailerContainer">
                {errorTrailer && <p className="error">{errorTrailer}</p>}
                {trailerUrl && <TrailerVideo url={trailerUrl}/>}
            </div>
        </div>
    </RowContainer>
    )
}