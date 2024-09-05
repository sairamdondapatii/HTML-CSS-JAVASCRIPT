// searching movies by name 
let trendingMoviesList = document.querySelector('#trending-movies');
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
            document.querySelector('#search-movies-container>h1').innerText=`No Search Results For '${query}' try different`;
            
        }

    } catch (error) {
        console.log(error)
    }
}

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