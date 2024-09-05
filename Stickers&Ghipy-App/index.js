let api_key ='DS3bXTWFl9L2wJOZxrnvRtVYXCqUeTHA';
let gifsearch = document.querySelector('#gifsearch');
let stickersearch = document.querySelector('#stickersearch');
let home = document.querySelector('#home');

// fetching data from api 
async function gettingData(){
    home.style.backgroundColor = 'darkcyan';
    gifsearch.style.backgroundColor = '';
    stickersearch.style.backgroundColor = '';
    try {
        let url = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}`
        let response = await fetch(url);
        let data = await response.json();
        updateTrendingData(data.data);
    } catch (error) {
        console.log(error)
    }
}

gettingData();
// updating or appending data to dom 

const updateTrendingData = (data)=>{
    let trendingData = document.querySelector('#trending');
    trendingData.innerHTML='';
    data.forEach(element => {
        let image = document.createElement('img');
        image.src = element.images.downsized.url;
        image.onclick = ()=>{
            details(element.id);
        }
        trendingData.append(image);
    });
}


// details page function
function details(id){
    localStorage.setItem('id',JSON.stringify(id));
    window.location.href='./details.html'
}

// change content based on search
async function changeContent(){
    try {
        let query = document.querySelector('#search').value;
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${query}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data.data);
        updateTrendingData(data.data);
    } catch (error) {
        console.log(error)
    }
}

// sticker search

async function stickerSearch(){
    try {
        gifsearch.style.backgroundColor = '';
        home.style.backgroundColor = '';
        stickersearch.style.backgroundColor = 'darkcyan';
        let url = `https://api.giphy.com/v1/stickers/trending?api_key=DS3bXTWFl9L2wJOZxrnvRtVYXCqUeTHA&limit=50&offset=0&rating=g&bundle=messaging_non_clips`;
        let response = await fetch(url);
        let data = await response.json();
        let result = data.data;
        console.log(data.data);
        let trendingData = document.querySelector('#trending');
        trendingData.innerHTML='';
        result.forEach(element => {
            let image = document.createElement('img');
            image.src = element.images.fixed_height.url;
            image.onclick = ()=>{
                details(element.id);
            }
            trendingData.append(image);
    });
    } catch (error) {
        console.log(error)
    }
}
async function gifSearch(){
    try {
        home.style.backgroundColor = '';
        stickersearch.style.backgroundColor = '';
        gifsearch.style.backgroundColor = 'darkcyan';
        let url = `https://api.giphy.com/v1/gifs/trending?api_key=DS3bXTWFl9L2wJOZxrnvRtVYXCqUeTHA&limit=25&offset=0&rating=g&bundle=messaging_non_clips`
        let response = await fetch(url);
        let data = await response.json();
        console.log(data.data)
        let trendingData = document.querySelector('#trending');
        trendingData.innerHTML='';
        data.data.forEach(element => {
            let image = document.createElement('img');
            image.src = element.images.fixed_height.url;
            image.onclick = ()=>{
                details(element.id);
            }
            trendingData.append(image);
    });
    } catch (error) {
        console.log(error)
    }
}