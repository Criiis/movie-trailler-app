import React, { useState, useRef, useEffect} from 'react'
import {BrowserRouter, Link} from 'react-router-dom'
import movieTrailer from 'movie-trailer'
import TraillerVideo from './Video.js'
import styled from 'styled-components'


const RowContainer = styled.div`
    width: 100%;
    padding: 0 20px;
    .movieImage {
        display: flex;
        overflow-y: scroll;
        -ms-overflow-style: none; 
        scrollbar-width: none;
        padding: 15px 0;
        min-height: 200px;
        &::-webkit-scrollbar {
            display:none;
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
    .traillerContainer {
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
    const [traillerUrl, setTraillerUrl] = useState('')
    const [errorTrailler, setErrorTrailler] = useState('')
    //useRef to know the "this" of the object i clicked
    const movieRef = useRef(null);
    const rowRef = useRef(null);

    const handleMovieClick = (movie) => {
        let movieID;

        let findID = movieRef.current.offsetTop;
        window.scrollTo({ top: findID, behavior: 'smooth'})

        movieTrailer( movie.name == null ? movie.original_title : movie.name, {id: true} )
        .then( url => {
            setTraillerUrl(url)
            setErrorTrailler('')
            movieID = url;
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
                        setTraillerUrl(url)
                    })
                    .catch( () => {
                        setTraillerUrl('')
                        setErrorTrailler(`unfortunately the trailler for ${movieName} is not avaliable`)
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
            <div className="traillerContainer">
                {errorTrailler && <p className="error">{errorTrailler}</p>}
                {traillerUrl && <TraillerVideo url={traillerUrl}/>}
            </div>
        </div>
    </RowContainer>
    )
}