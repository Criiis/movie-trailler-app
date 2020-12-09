import React, {useState, useEffect} from 'react'
import mainURL from '../module/mainFetchURL'
import requests from '../module/request'
import { AiFillCaretRight } from 'react-icons/ai';
import movieTrailer from 'movie-trailer'
import TrailerVideo from './Video.js'
import styled from 'styled-components'
import styleVariables from '../styles/variables'

const HeroContainer = styled.div`
    min-height: 90vh;
    position: relative;
    background-position: center;
    @media ${styleVariables.mediaQueries.maxMobile} {
        background-position: right bottom;
    }
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.68531162464986) 30%, rgba(0,0,0,0) 55%, rgba(0,0,0,0) 100%);
        z-index: 1;
    }
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.68531162464986) 15%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 100%);
        @media ${styleVariables.mediaQueries.maxMobile} {
            background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.68531162464986) 20%, rgba(0,0,0,0) 45%, rgba(0,0,0,0) 100%);
        }
    }
    .container {
        width: 100%;
        padding: ${styleVariables.padding.containerPadding};
        max-width: 370px;
        position: absolute;
        bottom: 15%;
        left: 0px;
        z-index: 2;
        @media ${styleVariables.mediaQueries.maxMobile} {
            max-width: 400px;
            top: 50%;
            bottom: auto;
            left: 100px;
            transform: translateX(0%) translateY(-50%);
        }
        p {
            &.error {
                font-weight: bold;
                text-transform: uppercase;
            }
        }
        h1 {
            margin-top: 0;
            font-size: 40px;
            margin-bottom: 15px;
            @media ${styleVariables.mediaQueries.maxMobile} {
                margin-bottom: 20px;
                font-size: 65px;
            }
        }
    }
`
const MainMovieTrailer = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.7);
    z-index: 99;
    div {
        width: 90%;
        padding-top: 50.86%;
        position: relative;
        iframe {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
        }
    }
`

export default function Hero() {
    const [movie, setmovie] = useState([]);
    const base_URL = 'https://image.tmdb.org/t/p/original';
    const [movieTrailerURL, setMovieTrailerURL] = useState('');
    const [errorMovieTrailerURL, seterrorMovieTrailerURL] = useState('');
    

    //function to fetch one movie from the list of movies
    useEffect(() => {
        async function fetchData() {
            const data = await fetch(
                `${mainURL}${requests.fetchMoviesTrending}`
            )
            const request =await data.json();
            let requestChecker = request.results[Math.floor(Math.random()* request.results.length - 1)]

            //if for some reason this request returns undifined this ifstatment will run and callback with the 1st movie of the array!
            if(requestChecker === undefined){
                requestChecker = request.results[0]
            }
            setmovie (
                requestChecker
            )
        }
        fetchData();
    }, [])

    //movie trailer to get the trailer for the movie
    const handleHeroTrailer = (movie) => {
        movieTrailer( movie?.name || movie?.title || movie?.original_name, {id: true} )
        .then( id => {
            setMovieTrailerURL( id )
            seterrorMovieTrailerURL('')
        })
        .catch( () => {
            seterrorMovieTrailerURL('error')
            setMovieTrailerURL('')
        })
    }

    //function to close movie 
    const closeHeroTrailer = () => {
        setMovieTrailerURL('')
    }

    //when press esc key close movie trailer
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                setMovieTrailerURL('')
            }
        };
        window.addEventListener('keydown', handleEsc);
    
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    return (
        <>
            <HeroContainer style={{
                backgroundImage: `url("${base_URL}${movie?.backdrop_path}")`,
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover"
                }}>
                <div className="container">
                    {/* this "?" is an Optional Chaining  */}
                    <h1>{movie?.name || movie?.title || movie?.original_name}</h1>
                    <button onClick={ () => handleHeroTrailer(movie)}><AiFillCaretRight/> Play Trailer</button>
                    {errorMovieTrailerURL && <p className="error">unfortunately the Trailer is not avaliable</p>}
                    <p>{movie?.overview}</p>
                </div>
            </HeroContainer>
            {movieTrailerURL &&
            <MainMovieTrailer onClick={() => closeHeroTrailer()}>
                <div>
                <TrailerVideo url={movieTrailerURL}/>
                </div>
            </MainMovieTrailer>
            }
        </>
    )

}
