import { navbar } from "./components/navbar.js";
import { appendToDom } from "./components/appendToDom.js";

let navDiv = document.getElementById('navbar');
navDiv.innerHTML = navbar();
let postDiv = document.getElementById('posts');


async function getData(){
    try {
        let response = await fetch('http://localhost:3000/posts');
        let data = await response.json();
        appendToDom(data,postDiv);
    } catch (error) {
        console.log(error)
    }
}
getData();