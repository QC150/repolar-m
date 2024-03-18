const form=document.querySelector(`#form`)
const searchInput=document.querySelector("#searchInput")
const buttonWrapper=document.querySelector(".button-wrapper")
const searchButton=document.querySelector("#searchButton")
const clearButton=document.getElementById("clearButton")
const imageListWrapper=document.querySelector(".imageList-wrapper")


runEventListeners()
function runEventListeners(){
form.addEventListener("submit",search)
}

function search(e){
const value=searchInput.value.trim()
console.log(value);
fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
    method: "GET",
    headers:{
        Authorisation: "Client-ID 0wwxkL4y3kLE54nkF5au_5n5VIeOuMK-OQwa9MWa8nw" 
    }
})
.then((res)=>console.log(res))
e.preventDefault()
}

