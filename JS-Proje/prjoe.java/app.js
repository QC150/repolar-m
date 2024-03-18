let rastgeleSayi = Math.ceil(Math.random()*20)
console.log(rastgeleSayi);
let arkaPlan= document.querySelector("body")

const mesaj = document.querySelector(".msg") 
//kullanıcıya verilen hak
let skor=10;
let enYuksekSkor=0;

const check = document.querySelector(".check")
check.addEventListener("click",()=>{
  const tahmin =  document.querySelector(".guess").value
  console.log(tahmin);
  if (!tahmin) {
    mesaj.textContent="Lütfen bir değer giriniz..."
  } else if(tahmin==rastgeleSayi) {
    mesaj.textContent="tebrikler kazandınız...🐣"
    arkaPlan.style.backgrounColor="green"
    document.querySelector(".number").textContent=rastgeleSayi
  }else{
    mesaj.textContent="kaybettiniz..."
    arkaPlan.style.backgroundColor="red"
  }
} )