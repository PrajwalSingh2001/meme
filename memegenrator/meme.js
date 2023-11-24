let meme = document.querySelector(".container");
let pic = document.querySelector(".cha");
let button = document.querySelector("button");

async function cal(){
    try{let response = await fetch("https://meme-api.com/gimme");
    let data = await response.json();
    console.log(data);
    pic.setAttribute("src",data.url)}
    catch(e){
          cal();
    }
   
}

cal();

 button.addEventListener('click',cal)