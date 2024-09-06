let videoContent = document.querySelector('#video-content');

function video(){
    let videoId = JSON.parse(localStorage.getItem('videoId'));
    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.width = "560";
    iframe.height = "315";
    iframe.setAttribute("allowfullscreen", true);
    videoContent.append(iframe);
}

video();