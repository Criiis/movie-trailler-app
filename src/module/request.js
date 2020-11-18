// api URL requests 
const API_KEY = "d5f97f79b5eba255553c61fd70da79bb";

const requests = {
    fetchTrending:  `/trending/all/week?api_key=${API_KEY}&language=en-UK`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-UK`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchMoviesTrending: `/trending/movie/day?api_key=${API_KEY}&language=en-UK`,
}

export default requests;