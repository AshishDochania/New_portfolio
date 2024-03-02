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

var templateParams = {
    name: 'James',
    notes: 'Check this out!'
};
 
emailjs.send('service_gn3jow4', 'template_32rtaz6', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });