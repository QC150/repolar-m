
 const getBtn= document.getElementById("button")
 console.log(getBtn);

const getFollowers= async(username)=>{
    try {
        const response=await fetch(`https://api.github.com/users/${username}/followers?per-page=100`);
        console.log(response);
    } catch (error) {
        
    }
}

 getBtn.addEventListener("click",()=>{
    // console.log("butona tıklandı");
    const value= document.querySelector("#searchText").value.trim()
    console.log(value);
    if(value) {

    }else{
        alert("Lütfen bir kullanıcı adı giriniz...")
    }
 })