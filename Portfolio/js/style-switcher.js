const styleSwitcherToggle = document.querySelector(".style-switcher__toggler");
const alternateStyles = document.querySelectorAll(".alternate-style");
const dayNight = document.querySelector(".day-night");


styleSwitcherToggle.addEventListener("click", () =>{
    document.querySelector(".style-switcher").classList.toggle("open");
});


window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

document.addEventListener('mouseup', function(e) {
    var styleSwitcher = document.getElementById('style-switcher');
    if (!styleSwitcher.contains(e.target)) {
        styleSwitcher.classList.remove("open");
    }
});

function setActiveStyle(color){
    alternateStyles.forEach((style)=>{
        if(color=== style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled", "true");
        }
    })
}

dayNight.addEventListener("click", () =>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("light")
})
dayNight.addEventListener("click", () =>{
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load", () =>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
    
})


