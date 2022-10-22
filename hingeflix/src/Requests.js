const API_KEY = "a48e5344f6acaf1fc303d524164353b1";

const requests = {
    fetchTrending: '/trending/all/week?api_key=a48e5344f6acaf1fc303d524164353b1&language=en-US',
    fetchNetflixOriginals: '/discover/tv?api_key=a48e5344f6acaf1fc303d524164353b1&with_networks=213',
    fetchTopRated: '/movie/top_rated?api_key=a48e5344f6acaf1fc303d524164353b1&language=en-US',
    fetchActionMovies: '/discover/movie?api_key=a48e5344f6acaf1fc303d524164353b1&with_genres=28',
    fetchComedyMovies: '/discover/movie?api_key=a48e5344f6acaf1fc303d524164353b1&with_genres=35',
    fetchHorrorMovies: '/discover/movie?api_key=a48e5344f6acaf1fc303d524164353b1&with_genres=27',
    fetchRomanceMovies: '/discover/movie?api_key=a48e5344f6acaf1fc303d524164353b1&with_genres=10749',
    fetchDocumentaries: '/discover/movie?api_key=a48e5344f6acaf1fc303d524164353b1&with_genres=99',
};

export default requests;
