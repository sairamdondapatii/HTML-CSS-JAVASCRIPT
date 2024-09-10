let submitBtn = document.getElementById('submit_btn');
submitBtn.disabled = true;
let image;
// image uploading api 


let image_api_key = "b4b885a0f366336e71a0a056e42fc758";
const handleImage = async () => {
  let file = document.getElementById("image");
  let form = new FormData();
  form.append("image", file.files[0]);
  let response = await fetch(
    `https://api.imgbb.com/1/upload?key=${image_api_key}`,
    {
      method: "POST",
      body: form,
    }
  );
  let data = await response.json();
  console.log("data", data);
  image = data.data.display_url;
  submitBtn.disabled = false;
};

// adding post functionality

async function addPost(){
    let title = document.getElementById('title').value;
    let sendData = {
        title:title,
        image:image
    }
    try {
        let response = await fetch('http://localhost:3000/posts',{
            method:'POST',
            body:JSON.stringify(sendData),
            headers:{
                "Content-Type": "application/json"
            }
        });
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}

// delete post functionality 
const deletePost = async ()=>{
    let id = document.getElementById('delete_id').value;
    try {
        let res = await fetch(`http://localhost:3000/posts/${id}`,{
            method:'DELETE',
            headers:{
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        console.log(error)
    }
};

// upadte the title

const updatePost = async ()=>{
    let id = document.getElementById('update_id').value;
    let newTitle = document.getElementById('update_title').value;
    let updateData ={
        title:newTitle
    }
    try {
       let res = await fetch(`http://localhost:3000/posts/${id}`,{
            method:'PATCH',
            body:JSON.stringify(updateData),
            headers:{
                "Content-Type": "application/json"
            }
       }) 
    } catch (error) {
        console.log(error)
    }
}