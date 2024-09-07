let videoContent = document.querySelector('#video-content');

function video(){
    let data = JSON.parse(localStorage.getItem('data'));
    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${data.videoId}`;
    
    iframe.setAttribute("allowfullscreen", true);
    let title = document.createElement('h4');
    title.innerText = data.snippet.title;
    let channelTitle = document.createElement('p');
    channelTitle.innerText = data.snippet.channelTitle; 
    let description = document .createElement('p');
    description.innerText =  data.snippet.description;
    videoContent.append(iframe,title,channelTitle,description);
}

video();