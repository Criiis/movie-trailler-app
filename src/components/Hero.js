import React, {useState, useEffect} from 'react'
import mainURL from '../module/mainFetchURL'
import requests from '../module/request'
import heroStyle from '../styles/components/Hero.module.scss'
import { AiFillCaretRight } from 'react-icons/ai'
import movieTrailer from 'movie-trailer'
import TraillerVideo from './Video.js'

function Hero() {
    const [movie, setmovie] = useState([]);
    const base_URL = 'https://image.tmdb.org/t/p/original';
    const [movieTraillerURL, setMovieTraillerURL] = useState('');
    const [errorMovieTraillerURL, seterrorMovieTraillerURL] = useState('');
    

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

    const handleHeroTrailler = (movie) => {
        movieTrailer( movie?.name || movie?.title || movie?.original_name, {id: true} )
        .then( id => {
            setMovieTraillerURL( id )
            seterrorMovieTraillerURL('')
        })
        .catch( () => {
            seterrorMovieTraillerURL('error')
            setMovieTraillerURL('')
        })
    }

    const closeHeroTrailler = () => {
        setMovieTraillerURL('')
    }

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                setMovieTraillerURL('')
            }
        };
        window.addEventListener('keydown', handleEsc);
    
        return () => {
          window.removeEventListener('keydown', handleEsc);
        };
      }, []);

    return (
        <>
            <div className={`${heroStyle.hero} ${heroStyle.backgroundPosition}`} style={{
                backgroundImage: `url("${base_URL}${movie?.backdrop_path}")`,
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover"
                }}>
                <div className={heroStyle.container}>
                    {/* this "?" is an Optional Chaining  */}
                    <h1>{movie?.name || movie?.title || movie?.original_name}</h1>
                    <button onClick={ () => handleHeroTrailler(movie)}><AiFillCaretRight/> Play Trailler</button>
                    {errorMovieTraillerURL && <p className={heroStyle.error}>unfortunately the trailler is not avaliable</p>}
                    <p>{movie?.overview}</p>
                </div>
            </div>
            {movieTraillerURL &&
            <div onClick={() => closeHeroTrailler()} className={heroStyle.mainMovieTrailler}>
                <div>
                    <TraillerVideo url={movieTraillerURL}/>
                </div>
            </div>
            }
            <div>
            </div>
        </>
    )

}

export default Hero
