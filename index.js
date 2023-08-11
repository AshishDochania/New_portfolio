const hamburger = document.querySelector(".hamburger"); 
const navMenu = document.querySelector("nav ul"); 

hamburger.addEventListener("click",()=>{
    console.log("Hamburger clicked");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll("nav ul a").forEach(n => {
    n.addEventListener("click",()=>{
        console.log("Navigation link clicked");
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});