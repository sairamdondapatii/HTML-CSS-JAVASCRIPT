// curosel
let images = ["./images/1.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg","./images/5.jpg"];
    let i = 0;

    function right(){
        i++;
        if(i==images.length){
            i=0;
        }
        let image = document.querySelector('#container>img');
        image.src=images.at(i);  
         
    }

    function left(){
        i--;
        if(i== -(images.length+1)){
            i=0;
        }
        let image = document.querySelector('#container>img');
        image.src=images.at(i); 
       
}

let id = setInterval(right,4000);

// movies 
let trendingMovies =[
    {
    "Title": "The Avengers",
    "Year": "2012",
    "imdbID": "tt0848228",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
    "Title": "Avengers: Endgame",
    "Year": "2019",
    "imdbID": "tt4154796",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
    },
    {
    "Title": "Avengers: Infinity War",
    "Year": "2018",
    "imdbID": "tt4154756",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
        "Title": "Baahubali: The Beginning",
        "Year": "2015",
        "imdbID": "tt2631186",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYWVlMjVhZWYtNWViNC00ODFkLTk1MmItYjU1MDY5ZDdhMTU3XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_SX300.jpg"
        },
        {
        "Title": "Baahubali 2: The Conclusion",
        "Year": "2017",
        "imdbID": "tt4849438",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMmY0YzM0NmEtMzVhNi00YWE2LWFiNmItYjllYmFiZTRkMDkxXkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_SX300.jpg"
        },
        {
        "Title": "Baahubali: Crown of Blood",
        "Year": "2024–",
        "imdbID": "tt32263319",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjllNWJjYjYtZjcyYy00M2I4LTg5NTYtZjkyNWViMTg2YjQ4XkEyXkFqcGdeQXVyNzkyNTg2NzI@._V1_SX300.jpg"
        },
    {
    "Title": "Ultimate Avengers: The Movie",
    "Year": "2006",
    "imdbID": "tt0491703",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg"
    },
    {
    "Title": "The Avengers",
    "Year": "1961–1969",
    "imdbID": "tt0054518",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWI4ZWM4ZWQtODk1ZC00MzMxLThlZmMtOGFmMTYxZTAwYjc5XkEyXkFqcGdeQXVyMTk0MjQ3Nzk@._V1_SX300.jpg"
    },
    {
    "Title": "Ultimate Avengers II",
    "Year": "2006",
    "imdbID": "tt0803093",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
    "Title": "Avengers Assemble",
    "Year": "2012–2019",
    "imdbID": "tt2455546",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg"
    },
    {
        "Title": "The Avengers",
        "Year": "2012",
        "imdbID": "tt0848228",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
        "Title": "Avengers: Endgame",
        "Year": "2019",
        "imdbID": "tt4154796",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
        },
        {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title": "Avengers: Age of Ultron",
        "Year": "2015",
        "imdbID": "tt2395427",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
        },
        {
        "Title": "The Avengers",
        "Year": "1998",
        "imdbID": "tt0118661",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTA4ZmZlZWQtZDRlYS00ZWZhLTk0MzEtYjExMGIzMTBlZDNlXkEyXkFqcGc@._V1_SX300.jpg"
        },
        {
        "Title": "The Avengers: Earth's Mightiest Heroes",
        "Year": "2010–2012",
        "imdbID": "tt1626038",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
        },
        {
        "Title": "Ultimate Avengers: The Movie",
        "Year": "2006",
        "imdbID": "tt0491703",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg"
        },
        {
        "Title": "The Avengers",
        "Year": "1961–1969",
        "imdbID": "tt0054518",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWI4ZWM4ZWQtODk1ZC00MzMxLThlZmMtOGFmMTYxZTAwYjc5XkEyXkFqcGdeQXVyMTk0MjQ3Nzk@._V1_SX300.jpg"
        },
        {
        "Title": "Ultimate Avengers II",
        "Year": "2006",
        "imdbID": "tt0803093",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
        "Title": "Avengers Assemble",
        "Year": "2012–2019",
        "imdbID": "tt2455546",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg"
        }];

