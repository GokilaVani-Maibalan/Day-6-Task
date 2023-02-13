// a & b
class Movie{
    
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        if(this.rating == undefined){
            this.rating = "PG"
        }
    }
}

// c
let movies = [];
movies.push(new Movie("Casino Royale","Eon Productions","PG13") );
movies.push(new Movie("Titanic","Paramount Pictures") );
movies.push(new Movie("Avengers","Marvel Studios"));
movies.push(new Movie("Jumanji","Sony Pictures","PG13"));
movies.push(new Movie("Avengers:Endgame","Walt Disney"));
movies.push(new Movie("Jurassic Park","Universal Pictures","PG13"));
movies.push(new Movie("Harry Potter","Warner Bros","PG"));

function getPG(list){
    let film =[];
    for(pg of list){
        if(pg.rating=="PG"){
        film.push(pg);
        }
    }
    console.log(film)
}
getPG(movies)

//d

let Movie_in = {
    title:"Casino Royale",
    studio:"Eon Productions",
    rating:"PG13"
}
console.log(Movie_in)

