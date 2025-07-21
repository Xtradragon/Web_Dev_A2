const train = document.querySelector('.Moving_Train_On_Track');
let Current_Train_Left_Position = 150;

//========================================================================================================================================//
// Home Page Train Movement to the left and Loop 
function Animate_Train()
{
    let Left_Velocity = 2.5;
    train.style.transition = 'left 0.5s';
    Current_Train_Left_Position -= Left_Velocity;

    train.style.left = Current_Train_Left_Position + '%';

    if (Current_Train_Left_Position < -120)
    {
        setTimeout(function () { train.style.transition = 'none'; Current_Train_Left_Position = 150; }, 2000);
    }
}

Make_Train_Move = setInterval(Animate_Train, 100);
//========================================================================================================================================//


//========================================================================================================================================//
// Variable for NavBar

// Pages
var All_Pages = document.querySelectorAll(".Pages");
var Home_Page = document.querySelector("#Home_Page");
var About_Page = document.querySelector("#About_Page");
var History_Page = document.querySelector("#History_Page");

// Buttons for Navigation
var About_Btn = document.querySelector("#About_Btn");
var Home_Btn = document.querySelector("#Home_Btn");
var History_Btn = document.querySelector("#History_Btn");

var Footer_About_Btn = document.querySelector("#Footer_About_Btn");
var Footer_Home_Btn = document.querySelector("#Footer_Home_Btn");
var Footer_History_Btn = document.querySelector("#Footer_History_Btn");

// Ham Burger Menu
var Hamburger_Menu_Btn = document.querySelector("#Hamburger_Menu");
var Drop_Down_Menu = document.querySelector("nav ul");
//========================================================================================================================================//

//========================================================================================================================================//
// Navigation Functions
function Hide_Pages() {
    for (var Counter = 0; Counter < All_Pages.length; Counter++) {
        All_Pages[Counter].style.display = "none";
    }
}

function Turn_Off_Active_Btn() {
    About_Btn.classList.remove("Active_Btn");
    Home_Btn.classList.remove("Active_Btn");
    History_Btn.classList.remove("Active_Btn");
}

function Show_Pages(Page)
{
    Page.style.display = "block";
}

About_Btn.addEventListener("click", function ()
{
    Hide_Pages();
    console.log("About Button is Clicked", document.querySelector("#About_Btn"));
    Show_Pages(About_Page);
    Turn_Off_Active_Btn();
    this.classList.add("Active_Btn");
});

Home_Btn.addEventListener("click", function ()
{
    Hide_Pages();
    console.log("Home Button is Clicked")
    Show_Pages(Home_Page);
    Turn_Off_Active_Btn();
    this.classList.add("Active_Btn");
});

History_Btn.addEventListener("click", function ()
{
    Hide_Pages();
    console.log("History Button is Clicked")
    Show_Pages(History_Page);
    Turn_Off_Active_Btn();
    this.classList.add("Active_Btn");
});

Footer_About_Btn.addEventListener("click", function () {
    Hide_Pages();
    console.log("About Button is Clicked");
    Show_Pages(About_Page);
    Turn_Off_Active_Btn();
    About_Btn.classList.add("Active_Btn");
});

Footer_Home_Btn.addEventListener("click", function () {
    Hide_Pages();
    console.log("Home Button is Clicked")
    Show_Pages(Home_Page);
    Turn_Off_Active_Btn();
    Home_Btn.classList.add("Active_Btn");
});

Footer_History_Btn.addEventListener("click", function () {
    Hide_Pages();
    console.log("History Button is Clicked")
    Show_Pages(History_Page);
    Turn_Off_Active_Btn();
    History_Btn.classList.add("Active_Btn");
});

Hide_Pages();
Show_Pages(Home_Page);


Hamburger_Menu.addEventListener("click", Toggle_Menus);
function Toggle_Menus()
{
    Drop_Down_Menu.classList.toggle("Menu_Show");
    console.log(Drop_Down_Menu);
}
//========================================================================================================================================//


