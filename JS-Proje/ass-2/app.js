

const main1 = document.querySelector(`.bgDiv`)
const section1 =document.querySelector(`.colorDiv`)
const h = document.getElementById(`copy`)
const input =document.getElementById(`colorInput`)
const p =document.getElementById(`colorText`)
const section2 =document.querySelector(`.btn-div`)
const click = document.querySelector(`.btn.btn-click`)
const Mouseover=document.querySelector(`.btn.btn-over`)


document.body.style.margin = '0';



main1.style.display = 'flex';
main1.style.justifyContent = 'center';
main1.style.flexDirection = 'column';
main1.style.alignItems = 'center';
main1.style.gap = '3rem';
main1.style.height = '100vh';


click.style.border='2px solid pink'
click.style.width='150px'
click.style.height='40px'
click.style.borderRadius='10px'
click.style.marginBottom=`20px`
click.onmouseover = function() {
    click.classList.add('red', 'center'); // Kırmızı rengi ve merkezi hizalamayı ekle
};

// Mouseout olayını dinle
click.onmouseout = function() {
    click.classList.remove('red'); // Kırmızı rengi kaldır
};
Mouseover.style.border='2px solid pink'
Mouseover.style.width='150px'
Mouseover.style.height='40px'
Mouseover.style.borderRadius='10px'
// Mouseover olayını dinle
Mouseover.onmouseover = function() {
    Mouseover.classList.add('red', 'center'); // Kırmızı rengi ve merkezi hizalamayı ekle
};

// Mouseout olayını dinle
Mouseover.onmouseout = function() {
    Mouseover.classList.remove('red'); // Kırmızı rengi kaldır
};

const renkKodları= "0123456789ABCDEF"
function rastgeleAltıgenRenkKodu(){
    let color= `#`
    for(let i = 0; i<6; i++){
        color += renkKodları[Math.floor(Math.random()*16)]
       
    }
    return color
}

click.addEventListener("click",function(){
    const color =rastgeleAltıgenRenkKodu();
    main1.style.backgroundColor=color;
    p.textContent=color;
})

Mouseover.addEventListener("mouseover",function(){
    const color = rastgeleAltıgenRenkKodu();
    main1.style.backgroundColor=color;
    p.textContent=color;
})
h.addEventListener('click', function() {
 
    //! COPY AND ALERT
    const selectedColor = input.value;
    navigator.clipboard.writeText(selectedColor)
      .then(() => alert(`Renk ${selectedColor} kopyalandı!`))
  });
  