let actionMovies=[
    {
    "Title": "The Lego Movie",
    "Year": "2014",
    "imdbID": "tt1490017",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg"
    },
    {
    "Title": "The Simpsons Movie",
    "Year": "2007",
    "imdbID": "tt0462538",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2I0MmE5N2ItMWJkOS00NTU4LTg4ZDctMGJiNDdkM2E4MDU3XkEyXkFqcGdeQXVyMTU2OTg4NjIy._V1_SX300.jpg"
    },
    {
    "Title": "El Camino: A Breaking Bad Movie",
    "Year": "2019",
    "imdbID": "tt9243946",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjk4MzVlM2UtZGM0ZC00M2M1LThkMWEtZjUyN2U2ZTc0NmM5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg"
    },
    {
    "Title": "Scary Movie",
    "Year": "2000",
    "imdbID": "tt0175142",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
    "Title": "The Super Mario Bros. Movie",
    "Year": "2023",
    "imdbID": "tt6718170",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGZlN2EzOTYtMzUzOS00NTM3LTg0MTQtZDVjZGM4YmJlNWNhXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
    "Title": "Bee Movie",
    "Year": "2007",
    "imdbID": "tt0389790",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE1MDYxOTA4MF5BMl5BanBnXkFtZTcwMDE0MDUzMw@@._V1_SX300.jpg"
    },
    {
    "Title": "Scary Movie 2",
    "Year": "2001",
    "imdbID": "tt0257106",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzQxYjU1OTUtYjRiOC00NDg2LWI4MWUtZGU5YzdkYTcwNTBlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
    "Title": "The Lego Batman Movie",
    "Year": "2017",
    "imdbID": "tt4116284",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
    },
    {
    "Title": "Scary Movie 3",
    "Year": "2003",
    "imdbID": "tt0306047",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDE2NTIyMjg2OF5BMl5BanBnXkFtZTYwNDEyMTg3._V1_SX300.jpg"
    },
    {
    "Title": "Scary Movie 4",
    "Year": "2006",
    "imdbID": "tt0362120",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZmFkMzc2NTctN2U1Ni00MzE5LWJmMzMtYWQ4NjQyY2MzYmM1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
    }
    ]

let trendingMoviesList = document.querySelector('#trending-movies');
let actionMoviesList = document.querySelector('#action-movies');

trendingMoviesUpdate(trendingMovies)
actionMoviesUpdate(actionMovies)
function trendingMoviesUpdate(data){
    trendingMoviesList.innerHTML='';
    data.forEach((ele)=>{
        let img = document.createElement('img');
        img.src = ele.Poster;
        let Title = document.createElement('p');
        Title.innerText = `${ele.Title}(${ele.Year})`;
        let div1 = document.createElement('div');
        div1.id = 'grid-items';
        div1.append(img,Title);
        trendingMoviesList.append(div1)
    }) 
}

function actionMoviesUpdate(data){
    data.forEach((ele)=>{
        let img = document.createElement('img');
        img.src = ele.Poster;
        let Title = document.createElement('p');
        Title.innerText = `${ele.Title}(${ele.Year})`;
        let div1 = document.createElement('div');
        div1.id = 'grid-items';
        div1.append(img,Title);
        actionMoviesList.append(div1)
    }) 
}

let search = document.getElementById('search');
search.addEventListener('click',()=>{
    let input =document.querySelector('#search-box>input');
    input.style.visibility='visible';
    window.location.href = './search.html'
    console.log('clickedS')
})


async function getMovies(){
    try {
        let query = document.querySelector('#input').value;
        let response = await fetch(`https://www.omdbapi.com/?apikey=96030101&s=${query}`);
        let Data= await response.json();
        let data2 = Data.Search
        document.querySelector('#search-movies-container>h1').innerText=`Showing Results For '${query}'`;
        // console.log(data2);
        if(data2){
           trendingMoviesUpdate(data2)
        }else{
            trendingMoviesList.innerHTML=null;
            let p= document.createElement('p');
            p.innerHTML=`no movie name found with ${query} try different movies`;
            trendingMoviesList.append(p)
        }

    } catch (error) {
        console.log(error)
    }
}