//========================================================================================================================================//
/* History clicking through each year */

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
        title: "YEAR (NEXT) HISTORY",
        desc: "As of 2025, the network has six operational lines in operation with a total combined route length of approximately 242.6 km (150.7 mi) and 143 operational stations. Two additional lines and 44 stations are currently under construction, namely the Jurong Region Line (JRL) and the Cross Island Line (CRL).",
        img: "images/future_Map.png"
    }
};


const cardTitle = document.getElementById("History_Title");
const cardDesc = document.getElementById("History_Description");
const cardImg = document.getElementById("History_Image");

for (Timeline_Btn_Index = 0; Timeline_Btn_Index < All_Timeline_Btns.length; Timeline_Btn_Index++)
{
    All_Timeline_Btns[Timeline_Btn_Index].addEventListener("click", function () {
        var User_Selected_Year = this.textContent;
        console.log(User_Selected_Year);
        if (User_Selected_Year == "1987") {
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
            else {
                All_Timeline_Btns[Timeline_Btn_Index].innerHTML = '<img class="Timeline_Icon" src="images/Time_Line_Unselected_Icon.png" />' + nextYears[Timeline_Btn_Index];
            }
        }


    });
}
//========================================================================================================================================//





//========================================================================================================================================//
// Adding the selected class to the answer label
//const labels = document.querySelectorAll('#Answers_Card label');
//console.log(labels);

//for (let Answer_Label_Index = 0; Answer_Label_Index < labels.length; Answer_Label_Index++)
//{
//    labels[Answer_Label_Index].addEventListener('click', function ()
//    {
//        for (let Remove_Selected_Index = 0; Remove_Selected_Index < labels.length; Remove_Selected_Index++) // <----- To Remove one by one  Selected class from the labels
//        {
//            labels[Remove_Selected_Index].classList.remove('selected');
//        }
//        labels[Answer_Label_Index].classList.add('selected');// <----- To Add Selected class to the selected labels
//    });
//}


//var Question, score = 0;
//function Check_Answers()
//{
//    Question = document.querySelector("input[name='Question']:checked").value;

//    if (Question == "Six") {
//        score += 1;
//    }
//}


//========================================================================================================================================//
let Current_Question_Index = 1;
let Score = 0;
let labels;

let User_Already_Clicked = false;


const Correct_Answers_Array = ["Six", "East-West Line", "More than 160 stations", "Cash", "AMK Hub"]; // Add more answers if you have more questions

const Question_Data = {
    "Question_1": {
        Question: "How many operational MRT lines currently serve commuters in Singapore (excluding LRT lines)?",
        Answer_A: "Four",
        Answer_B: "Five",
        Answer_C: "Six",
        Answer_D: "Seven",
    },

    "Question_2": {
        Question: "Based of all of the MRT lines, which one is the longest?",
        Answer_A: "North-South Line",
        Answer_B: "Downtown Line",
        Answer_C: "Circle Line",
        Answer_D: "East-West Line",
    },

    "Question_3": {
        Question: "How many stations does Singapore MRT network currently have across its operational lines excluding LRT lines?",
        Answer_A: "Around 100 Stations",
        Answer_B: "More than 160 stations",
        Answer_C: "Around 90 Stations",
        Answer_D: "Around 50 Stations",
    },

    "Question_4": {
        Question: "What not a primary payment methods accepted for Singapore MRT?",
        Answer_A: "Credit Card / Debit Card",
        Answer_B: "EZ-Link card / NETS FlashPay card",
        Answer_C: "SimplyGo EZ-Link",
        Answer_D: "Cash",
    },

    "Question_5": {
        Question: "What is the name of the mall located right next to Ang Mo Kio MRT Station?",
        Answer_A: "Jubilee Square",
        Answer_B: "AMK Hub",
        Answer_C: "Djitsun Mall",
        Answer_D: "Broadway Plaza",
    }
}

function Get_All_Labels()
{
    labels = document.querySelectorAll('#Answers_Card label');
    console.log("Getting NEW Labels", labels);
}

