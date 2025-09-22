/* 
Soe Kaythi
Homework 3 - objects and exceptions handling in JS
*/
  
class Movie {
    constructor(title, director, year) {
        this.title = title;
        this.director = director;
        this.year = year;
    }

    getDetails() {
        return `${this.title}, directed by ${this.director}, released in ${this.year}`;
    }
}
class MovieCollection {
    constructor() {
        this.movies = [];
    }

    addMovie(movie) {
        try {
            if (!(movie instanceof Movie)) {
                throw new Error("Invalid movie object");
            }
            this.movies.push(movie);
        } catch (error) {
            console.error(error.message);
        }
    }

    removeMovie(title) {
        const index = this.movies.findIndex(movie => movie.title === title);
        if (index === -1) {
            throw new Error("Movie not found");
        }
        this.movies.splice(index, 1);
    }
    showAllMovies() {
        return this.movies.map(movie => movie.getDetails());
    }   
    
}