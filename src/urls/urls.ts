const baseURL="https://api.themoviedb.org/3/"

const movie='discover/movie'
const genre = 'genre/movie/list'
const photoURL=`https://image.tmdb.org/t/p/w500`
const details = 'movie'

const urls={
    movie,
    genre,
    photoURL,
    details:{
        byId:(id:number|string):string =>`${details}/${id}`
    },
}

export {urls,baseURL}