Get_All_Labels();
Get_User_Clicked();

function Get_User_Clicked() { 
    for (let Answer_Label_Index = 0; Answer_Label_Index < labels.length; Answer_Label_Index++)
    {
        labels[Answer_Label_Index].addEventListener('click', function ()
        {
            if (User_Already_Clicked)
            { 
                return;
            }
            for (let Remove_Selected_Index = 0; Remove_Selected_Index < labels.length; Remove_Selected_Index++) // <----- To Remove one by one  Selected class from the labels
            {
                labels[Remove_Selected_Index].classList.remove('selected');
            }
            labels[Answer_Label_Index].classList.add('selected');// <----- To Add Selected class to the selected labels
            Check_Answer();
        });
    }
}


function Check_Answer() {
    var User_Input = document.querySelector("input[name='Question']:checked");
   

    if (User_Input) {
        var User_Input_Value = User_Input.value;
        var User_Input_Label = User_Input.closest('label');
        console.log("User selected:", User_Input_Value);
        User_Already_Clicked = true;
        if (User_Input_Value == Correct_Answers_Array[Current_Question_Index - 1]) {
            console.log("Correct");
            User_Input_Label.classList.remove('selected');
            User_Input_Label.classList.add('correct')
            Score++;
            setTimeout(Change_Questions_And_Answers, 2000);
        }
        else
        {
            console.log("Wrong");
            User_Input_Label.classList.remove('selected');
            User_Input_Label.classList.add('wrong')
            setTimeout(Change_Questions_And_Answers, 2000);
        }
    }
}

function Change_Questions_And_Answers()
{
    Current_Question_Index++;
    User_Already_Clicked = false; 
    const Get_Questions_Index = "Question_" + Current_Question_Index;
    const Question_Value = Question_Data[Get_Questions_Index];

    if (!Question_Value) {
        console.log("No more questions.");
        Show_Result();
        return;
    }

    document.querySelector("#Questions_Card h1").textContent = `- Question ${Current_Question_Index} -`;
    document.querySelector("#Questions_Card p").textContent = Question_Value.Question;

    const answersHtml = `
        <label><input type="radio" name="Question" value="${Question_Value.Answer_A}"> <span class="Quiz_Answer_Icon">A</span> ${Question_Value.Answer_A}</label><br>
        <label><input type="radio" name="Question" value="${Question_Value.Answer_B}"> <span class="Quiz_Answer_Icon">B</span> ${Question_Value.Answer_B}</label><br>
        <label><input type="radio" name="Question" value="${Question_Value.Answer_C}"> <span class="Quiz_Answer_Icon">C</span> ${Question_Value.Answer_C}</label><br>
        <label><input type="radio" name="Question" value="${Question_Value.Answer_D}"> <span class="Quiz_Answer_Icon">D</span> ${Question_Value.Answer_D}</label>
    `;

    document.querySelector("#Answers_Card fieldset").innerHTML = answersHtml;
    Get_All_Labels();
    Get_User_Clicked();
}

function Show_Result() {

    let resultMessage = "";

    if (Score == 5) {
        resultMessage = "Perfect score! You're an MRT expert!";
    } else if (Score >= 5 / 2) {
        resultMessage = "Great job! You know your Singapore MRT!";
    } else {
        resultMessage = "Keep exploring the MRT! You'll get there!";
    }


    const Result_Html = `
        <div id="Results_Details">
            <h1>Quiz Complete!</h1>
            <p>You scored: ${Score} out of ${5} questions!</p>
            <p>${resultMessage}</p>
            <button class="Restart_Button">Restart Quiz</button>
        </div>
    `;

    document.querySelector("#Answers_Card fieldset").innerHTML = Result_Html;
    Restart_Button = document.querySelector('.Restart_Button');
    Restart_Button.addEventListener('click', Restart_Quiz);
}



function Restart_Quiz()
{
    Current_Question_Index = 0;
    Score = 0;
    User_Already_Clicked = false;

    Change_Questions_And_Answers();
}
//========================================================================================================================================//