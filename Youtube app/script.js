let api_key = 'AIzaSyCTwY_zfywZodj77BG2HCwpBiP2RyN2p1c';
    async function getData() {
        let query = document.getElementById('search').value;
        try {
            let response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=20&key=${api_key}`);
            let data = await response.json();
            console.log(data.items);
            updateDataToDom(data.items);
        } catch (error) {
            console.log(error)
        }
    }
    let content = document.querySelector('#content');
    const updateDataToDom = (data)=>{
        content.innerHTML='';
        data.forEach(element => {
            let div1 = document.createElement('div');
            let image = document.createElement('img');
            image.src = element.snippet.thumbnails.medium.url;
            let title = document.createElement('h4');
            title.innerText = element.snippet.title;
            let videoId = element.id.videoId;
            div1.onclick=()=>{
                showVideo(videoId)
            }
            div1.append(image,title);
            content.append(div1);
        });
    };

    function showVideo(data){
        window.location.href = 'video.html'
        localStorage.setItem('videoId',JSON.stringify(data));
    }