let api_key ='DS3bXTWFl9L2wJOZxrnvRtVYXCqUeTHA';
async function fetchingId(){
    let id = JSON.parse(localStorage.getItem('id'));
    try {
        let response =await fetch( `https://api.giphy.com/v1/gifs/${id}?api_key=${api_key}`);
        let data = await response.json()
        console.log(data.data);
        updateDetailsData(data.data);
    } catch (error) {
        console.log(error)
    }
}
fetchingId();

function updateDetailsData(data){
    let details = document.querySelector('#details');
    let image =document.createElement('img');
    image.src = data.images.original.url;
    let download = document.createElement('a');
    download.innerText='Download';
    download.href = data.images.original.url;
    download.setAttribute('download','gif');
    details.append(image,download);
}