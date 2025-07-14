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


//Button for History Page
// Listen for click on specific history example 1987 -------- 1990 --------- 2003 ---------- 2009 --------- 2012 ---------- Future
// Start with 1987 -------- 1990 --------- 2003
// When clicked on 2003 it will shift to the middle of the list then 2009 appears at the bottom and 1990 at the top

//<button class="timeline-btn">1960</button>
//<button class="timeline-btn">1987</button>
//<button class="timeline-btn">2000</button>

var All_Timeline_Btns = document.querySelectorAll('.timeline_btn');
var nextYears = ["Error", "Error", "Error"];


const historyData = {
    "1987": {
        title: "YEAR (1987) HISTORY",
        desc: "The history of the Mass Rapid Transit (MRT) system of Singapore commenced with its planning in the 1960s, which finally led to its opening in 1987 with the launch of a 6 km section of the North–South Line (NSL) from Yio Chu Kang to Toa Payoh. Since its inception, the rapid transit system has played a crucial role in the public transportation network and the wider development of the country as a whole, providing a fast and efficient means of transportation for millions of Singaporeans daily.",
        img: "images/Old_Map.png"
    },
    "1990": {
        title: "YEAR (1990) HISTORY",
        desc: "By July 1990, the second phase of the initial MRT network was completed with the opening of Boon Lay station on 6 July, extending the East–West Line westward from Lakeside and fulfilling the original 67 km vision laid out in 1982",
        img: "images/1990_Map.png"
    },
    "2003": {
        title: "YEAR (2003) HISTORY",
        desc: "On 20 June 2003, the North East Line commenced operations as Singapore’s first fully automated, driverless heavy rail line, running 20 km and serving 16 stations from HarbourFront to Punggol under SBS Transit",
        img: "images/2003_Map.png"
    },
    "2009": {
        title: "YEAR (2009) HISTORY",
        desc: "The Circle Line opened its first section on 28 May 2009 between Bartley and Marymount, introducing an orbital link that would eventually encircle the Central Area and enhance cross-network connectivity",
        img: "images/2009_Map.png"
    },
    "2012": {
        title: "YEAR (2012) HISTORY",
        desc: "The final segment of the Circle Line between Bayfront and Marina Bay stations began service on 14 January 2012, completing the loop and integrating the Marina Bay precinct into the orbital MRT network",
        img: "images/2012_Map.png"
    },
    "Future": {
        title: "YEAR (Future) HISTORY",
        desc: "As of 2025, the network has six operational lines in operation with a total combined route length of approximately 242.6 km (150.7 mi) and 143 operational stations. Two additional lines and 44 stations are currently under construction, namely the Jurong Region Line (JRL) and the Cross Island Line (CRL).",
        img: "images/future_Map.png"
    }
};

const cardTitle = document.getElementById("History_Title");
const cardDesc = document.getElementById("History_Description");
const cardImg = document.getElementById("History_Image");

for (Timeline_Btn_Index = 0; Timeline_Btn_Index < All_Timeline_Btns.length; Timeline_Btn_Index++)
{
    All_Timeline_Btns[Timeline_Btn_Index].addEventListener("click", function()
    {
        var User_Selected_Year = this.textContent;
        console.log(User_Selected_Year);
        if (User_Selected_Year == "1987")
        {
            nextYears = ["1987", "1990", "2003"];
        }

        if (User_Selected_Year == "1990") {
            nextYears = ["1987", "1990", "2003"];
        }

        if (User_Selected_Year == "2003") {
            nextYears = ["1990", "2003", "2009"];
        }

        if (User_Selected_Year == "2009") {
            nextYears = ["2003", "2009", "2012"];
        }

        if (User_Selected_Year == "2012") {
            nextYears = ["2009", "2012", "Future"];
        }

        if (User_Selected_Year == "Future") {
            nextYears = ["2009", "2012", "Future"];
        }

        for (let Timeline_Btn_Index = 0; Timeline_Btn_Index < All_Timeline_Btns.length; Timeline_Btn_Index++) {
            if (User_Selected_Year == nextYears[Timeline_Btn_Index]) // Check the new list of years instead of the buttons ( Fixed bug where clicking on 2003 the icon which appear on 2009 on the new list)
            {
                All_Timeline_Btns[Timeline_Btn_Index].innerHTML = '<img class="Timeline_Icon" src="images/Time_Line_Selected_Icon.png" />' + nextYears[Timeline_Btn_Index];

                cardTitle.textContent = historyData[User_Selected_Year].title;
                cardDesc.textContent = historyData[User_Selected_Year].desc;
                cardImg.src = historyData[User_Selected_Year].img;

            }
            else
            {
                All_Timeline_Btns[Timeline_Btn_Index].innerHTML = '<img class="Timeline_Icon" src="images/Time_Line_Unselected_Icon.png" />' + nextYears[Timeline_Btn_Index];
            }
        }


    });
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

