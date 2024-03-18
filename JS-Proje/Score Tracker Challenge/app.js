const button1=document.querySelector(".ft-div-1")
const button2=document.querySelector(".ft-div-2")
const reset =document.querySelector(".ft-div-3")
const Harvey0=document.querySelector(".spn-p-1")
const felix0=document.querySelector(".spn-p-2")
const Score=document.querySelector(".score-input")
const msg= document.querySelector(".mesaj")
felix0.textContent=0
Harvey0.textContent=0
let gameOver = false;
// if(scor1<=Score.value && scor2<=Score.value){


button1.addEventListener("click",()=>{
    console.log("Button 1 clicked");
    console.log("Score:", Score.value);
    if(!gameOver)
    Harvey0.textContent++
  
    if (Harvey0.textContent== Score.value) {
        msg.textContent=`tebrikler kazandınız ...`
        gameOver=true
        Harvey0.style.color="green"
        felix0.style.color="red"
       
        

    } 

})



button2.addEventListener("click",()=>{
    if(!gameOver)
    felix0.textContent++
  
    if (felix0.textContent == Score.value) {
        msg.textContent=`tebrikler kazandınız ...`
        gameOver=true
        felix0.style.color="green"
        Harvey0.style.color="red"
        

    } 

})

// }

reset.addEventListener("click",()=>{
    felix0.textContent=0
    Harvey0.textContent=0
    felix0.style.color="black"
    Harvey0.style.color="black"
    Score.value=""
    msg.textContent="SCORES"
 
    // Score.onkeydown=function(e){
    //     if(e.code==="Enter"){
    //         .click()
    //     }
    // }
        gameOver = false;
})

