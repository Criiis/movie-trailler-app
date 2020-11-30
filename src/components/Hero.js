import React, {useState, useEffect} from 'react'
import mainURL from '../module/mainFetchURL'
import requests from '../module/request'
import heroStyle from '../styles/components/Hero.module.scss'
import { AiFillCaretRight } from 'react-icons/ai';
import movieTrailer from 'movie-trailer'

function Hero() {
    const [movie, setmovie] = useState([]);
    const base_URL = 'https://image.tmdb.org/t/p/original';
    const [movieTraillerURL, setMovieTraillerURL] = useState('');
    const [errorMovieTraillerURL, seterrorMovieTraillerURL] = useState('');
    

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

    //movie trailler to get the trailler for the movie
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

    //function to close movie 
    const closeHeroTrailler = () => {
        setMovieTraillerURL('')
    }

    //when press esc key close movie trailler
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
                    <iframe title={movie?.name || movie?.title || movie?.original_name} src={`https://www.youtube.com/embed/${movieTraillerURL}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                </div>
            </div>
            }
            <div>
            </div>
        </>
    )

}

export default Hero
