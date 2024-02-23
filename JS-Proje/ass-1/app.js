document.getElementById(`title`).textContent =`Javascript Dom Assignment1`


const Headeer = document.querySelector("header ")
console.log(Headeer);

Headeer.style.backgroundColor=`fuchsia`
Headeer.style.color=`white`
Headeer.style.padding=`50px`
Headeer.style.textAlign=`center`


const nav = document.querySelector(`.nav-item`)

nav.style.display=`flex`
nav.style.justifyContent=`center`
nav.style.listStyle=`none`
nav.style.gap=`1rem`
nav.style.marginTop=`40px`

const home = document.querySelector(`#home`)

home.style.backgroundColor = "pink"
home.style.borderRadius = "4px"
home.style.padding = "10px"

home.style.width=`70px`

const contact = document.querySelector(`.nav-item li:nth-child(2)`);


contact.style.backgroundColor=`pink`
contact.style.borderRadius=`4px`
contact.style.padding=`10px`
contact.style.width=`70px`

const section = document.querySelector(`section`)

section.style.marginTop =`100px`
const username =document.querySelector(`#username`)
username.value=`DOM hileleri`
username.style.paddingLeft=`5px`
username.style.height=`35px`
username.style.borderRadius=`5px`
username.style.backgroundColor=`pink`
username.style.color=`white`
username.style.border=`none`

const password = document.querySelector(`#password`)

password.style.height =`35px`
password.style.borderRadius=`5px`
password.value=`1234567`
password.type=`text`
password.style.paddingLeft=`5px`
password.style.backgroundColor=`pink`
password.style.color=`white`
password.style.border=`none`
const btn = document.querySelector(`.btn`)
 btn.style.height =`50px`
 btn.style.width=`70px`
 btn.style.borderRadius=`8px`
 btn.style.backgroundColor=`violet`
 btn.style.color=`white`
 btn.style.border=`none`
 btn.style.cursor=`pointer`


const secici =document.querySelector(`main #project h3`)
console.log(secici);

secici.textContent=`Js Dom Projects`
// secici.style.border=`2px solid red`
secici.style.marginTop=`-200px`
secici.style.color=`white`
secici.style.fontSize=`30px`

const arkaPlan=document.querySelector(`body`)
arkaPlan.style.backgroundColor=`aqua`

 const myProjects = ["Hello World!","Guess Numb er","Checkout Page","Gelir-Gider Projesi","Api Projects"]

 const projects = document.querySelector(`#project`)

  projects.lastElementChild.innerHTML=`<li>${myProjects[0]}</li>
 <li>${myProjects[1]}</li>
 <li>${myProjects[2]}</li>
 <li>${myProjects[3]}</li>
 <li>${myProjects[4]}</li>
 `
 const li =document.querySelectorAll(`#project li`)

 projects.lastElementChild.style.marginTop=`50px`
 projects.lastElementChild.style.color=`white`
 projects.lastElementChild.style.fontSize=`20px`
 projects.lastElementChild.style.marginBottom=`40px`
 projects.lastElementChild.style.display=`flex`
 projects.lastElementChild.style.flexDirection=`column`
 projects.lastElementChild.style.gap=`1rem`
 
 projects.lastElementChild.style.justifyContent=`center`
 li.forEach(item => {
    item.style.border = "2px solid violet";
    item.style.display = "flex";
    item.style.flexDirection = "column";
    item.style.gap = "1rem";
    item.style.justifyContent = "center";
    item.style.paddingLeft=`20px`
    item.style.height=`30px`
    item.style.borderRadius=`10px`
    item.style.backgroundColor=`pink`
 
});