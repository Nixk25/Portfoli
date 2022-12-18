var typed = new Typed(".web-developer",{
    strings:["","Web Developer","", "Web Designer","", "Normální Kluk","", ], 
    typeSpeed:100,
    backSpeed:70,
    loop:true
    
})

const nav = document.querySelector(".navbar");
const navList = document.querySelectorAll("li");
const totalNavList = navList.length;
    for(let i=0; i<totalNavList; i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            for(let j=0; j<totalNavList; j++){
                navList[j].querySelector("a").classList.remove("active");
            }
        
            a.classList.add("active");
        })
    };

    


const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
const allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;
navTogglerBtn.addEventListener("click", () =>{
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn()
{
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i < totalSection; i++)
    {
        allSection[i].classList.toggle("open");
    };

};


const sections= document.querySelectorAll("section");
const li= document.querySelectorAll(".links");

function activeMenu(){
    let len= sections.length;
    while (--len && window.scrollY + 250 < sections[len].offsetTop){}
        li.forEach (ltx=>ltx.classList.remove("active"));
        li[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);



//modalní okno k HouseFix
var houseFix = document.querySelector("#housefix");
var Housemodal = document.querySelector("#housefixmodal");
var houseclose = document.querySelector("#houseclose");
var vyziva = document.querySelector("#vyziva");
var vyzivamodal =  document.querySelector("#vyzivamodal");
var vyzivaclose = document.querySelector("#vyzivaclose");

houseFix.addEventListener("click", function(){
    Housemodal.classList.add("modal_active");
});

houseclose.addEventListener("click", function(){
    Housemodal.classList.remove("modal_active");
});


var go = document.querySelector("#go");
var housewant = document.querySelector("#housewant");


housewant.addEventListener("click", function(){
    Housemodal.classList.remove("modal_active");
});


//vyziva lucie
vyziva.addEventListener("click", function(){
    vyzivamodal.classList.add("modal_active");
});

vyzivaclose.addEventListener("click", function(){
    vyzivamodal.classList.remove("modal_active");
});


var go = document.querySelector("#go");
var vyzivawant = document.querySelector("#vyzivawant");


vyzivawant.addEventListener("click", function(){
    vyzivamodal.classList.remove("modal_active");
});