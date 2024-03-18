

const deleteAllBtn = document.querySelector(".delete-div .fa-trash-can")
const products = document.querySelector("article.products")
deleteAllBtn.addEventListener("click",()=>{
    products.textContent="No product"
    products.classList.add("no-product")
    document
})

products.addEventListener("click",(e)=>{
    if(e.target.classList.contains("fa-plus")){
        // const discountedPrice =document.getElementById("discounted-Price")
        e.target.previousElementSibling.textContent
    }
})

const calculatePrice =(btn)=>{
    const discountedPrice =btn.closest(".product-price").querySelector("#discounted-price")
}


console.log("*********");