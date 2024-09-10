export function appendToDom(data,div){
    div.innerHTML='';
    data.forEach(element => {
        let div1 = document.createElement("div");
        let p = document.createElement("p");
        p.innerText = element.title;
        let img = document.createElement("img");
        img.src = element.image;
        div1.append(img, p);
        div.append(div1);
    });
}