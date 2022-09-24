
const baseUrl = process.env.REACT_APP_API_BASE_URL;
const api_key = process.env.REACT_APP_MOVIEDB_KEY;
const getDefaultOptions = {
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWRlMWZmMjY0OTJkN2RjMGJlNDczNjdiMjg0YmVhMSIsInN1YiI6IjYzMmU1ZWFlYzUyNWM0MDA3ZmVkM2EyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ntBD0NhnUI3owJzIlhNVP_yGt77WBGlt5gPEtPzxPxQ",
        "Content-Type" : "application/json;charset=utf-8"
      },
    method: "GET"
}

const api = {
    getPopularMovies: () => 
        fetch(`${baseUrl}/movie/popular?api_key=${api_key}`, getDefaultOptions)
            .then((response: any) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(`${response.status} ${response.statusText}`);
        }),
    getTopRatedMovies: () => 
        fetch(`${baseUrl}/movie/top_rated?api_key=${api_key}`, getDefaultOptions)
            .then((response: any) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(`${response.status} ${response.statusText}`);
        }),
    searchMovies: (val: string) => 
        fetch(`${baseUrl}/search/movie?api_key=${api_key}&query=${val}`, getDefaultOptions)
            .then((response: any) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(`${response.status} ${response.statusText}`);
        }),
}

export default api;