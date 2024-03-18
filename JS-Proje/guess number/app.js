
let mesaj=document.querySelector(".msg")
let check=document.querySelector(".check")
let input=document.querySelector(".guess")
let again=document.querySelector(".again")
let skore= 10
enYuksekSkore=0
let rastGeleSayı=Math.ceil(Math.random()*20)
console.log(rastGeleSayı);



check.addEventListener("click",()=>{
const tahmin=input.value
console.log(tahmin);
input.value=""

if (!tahmin) {
    mesaj.textContent="lütfen bir değer giriniz"
    
} else if(tahmin==rastGeleSayı) {
    mesaj.textContent="tebrikler kazandınız"
    document.querySelector("body").style.background="green"
    document.querySelector(".number").textContent=tahmin
    // check.disabled="false"
    if(skore>enYuksekSkore){
        enYuksekSkore=skore
        document.querySelector(".top-score")=skore
    }

}else{
    if (skore>1) {
        skore--
        document.querySelector(".score").textContent=skore
        tahmin>rastGeleSayı ?mesaj.textContent="azalt" : mesaj.textContent="arttır"
        
    } else {
        mesaj.textContent="GAME OVER"
        document.querySelector(".score-label").textContent=0
        document.querySelector("body").style.background="red"
        document.querySelector(".number").textContent=rastGeleSayı
        // check.disabled="false"
    }
}
})

again.addEventListener("click",()=>{
    document.querySelector("body").style.background="#2d3436"
    document.querySelector(".score-label").textContent=10
    mesaj.textContent="Oyun yeni oyuncu için başlıyor"
    input.value=""
   
    rastGeleSayı=Math.ceil(Math.random()*20)
    console.log(rastGeleSayı);
    skore= 10
    document.querySelector(".number").textContent="?"
    // check.disabled="true"
})



document.addEventListener("keydown",(e)=>{
    console.log(e);
    if(e.key === "Enter"){
        check.click()
    }

})

localStorage.setItem("top-skore",enYuksekSkore)