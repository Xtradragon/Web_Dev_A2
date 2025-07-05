// JavaScript Document

//target all elements to save to constants


var All_Pages = document.querySelectorAll(".Pages");
var Home_Page = document.querySelector("#Home_Page");
var About_Page = document.querySelector("#About_Page");
var History_Page = document.querySelector("#History_Page");

// Buttons for Navigation
var About_Btn = document.querySelector("#About_Btn");
var Home_Btn = document.querySelector("#Home_Btn");
var History_Btn = document.querySelector("#History_Btn");

var Hamburger_Menu_Btn = document.querySelector("#Hamburger_Menu");
var Drop_Down_Menu = document.querySelector("nav ul");


function Hide_Pages()
{
    for (var Counter = 0; Counter < All_Pages.length; Counter++)
    {
        All_Pages[Counter].style.display = "none";
    }
}

function Show_Pages(Page)
{
    Page.style.display = "block";
}


About_Btn.addEventListener("click", function()
{
    Hide_Pages();
    Show_Pages(About_Page);
});

Home_Btn.addEventListener("click", function () {
    Hide_Pages();
    Show_Pages(Home_Page);
});

History_Btn.addEventListener("click", function () {
    Hide_Pages();
    Show_Pages(History_Page);
});


Hide_Pages();

Hamburger_Menu.addEventListener("click", Toggle_Menus);

function Toggle_Menus()
{
    Drop_Down_Menu.classList.toggle("Menu_Show");
    console.log(Drop_Down_Menu);
}

/*JS for hamMenu */
/*
const hamBtn=document.querySelector("#hamIcon");
const menuItemsList=document.querySelector("nav ul");
hamBtn.addEventListener("click",toggleMenus);
function toggleMenus(){ /*open and close menu
//if menuItemsList dont have the class "menuShow", add it, else remove it
menuItemsList.classList.toggle("menuShow");
//if menu is showing (has the class “menuShow”)
if(menuItemsList.classList.contains("menuShow")){
hamBtn.innerHTML="Close Menu"; //change button text to chose menu
}else{ //if menu NOT showing
hamBtn.innerHTML="Open Menu"; //change button text open menu
}
}
*/

