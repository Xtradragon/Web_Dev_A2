

//========================================================================================================================================//
// Pages
var All_Pages = document.querySelectorAll(".Pages");
var Home_Page = document.querySelector("#Home_Page");
var About_Page = document.querySelector("#About_Page");
var History_Page = document.querySelector("#History_Page");
//========================================================================================================================================//

//========================================================================================================================================//
// Buttons for Navigation
var About_Btn = document.querySelector("#About_Btn");
var Home_Btn = document.querySelector("#Home_Btn");
var History_Btn = document.querySelector("#History_Btn");

var Footer_About_Btn = document.querySelector("#Footer_About_Btn");
var Footer_Home_Btn = document.querySelector("#Footer_Home_Btn");
var Footer_History_Btn = document.querySelector("#Footer_History_Btn");
//========================================================================================================================================//

//========================================================================================================================================//
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
    console.log("About Button is Clicked");
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

Footer_About_Btn.addEventListener("click", function ()
{
    Hide_Pages();
    console.log("About Button is Clicked");
    Show_Pages(About_Page);
    Turn_Off_Active_Btn();
    About_Btn.classList.add("Active_Btn");
});

Footer_Home_Btn.addEventListener("click", function ()
{
    Hide_Pages();
    console.log("Home Button is Clicked")
    Show_Pages(Home_Page);
    Turn_Off_Active_Btn();
    Home_Btn.classList.add("Active_Btn");
});

Footer_History_Btn.addEventListener("click", function ()
{
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

var All_Timeline_Btns = document.querySelectorAll('.Timeline_btn');
var nextYears = ["Error", "Error", "Error"];

const historyData = {
    "1987": {
        title: "YEAR (1987) HISTORY",
        desc: "The history of the Mass Rapid Transit (MRT) system of Singapore commenced with its planning in the 1960s, which finally led to its opening in 1987 with the launch of a 6 km section of the North–South Line (NSL) from Yio Chu Kang to Toa Payoh. Since its inception, the rapid transit system has played a crucial role in the public transportation network and the wider development of the country as a whole, providing a fast and efficient means of transportation for millions of Singaporeans daily.",
    },
    "1990": {
        title: "YEAR (1990) HISTORY",
        desc: "By July 1990, the second phase of the initial MRT network was completed with the opening of Boon Lay station on 6 July, extending the East–West Line westward from Lakeside and fulfilling the original 67 km vision laid out in 1982",
    },
    "2003": {
        title: "YEAR (2003) HISTORY",
        desc: "On 20 June 2003, the North East Line commenced operations as Singapore’s first fully automated, driverless heavy rail line, running 20 km and serving 16 stations from HarbourFront to Punggol under SBS Transit",
    },
    "2009": {
        title: "YEAR (2009) HISTORY",
        desc: "The Circle Line opened its first section on 28 May 2009 between Bartley and Marymount, introducing an orbital link that would eventually encircle the Central Area and enhance cross-network connectivity",
    },
    "2012": {
        title: "YEAR (2012) HISTORY",
        desc: "The final segment of the Circle Line between Bayfront and Marina Bay stations began service on 14 January 2012, completing the loop and integrating the Marina Bay precinct into the orbital MRT network",
    },
    "Future": {
        title: "YEAR (Future) HISTORY",
        desc: "As of 2025, the network has six operational lines in operation with a total combined route length of approximately 242.6 km (150.7 mi) and 143 operational stations. Two additional lines and 44 stations are currently under construction, namely the Jurong Region Line (JRL) and the Cross Island Line (CRL).",
    }
};


const History_Card_Title = document.getElementById("History_Title");
const History_Card_Desc = document.getElementById("History_Description");

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

                History_Card_Title.textContent = historyData[User_Selected_Year].title;
                History_Card_Desc.textContent = historyData[User_Selected_Year].desc;

            }
            else {
                All_Timeline_Btns[Timeline_Btn_Index].innerHTML = '<img class="Timeline_Icon" src="images/Time_Line_Unselected_Icon.png" />' + nextYears[Timeline_Btn_Index];
            }
        }


    });
}
//========================================================================================================================================//

//========================================================================================================================================//
// History Quiz Function 
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


//========================================================================================================================================//
// Canva Mini Game Code




//function Get_Canvas_Size() {
//	
//	const minWidth = 800;
//	const maxWidth = 1280;
//	const minHeight = 450;
//	const maxHeight = 720;
//
//	const minScale = 1.0;
//	const maxScale = 1.6;
//
//	
//    const canvas = document.getElementById('Mini_Game_Canvas');
//    const Canvas_Size = canvas.getBoundingClientRect();
//
//    console.log("Canvas Size: ", Canvas_Size.width, "x", Canvas_Size.height);
//
//    // Clamp both width and height
//    const clampedWidth = Math.min(Math.max(Canvas_Size.width, minWidth), maxWidth);
//    const clampedHeight = Math.min(Math.max(Canvas_Size.height, minHeight), maxHeight);
//
//    // Width scale factor
//    const tWidth = (maxWidth - clampedWidth) / (maxWidth - minWidth);
//    const scaleFromWidth = minScale + tWidth * (maxScale - minScale);
//
//    // Height scale factor
//    const tHeight = (maxHeight - clampedHeight) / (maxHeight - minHeight);
//    const scaleFromHeight = minScale + tHeight * (maxScale - minScale);
//
//    // Pick the smaller scale to avoid overflow/stretch
//    Scale_Multiplier = Math.min(scaleFromWidth, scaleFromHeight);
//
//    console.log("Final Scale Multiplier: " + Scale_Multiplier.toFixed(2));
//
//    canvas.width = clampedWidth * Scale_Multiplier;
//    canvas.height = clampedHeight * Scale_Multiplier;
//}
//
//window.addEventListener('resize', () => {
//    var canvas = document.getElementById('Mini_Game_Canvas')
//    Get_Canvas_Size();
//	
//    switch (Current_Scene) {
//        case "Game_Start_Page":
//            Load_Game_Start_Page();
//            break;
//        case "Game_Diffcutly_Page":
//            Load_Game_Diffcutly_Page();
//            break;
//	  	case "Game_Station_Page":
//            Load_Game_Station_Page();
//            break;
//	}
//});



var interchangeStations =
    [
        { name: "Jurong East", lines: ["NS", "EW"] }, 				// 0
        { name: "Woodlands", lines: ["NS", "TE"] }, 				// 1
        { name: "Bishan", lines: ["NS", "CC"] }, 					// 2
        { name: "Dhoby Ghaut", lines: ["NS", "NE", "CC"] }, 		// 3
        { name: "City Hall", lines: ["NS", "EW"] }, 				// 4
        { name: "Raffles Place", lines: ["NS", "EW"] }, 			// 5
        { name: "Newton", lines: ["NS", "DT"] }, 					// 6
        { name: "Marina Bay", lines: ["NS", "TE", "CC"] }, 			// 7
        { name: "Outram Park", lines: ["EW", "NE", "TE"] }, 		// 8
        { name: "HarbourFront", lines: ["NE", "CC"] }, 				// 9
        { name: "Paya Lebar", lines: ["EW", "CC"] }, 				// 10
        { name: "Buona Vista", lines: ["EW", "CC"] }, 				// 11
        { name: "Chinatown", lines: ["NE", "DT"] }, 				// 12
        { name: "Serangoon", lines: ["NE", "CC"] }, 				// 13
        { name: "Little India", lines: ["NE", "DT"] }, 				// 14
        { name: "Botanic Gardens", lines: ["CC", "DT"] }, 			// 15
        { name: "MacPherson", lines: ["CC", "DT"] }, 				// 16
        { name: "Bayfront", lines: ["CC", "DT"] }, 					// 17
        { name: "Promenade", lines: ["CC", "DT"] }, 				// 18
        { name: "Stevens", lines: ["DT", "TE"] }, 					// 19
        { name: "Caldecott", lines: ["CC", "TE"] }, 				// 20
        { name: "Expo", lines: ["DT"] }, 							// 21
        { name: "Tampines", lines: ["EW", "DT"] }, 					// 22
        { name: "Bugis", lines: ["EW", "DT"] }, 					// 23
        { name: "Orchard", lines: ["NS", "TE"] } 					// 24
    ];


var stationTransitions =
{
    "Jurong East"://Checked
    {
        "NS":
        {
            "Forward":
            {
                "station": 1,    // Travelling to Woodlands
                "line": 0,
                "Feedback": "Travelling to Woodlands"
            },
            "Backward":
            {
                "station": 0,    // Stays at Jurong East
                "line": 0,
                "Feedback": "Still at Jurong East time wasted"
            }
        },
        "EW":
        {
            "Forward":
            {
                "station": 11, // Travelling to Buona Vista
                "line": 0,
                "Feedback": "Travelling to Buona Vista"
            },
            "Backward":
            {
                "station": 0, // Need to figure how to add timer so it will add 5min to the travel????
                "line": 1,
                "Feedback": "Still at Jurong East time wasted"
            }
        }
    },
    "Woodlands": //Checked
    {
        "NS":
        {
            "Forward":
            {
                "station": 2,    // Travelling to Bishan
                "line": 0,
                "Feedback": "Travelling to Bishan"
            },
            "Backward":
            {
                "station": 0,    // Travelling to Jurong East
                "line": 0,
                "Feedback": "Travelling to Jurong East"
            }
        },
        "TE":
        {
            "Forward":
            {
                "station": 20, // Travelling to Caldecott
                "line": 1,
                "Feedback": "Travelling to Caldecott"
            },
            "Backward":
            {
                "station": 1,
                "line": 0,
                "Feedback": "Still at Woodlands time wasted"
            }
        }
    },
    "Bishan": //Checked
    {
        "NS":
        {
            "Forward":
            {
                "station": 6,    // Travelling to Newton
                "line": 0,
                "Feedback": "Travelling to Newton"
            },
            "Backward":
            {
                "station": 1,    // Travelling to Woodlands
                "line": 0,
                "Feedback": "Travelling to Woodlands"
            }
        },
        "CC":
        {
            "Forward":
            {
                "station": 13, // Travelling to Serangoon
                "line": 1,
                "Feedback": "Travelling to Serangoon"
            },
            "Backward":
            {
                "station": 20, // Travelling to Caldecott
                "line": 0,
                "Feedback": "// Travelling to Caldecott"
            }
        }
    },
    "Dhoby Ghaut": //Checked 
    {
        "NS":
        {
            "Forward":
            {
                "station": 4,    // Travelling to City Hall
                "line": 0,
                "Feedback": "Travelling to City Hall"
            },
            "Backward":
            {
                "station": 24,    // Travelling to Orchard
                "line": 0,
                "Feedback": "Travelling to Orchard"
            }
        },
        "NE":
        {
            "Forward":
            {
                "station": 12, // Travelling to Chinatown
                "line": 0,
                "Feedback": "Travelling to Chinatown"
            },
            "Backward":
            {
                "station": 13, // Travelling to Serangoon
                "line": 0,
                "Feedback": "// Travelling to Serangoon"
            }
        },
        "CC":
        {
            "Forward":
            {
                "station": 18, // Travelling to Promenade
                "line": 0,
                "Feedback": "Travelling to Promenade"
            },
            "Backward":
            {
                "station": 3, // Still at Dhoby Ghaut time wasted
                "line": 2,
                "Feedback": "Still at Dhoby Ghaut time wasted"
            }
        }
    },
    "City Hall": //Checked 
    {
        "NS":
        {
            "Forward":
            {
                "station": 5,
                "line": 0,
                "Feedback": "Travelling to Raffles Place"
            },
            "Backward":
            {
                "station": 3,
                "line": 0,
                "Feedback": "Travelling to Dhoby Ghaut"
            }
        },
        "EW":
        {
            "Forward":
            {
                "station": 23,
                "line": 0,
                "Feedback": "Travelling to Bugis"
            },
            "Backward":
            {
                "station": 5,
                "line": 1,
                "Feedback": "Travelling to Raffles Place"
            }
        }
    },
    "Raffles Place": //Checked 
    {
        "NS":
        {
            "Forward":
            {
                "station": 7,
                "line": 0,
                "Feedback": "Travelling to Marina Bay"
            },
            "Backward":
            {
                "station": 4,
                "line": 0,
                "Feedback": "Travelling to City Hall"
            }
        },
        "EW":
        {
            "Forward":
            {
                "station": 4,
                "line": 1,
                "Feedback": "Travelling to City Hall"
            },
            "Backward":
            {
                "station": 8,
                "line": 0,
                "Feedback": "Travelling to Outram Park"
            }
        }
    },
    "Newton": //Checked 
    {
        "NS":
        {
            "Forward":
            {
                "station": 24,   // Orchard
                "line": 0,
                "Feedback": "Travelling to Orchard"
            },
            "Backward":
            {
                "station": 2,   // Bishan
                "line": 0,
                "Feedback": "Travelling to Bishan"
            }
        },
        "DT":
        {
            "Forward":
            {
                "station": 14,  // Little India
                "line": 1,
                "Feedback": "Travelling to Little India"
            },
            "Backward":
            {
                "station": 19,   // Stevens
                "line": 0,
                "Feedback": "Travelling to Stevens"
            }
        }
    },
    "Marina Bay": //Checked 
    {
        "NS":
        {
            "Forward":
            {
                "station": 7,   // Marina Bay
                "line": 0,
                "Feedback": "Still at Marina Bay time wasted"
            },
            "Backward":
            {
                "station": 5,   // Raffles Place
                "line": 0,
                "Feedback": "Travelling to Raffles Place"
            }
        },
        "TE":
        {
            "Forward":
            {
                "station": 21,  // Expo
                "line": 0,
                "Feedback": "Travelling to Expo"
            },
            "Backward":
            {
                "station": 8,   //Outram Park
                "line": 2,
                "Feedback": "Travelling to Outram Park"
            }
        },
        "CC": {
            "Forward": {
                "station": 17,  // Bayfront
                "line": 0,
                "Feedback": "Travelling to Bayfront"
            },
            "Backward": {
                "station": 9,   // HarbourFront
                "line": 1,
                "Feedback": "Travelling to HarbourFront"
            }
        }
    },
    "Outram Park": //Checked 
    {
        "EW": {
            "Forward": {
                "station": 5,  // Raffles Place
                "line": 1,
                "Feedback": "Travelling to Raffles Place"
            },
            "Backward": {
                "station": 11,   // Buona Vista
                "line": 0,
                "Feedback": "Travelling to Buona Vista"
            }
        },
        "NE": {
            "Forward": {
                "station": 9,   // HarbourFront
                "line": 0,
                "Feedback": "Travelling to HarbourFront"
            },
            "Backward": {
                "station": 12,   // Chinatown
                "line": 0,
                "Feedback": "Travelling to Chinatown"
            }
        },
        "TE": {
            "Forward": {
                "station": 7,  // Marina Bay
                "line": 1,
                "Feedback": "Travelling to Marina Bay"
            },
            "Backward": {
                "station": 24,   // Orchard
                "line": 1,
                "Feedback": "Travelling to Orchard"
            }
        }
    },
    "HarbourFront": //Checked  
    {
        "NE": {
            "Forward": {
                "station": 9,  // HarbourFront
                "line": 0,
                "Feedback": "Still at HarbourFront time wasted"
            },
            "Backward": {
                "station": 8,   // Outram Park
                "line": 1,
                "Feedback": "Travelling to Outram Park"
            }
        },
        "CC": {
            "Forward": {
                "station": 7,  // Marina Bay
                "line": 2,
                "Feedback": "Travelling to Marina Bay"
            },
            "Backward": {
                "station": 11,   // Buona Vista
                "line": 1,
                "Feedback": "Travelling to Buona Vista"
            }
        }
    },
    "Paya Lebar": //Checked 
    {
        "EW": {
            "Forward": {
                "station": 22,  // Tampines
                "line": 0,
                "Feedback": "Travelling to Tampines"
            },
            "Backward": {
                "station": 23,   // Bugis
                "line": 0,
                "Feedback": "Travelling to Bugis"
            }
        },
        "CC": {
            "Forward": {
                "station": 16,  // MacPherson
                "line": 0,
                "Feedback": "Travelling to MacPherson"
            },
            "Backward": {
                "station": 18,   // Promenade
                "line": 0,
                "Feedback": "Travelling to Promenade"
            }
        }
    },
    "Buona Vista": //Checked  
    {
        "EW": {
            "Forward": {
                "station": 8,  // Outram Park
                "line": 0,
                "Feedback": "Travelling to Outram Park"
            },
            "Backward": {
                "station": 0,   // Jurong East
                "line": 1,
                "Feedback": "Travelling to Jurong East"
            }
        },
        "CC": {
            "Forward": {
                "station": 9,  // HarbourFront
                "line": 1,
                "Feedback": "Travelling to HarbourFront"
            },
            "Backward": {
                "station": 15,  // Botanic Gardens
                "line": 0,
                "Feedback": "Travelling to Botanic Gardens"
            }
        }
    },
    "Chinatown": //Checked  
    {
        "NE": {
            "Forward": {
                "station": 8,  // Outram Park
                "line": 1,
                "Feedback": "Travelling to Outram Park"
            },
            "Backward": {
                "station": 3,   // Dhoby Ghaut
                "line": 1,
                "Feedback": "Travelling to Dhoby Ghaut"
            }
        },
        "DT": {
            "Forward": {
                "station": 16,   // MacPherson
                "line": 1,
                "Feedback": "Travelling to MacPherson"
            },
            "Backward": {
                "station": 17,  // Bayfront
                "line": 1,
                "Feedback": "Travelling to Bayfront"
            }
        }
    },
    "Serangoon": //Checked  
    {
        "NE": {
            "Forward": {
                "station": 13,  // Serangoon
                "line": 0,
                "Feedback": "Still at Serangoon time wasted"
            },
            "Backward": {
                "station": 3,  // Dhoby Ghaut
                "line": 1,
                "Feedback": "Travelling to Dhoby Ghaut"
            }
        },
        "CC": {
            "Forward": {
                "station": 2,   // Bishan
                "line": 1,
                "Feedback": "Travelling to Bishan"
            },
            "Backward": {
                "station": 16,  // MacPherson
                "line": 0,
                "Feedback": "Travelling to MacPherson"
            },
        }
    },
    "Little India": //Checked 
    {
        "NE": {
            "Forward": {
                "station": 13,  // Serangoon
                "line": 0,
                "Feedback": "Travelling to Serangoon"
            },
            "Backward": {
                "station": 3,  // Dhoby Ghaut
                "line": 1,
                "Feedback": "Travelling to Dhoby Ghaut"
            }
        },
        "DT": {
            "Forward": {
                "station": 23,  // Bugis
                "line": 1,
                "Feedback": "Travelling to Bugis"
            },
            "Backward": {
                "station": 6,  // Newton
                "line": 1,
                "Feedback": "Travelling to Newton"
            }
        }
    },
    "Botanic Gardens": //Checked  
    {
        "CC": {
            "Forward": {
                "station": 11,  // Buona Vista
                "line": 1,
                "Feedback": "Travelling to Buona Vista"
            },
            "Backward": {
                "station": 20,  // Caldecott
                "line": 0,
                "Feedback": "Travelling to Caldecott"
            }
        },
        "DT": {
            "Forward": {
                "station": 19,  // Stevens
                "line": 0,
                "Feedback": "Travelling to Stevens"
            },
            "Backward": {
                "station": 15,  // Botanic Gardens
                "line": 0,
                "Feedback": "Still at Botanic Gardens time wasted"
            }
        }
    },
    "MacPherson": //Checked 
    {
        "CC": {
            "Forward": {
                "station": 13,  // Serangoon
                "line": 1,
                "Feedback": "Travelling to Serangoon"
            },
            "Backward": {
                "station": 10,  // Paya Lebar
                "line": 1,
                "Feedback": "Travelling to Paya Lebar"
            }
        },
        "DT": {
            "Forward": {
                "station": 22,  // Tampines
                "line": 1,
                "Feedback": "Travelling to Tampines"
            },
            "Backward": {
                "station": 12,  // Chinatown
                "line": 1,
                "Feedback": "Travelling to Chinatown"
            }
        }
    },
    "Bayfront": //Checked 
    {
        "CC": {
            "Forward": {
                "station": 18,  // Promenade
                "line": 0,
                "Feedback": "Travelling to Promenade"
            },
            "Backward": {
                "station": 7,  // Marina Bay
                "line": 2,
                "Feedback": "Travelling to Marina Bay"
            }
        },
        "DT": {
            "Forward": {
                "station": 12,  // Chinatown
                "line": 1,
                "Feedback": "Travelling to Chinatown"
            },
            "Backward": {
                "station": 18,  // Promenade
                "line": 1,
                "Feedback": "Travelling to Promenade"
            }
        }
    },
    "Promenade": //Checked  
    {
        "CC": {
            "Forward": {
                "station": 10,  // Paya Lebar
                "line": 1,
                "Feedback": "Travelling to Paya Lebar"
            },
            "Backward": {
                "station": 17,  // Bayfront
                "line": 0,
                "Feedback": "Travelling to Bayfront"
            }
        },
        "DT": {
            "Forward": {
                "station": 17,  // Bayfront
                "line": 1,
                "Feedback": "Travelling to Bayfront"
            },
            "Backward": {
                "station": 23,  // Bugis
                "line": 1,
                "Feedback": "Travelling to Bugis"
            }
        }
    },
    "Stevens": //Checked 
    {
        "DT": {
            "Forward": {
                "station": 6,  // Newton
                "line": 1,
                "Feedback": "Travelling to Newton"
            },
            "Backward": {
                "station": 15,  // Botanic Gardens
                "line": 1,
                "Feedback": "Travelling to Botanic Gardens"
            }
        },
        "TE": {
            "Forward": {
                "station": 24,   // Orchard
                "line": 1,
                "Feedback": "Travelling to Orchard"
            },
            "Backward": {
                "station": 20,  // Caldecott
                "line": 1,
                "Feedback": "Travelling to Caldecott"
            }
        }
    },
    "Caldecott":
    {
        "CC": {
            "Forward": {
                "station": 15,  // Botanic Gardens
                "line": 0,
                "Feedback": "Travelling to Botanic Gardens"
            },
            "Backward": {
                "station": 2,  // Bishan
                "line": 1,
                "Feedback": "Travelling to Bishan"
            }
        },
        "TE": {
            "Forward": {
                "station": 19,   // Stevens
                "line": 1,
                "Feedback": "Travelling to Stevens"
            },
            "Backward": {
                "station": 1,  // Woodlands
                "line": 1,
                "Feedback": "Travelling to Woodlands"
            }
        }
    },
    "Expo":
    {
        "DT": {
            "Forward": {
                "station": 7,  // Marina Bay
                "line": 1,
                "Feedback": "Travelling to Marina Bay"
            },
            "Backward": {
                "station": 2,  // Tampines
                "line": 1,
                "Feedback": "Travelling to Tampines"
            }
        }
    },
    "Tampines":
    {
        "EW": {
            "Forward": {
                "station": 22,  // Tampines
                "line": 0,
                "Feedback": "Still at Tampines time wasted"
            },
            "Backward": {
                "station": 10,  // Paya Lebar
                "line": 0,
                "Feedback": "Travelling to Paya Lebar"
            }
        },
        "DT": {
            "Forward": {
                "station": 21,  // Expo
                "line": 1,
                "Feedback": "Travelling to Expo"
            },
            "Backward": {
                "station": 16,  // MacPherson
                "line": 1,
                "Feedback": "Travelling to MacPherson"
            }
        }
    },
    "Bugis":
    {
        "EW": {
            "Forward": {
                "station": 10,   // Paya Lebar
                "line": 0,
                "Feedback": "Travelling to Paya Lebar"
            },
            "Backward": {
                "station": 4,  // City Hall
                "line": 1,
                "Feedback": "Travelling to City Hall"
            }
        },
        "DT": {
            "Forward": {
                "station": 18,  // Promenade
                "line": 1,
                "Feedback": "Travelling to Promenade"
            },
            "Backward": {
                "station": 14,  // Little India
                "line": 1,
                "Feedback": "Travelling to Little India"
            }
        }
    },
    "Orchard":
    {
        "NS": {
            "Forward": {
                "station": 3,   // Dhoby Ghaut
                "line": 0,
                "Feedback": "Travelling to Dhoby Ghaut"
            },
            "Backward": {
                "station": 6,  // Newton
                "line": 0,
                "Feedback": "Travelling to Newton"
            }
        },
        "TE": {
            "Forward": {
                "station": 8,  // Outram Park
                "line": 2,
                "Feedback": "Travelling to Outram Park"
            },
            "Backward": {
                "station": 19,  // Stevens
                "line": 1,
                "Feedback": "Travelling to Stevens"
            }
        }
    }
}



var Game_Running = false;
var Station, Current_Location,
    Current_Direction_Facing,
    Current_Line_Index, Current_Line,
    Destination_Station;



var canvas = document.getElementById('Mini_Game_Canvas');
var ctx = canvas.getContext('2d');
var Current_Scene = " ";
var Background_Image = new Image();
var Travelling_Background_Image = new Image();
var Easy_Card_Image = new Image();
var Normal_Card_Image = new Image();
var Rush_Hour_Card_Image = new Image();
var Train_Station_Image = new Image();
var Phone_Background_Image = new Image();
var Location_Btn_Image = new Image();
var Square_Btn_Image = new Image();
var Start_Travel_Btn_Image = new Image();
var Forward_Arrow_Image = new Image();
var Backward_Arrow_Image = new Image();
var Map_Image = new Image();
var Train_Bridge_Image = new Image();
var Grey_Image = new Image();
var Win_Page_Image = new Image();

//-----------------------------------------------------------------------
canvas.width = 1280;
canvas.height = 720;
//-----------------------------------------------------------------------

//-----------------------------------------------------------------------
Background_Image.src = 'images/Train_Station_Background.png';
Travelling_Background_Image.src = 'images/Travelling Background.png' 
Train_Bridge_Image.src = 'images/MRT_Bridge.png'
Easy_Card_Image.src = 'images/Easy_Card.png';
Normal_Card_Image.src = 'images/Normal_Card.png';
Rush_Hour_Card_Image.src = 'images/Rush_Hour_Card.png';
Train_Station_Image.src = 'images/Train_Station.png';
Phone_Background_Image.src = 'images/Phone_Background.png';
Location_Btn_Image.src = 'images/Location_Btn_Image.png';
Square_Btn_Image.src = 'images/Square_Btn_Image.png';
Start_Travel_Btn_Image.src = 'images/Start_Travel_Btn_Image.png';
Forward_Arrow_Image.src = 'images/Forward_Arrow_Image.png';
Backward_Arrow_Image.src = 'images/Backward_Arrow_Image.png';
Map_Image.src = 'images/Game_Map.png';
Grey_Image.src = 'images/Grey_Background.png';
Win_Page_Image.src = 'images/Win_Page_Background.png'
//-----------------------------------------------------------------------

//-----------------------------------------------------------------------
var Default_Train = new Image();
Default_Train.src = 'images/Default_Train.png';

var NS_Line = new Image();
NS_Line.src = 'images/NS_Line.png';

var EW_Line = new Image();
EW_Line.src = 'images/EW_Line.png';

var NE_Line = new Image();
NE_Line.src = 'images/NE_Line.png';

var CC_Line = new Image();
CC_Line.src = 'images/CC_Line.png';

var DT_Line = new Image();
DT_Line.src = 'images/DT_Line.png';

var TE_Line = new Image();
TE_Line.src = 'images/TE_Line.png';

var Line_Images =
{
    NS: NS_Line,
    EW: EW_Line,
    NE: NE_Line,
    CC: CC_Line,
    DT: DT_Line,
    TE: TE_Line
};
//-----------------------------------------------------------------------

//-----------------------------------------------------------------------
// x = 640  // y = 360
var Station_Coordinates =
{
    "Jurong East":
    {
        x: (canvas.width / 2) - 157,
        y: (canvas.height / 2) + 71,
    },
    "Woodlands":
    {
        x: (canvas.width / 2) + 117,
        y: (canvas.height / 2) - 240,
    },
    "Bishan":
    {
        x: (canvas.width / 2) + 147,
        y: (canvas.height / 2) - 2,
    },
    "Dhoby Ghaut":
    {
        x: (canvas.width / 2) + 85,
        y: (canvas.height / 2) + 128,
    },
    "City Hall":
    {
        x: (canvas.width / 2) + 141,
        y: (canvas.height / 2) + 188,
    },
    "Raffles Place":
    {
        x: (canvas.width / 2) + 116,
        y: (canvas.height / 2) + 201,
    },
    "Newton":
    {
        x: (canvas.width / 2) + 89,
        y: (canvas.height / 2) + 82,
    },
    "Marina Bay":
    {
        x: (canvas.width / 2) + 126,
        y: (canvas.height / 2) + 244,
    },
    "Outram Park":
    {
        x: (canvas.width / 2) + 33,
        y: (canvas.height / 2) + 203,
    },
    "HarbourFront":
    {
        x: (canvas.width / 2) - 7,
        y: (canvas.height / 2) + 227,
    },
    "Paya Lebar":
    {
        x: (canvas.width / 2) + 317,
        y: (canvas.height / 2) + 82,
    },
    "Buona Vista":
    {
        x: (canvas.width / 2) - 84,
        y: (canvas.height / 2) + 115,
    },
    "Chinatown":
    {
        x: (canvas.width / 2) + 62,
        y: (canvas.height / 2) + 187,
    },
    "Serangoon":
    {
        x: (canvas.width / 2) + 221,
        y: (canvas.height / 2) + 23,
    },
    "Little India":
    {
        x: (canvas.width / 2) + 126,
        y: (canvas.height / 2) + 105,
    },
    "Botanic Garden":
    {
        x: (canvas.width / 2) + 29,
        y: (canvas.height / 2) + 48,
    },
    "MacPherson":
    {
        x: (canvas.width / 2) + 281,
        y: (canvas.height / 2) + 58,
    },
    "Bayfront":
    {
        x: (canvas.width / 2) + 117,
        y: (canvas.height / 2) - 240,
    },
    "Promenade":
    {
        x: (canvas.width / 2) + 224,
        y: (canvas.height / 2) + 184,
    },
    "Stevens":
    {
        x: (canvas.width / 2) + 56,
        y: (canvas.height / 2) + 64,
    },
    "Caldecott":
    {
        x: (canvas.width / 2) + 83,
        y: (canvas.height / 2) + 18,
    },
    "Expo":
    {
        x: (canvas.width / 2) + 0, // Removed
        y: (canvas.height / 2) - 0,// Removed
    },
    "Tampines":
    {
        x: (canvas.width / 2) + 413,
        y: (canvas.height / 2) - 19,
    },
    "Bugis":
    {
        x: (canvas.width / 2) + 203,
        y: (canvas.height / 2) + 150,
    },
    "Orchard":
    {
        x: (canvas.width / 2) + 48,
        y: (canvas.height / 2) + 117,
    }


}

var trainX = (canvas.width / 2) - 500;
var lineX = (canvas.width / 2) - 478;
var targetX = trainX - 1800; // Move 100px to the left
var speed = 15; // Pixels per frame

var Travelling_Page_trainX = (canvas.width / 2) + 800;
var Travelling_Page_lineX = (canvas.width / 2) + 815;
var Travelling_Page_targetX = trainX - 1200; // Move 100px to the left
var Travelling_Page_speed = 15; // Pixels per frame


var Current_Location_X = canvas.width / 2;
var Current_Location_Y = canvas.height / 2;
var Current_Location_R = 5;
var blinkOn = false;
var Blink_Loop = null;

var Number_Of_Transfer = 0;
var Diffculty_Mode_Selected = " ";

//-----------------------------------------------------------------------

Background_Image.onload = Load_Game_Start_Page;


function Load_Game_Start_Page()
{
	Current_Scene = "Game_Start_Page";
    ctx.filter = 'blur(5px)';
    ctx.drawImage(Background_Image, 0, 0, canvas.width, canvas.height + 100);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.filter = 'blur(0px)';
    ctx.font = "bold 100px Roboto, sans-serif";
    ctx.fillStyle = "#fff";
    ctx.textAlign = "left";
    ctx.fillText("The", 50, (canvas.height / 2) - 100);
    ctx.fillText("Station", 50, (canvas.height / 2));
    ctx.fillText("Simulator", 50, (canvas.height / 2) + 100);

    ctx.fillStyle = 'rgb(66, 66, 66)';
    ctx.fillRect(canvas.width / 2, 0, canvas.width / 3, canvas.height);

    ctx.fillStyle = "#fff";
    ctx.textAlign = "left";
    ctx.font = "bold 40px Roboto, sans-serif";
    ctx.fillText("Play", (canvas.width / 2) + 100, (canvas.height / 2) - 75);
    ctx.fillRect((canvas.width / 2) + 80, (canvas.height / 2) - 106.5, 5, 35);
    ctx.fillText("Instruction", (canvas.width / 2) + 100, (canvas.height / 2));
    ctx.fillRect((canvas.width / 2) + 80, (canvas.height / 2) - 32.5, 5, 35);
    ctx.fillText("Simulator", (canvas.width / 2) + 100, (canvas.height / 2) + 75);
    ctx.fillRect((canvas.width / 2) + 80, (canvas.height / 2) + 42.5, 5, 35);

};


function Load_Game_Diffcutly_Page() {
	Current_Scene = "Game_Diffcutly_Page";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.filter = 'blur(5px)';
    ctx.drawImage(Background_Image, 0, 0, canvas.width, canvas.height + 100);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.filter = 'blur(0px)';
    ctx.drawImage(Easy_Card_Image, canvas.width / 4 - 200, canvas.height / 4, canvas.width / 4, canvas.height / 1.75);
    ctx.drawImage(Normal_Card_Image, canvas.width / 4 + 170, canvas.height / 4, canvas.width / 4, canvas.height / 1.75);
    ctx.drawImage(Rush_Hour_Card_Image, canvas.width / 4 + 540, canvas.height / 4, canvas.width / 4, canvas.height / 1.75);
}


function Load_Game_Station_Page() {
	Current_Scene = "Game_Station_Page";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(Background_Image, 0, -50, canvas.width, canvas.height);
    trainX = (canvas.width / 2) - 500;
    lineX = (canvas.width / 2) - 478;
	Travelling_Page_trainX = (canvas.width / 2) + 800;
	Travelling_Page_lineX = (canvas.width / 2) + 815;

    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.font = "bold 30px Roboto, sans-serif";

    ctx.drawImage(Default_Train, (canvas.width / 2) - 500, canvas.height / 2 + 20, canvas.width + 200, canvas.height / 4);
    ctx.drawImage(Line_Images[Current_Line], (canvas.width / 2) - 478, canvas.height / 2 + 145, canvas.width + 180, canvas.height / 30);

    ctx.drawImage(Train_Station_Image, 0, 0, canvas.width + 10, canvas.height);
    ctx.fillText(Current_Location, (canvas.width / 2), (canvas.height / 2) - 230);

    // Phone Display
    ctx.font = "bold 14px Roboto, sans-serif";
    ctx.textAlign = "left";
    ctx.drawImage(Phone_Background_Image, (canvas.width / 2 + 220), (canvas.height / 2 + 30), canvas.width / 4 - 70, canvas.height / 2);

    ctx.drawImage(Location_Btn_Image, (canvas.width / 2 + 253.5), (canvas.height / 2 + 50), canvas.width / 7, canvas.height / 14);

    ctx.fillText("Current Location: ", (canvas.width / 2 + 290), (canvas.height / 2 + 70));
    ctx.fillText(Current_Location, (canvas.width / 2 + 290), (canvas.height / 2 + 90));

    ctx.drawImage(Location_Btn_Image, (canvas.width / 2 + 253.5), (canvas.height / 2 + 110), canvas.width / 7, canvas.height / 14);

    ctx.fillText("Destination: ", (canvas.width / 2 + 290), (canvas.height / 2 + 130));
    ctx.fillText(Destination_Station, (canvas.width / 2 + 290), (canvas.height / 2 + 150));

    ctx.drawImage(Square_Btn_Image, (canvas.width / 2 + 253.5), (canvas.height / 2 + 170), canvas.width / 15, canvas.height / 6.3);
    ctx.fillText("Map", (canvas.width / 2 + 280.5), (canvas.height / 2 + 210));


    ctx.font = "bold 12px Roboto, sans-serif";
    ctx.drawImage(Square_Btn_Image, (canvas.width / 2 + 350.5), (canvas.height / 2 + 170), canvas.width / 15, canvas.height / 13);
    ctx.fillText("Switch", (canvas.width / 2 + 373.5), (canvas.height / 2 + 185));
    ctx.fillText("Direction", (canvas.width / 2 + 367.5), (canvas.height / 2 + 200));

    if (Current_Direction_Facing == "Forward") {
        ctx.drawImage(Forward_Arrow_Image, (canvas.width / 2 + 362.5), (canvas.height / 2 + 200), canvas.width / 20, canvas.height / 26);
    }
    else {
        ctx.drawImage(Backward_Arrow_Image, (canvas.width / 2 + 362.5), (canvas.height / 2 + 200), canvas.width / 20, canvas.height / 26);
    }


    ctx.drawImage(Square_Btn_Image, (canvas.width / 2 + 350.5), (canvas.height / 2 + 230), canvas.width / 15, canvas.height / 13);
    ctx.fillText("Switch Line", (canvas.width / 2 + 358.5), (canvas.height / 2 + 250));



    ctx.font = "bold 14px Roboto, sans-serif";
    ctx.fillText(Current_Line, (canvas.width / 2 + 384.5), (canvas.height / 2 + 270));
    ctx.drawImage(Start_Travel_Btn_Image, (canvas.width / 2 + 253.5), (canvas.height / 2 + 300), canvas.width / 6.9, canvas.height / 15);
    ctx.fillText("Start Travel   >", (canvas.width / 2 + 303), (canvas.height / 2 + 327));
}

function Load_Map_Overlay() {
    ctx.drawImage(Map_Image, 25, 50, canvas.width - 50, canvas.height - 100);
    var Map_Coordinates = Station_Coordinates[Current_Location];
    Current_Location_X = Map_Coordinates.x;
    Current_Location_Y = Map_Coordinates.y;
    drawOverlay();                         // initial draw
    Blink_Loop = setInterval(() => {
        blinkOn = !blinkOn;                  // flip color
        drawOverlay();                       // re-draw map & dot
    }, 800);  // every 500ms
}


function drawOverlay() {
    // redraw the map
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(Map_Image, 25, 50, canvas.width - 50, canvas.height - 100);
    if (blinkOn) {
        ctx.beginPath();
        ctx.arc(Current_Location_X, Current_Location_Y, Current_Location_R, 0, Math.PI * 2);
        ctx.fillStyle = 'limegreen';
        ctx.fill();
    }
}

function Close_Map_Overlay() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    clearInterval(Blink_Loop);
    Blink_Loop = null;
    Load_Game_Station_Page();
}


var Start_Menu_Page = true;

var Play_Btn_X_Axis = (canvas.width / 2) + 100;
var Play_Btn_Y_Axis = (canvas.height / 2) - 75;
var Play_Btn_Width = 85;
var Play_Btn_Height = 40;

var Instruction_Btn_X_Axis = (canvas.width / 2) + 100;
var Instruction_Btn_Y_Axis = (canvas.height / 2);
var Instruction_Btn_Width = 200;
var Instruction_Btn_Height = 40;


var Diffculty_Menu_Page = false;

var Easy_Btn_X_Axis = canvas.width / 4 - 200;
var Easy_Btn_Y_Axis = canvas.height / 4;
var Easy_Btn_Width = 320;
var Easy_Btn_Height = 410;

var Normal_Btn_X_Axis = canvas.width / 4 + 170;
var Normal_Btn_Y_Axis = canvas.height / 4;
var Normal_Btn_Width = 320;
var Normal_Btn_Height = 410;


var Main_Game_Page = false;

var Switch_Direction_Btn_X_Axis = canvas.width / 2 + 350.5;
var Switch_Direction_Btn_Y_Axis = canvas.height / 2 + 170;
var Switch_Direction_Btn_Width = 85;
var Switch_Direction_Btn_Height = 50;

var Switch_Line_Btn_X_Axis = canvas.width / 2 + 350.5;
var Switch_Line_Btn_Y_Axis = canvas.height / 2 + 230;
var Switch_Line_Btn_Width = 85;
var Switch_Line_Btn_Height = 50;

var Start_Travel_Btn_X_Axis = canvas.width / 2 + 253.5;
var Start_Travel_Btn_Y_Axis = canvas.height / 2 + 300;
var Start_Travel_Btn_Width = 185;
var Start_Travel_Btn_Height = 50;

var Map_Btn_X_Axis = canvas.width / 2 + 253.5;
var Map_Btn_Y_Axis = canvas.height / 2 + 170;
var Map_Btn_Width = 90;
var Map_Btn_Height = 110;


var Map_Overlay = false;
var Map_Close_Btn_X_Axis = canvas.width / 2 + 537;
var Map_Close_Btn_Y_Axis = canvas.height / 2 - 286;
var Map_Close_Btn_Width = 43;
var Map_Close_Btn_Height = 43;


var You_Win_Game_Page = false;
var Return_To_Main_Menu_Btn_X_Axis = canvas.width / 2;
var Return_To_Main_Menu_Btn_Y_Axis = canvas.height / 2  + 240;
var Return_To_Main_Menu_Btn_Width = 185;
var Return_To_Main_Menu_Btn_Height = 100;


canvas.addEventListener('click', e => {
    const rect = canvas.getBoundingClientRect();

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    MouseX = (e.clientX - rect.left) * scaleX;
    MouseY = (e.clientY - rect.top) * scaleY;
	
	console.log(" Mouse x Pos: " +  MouseX);
	console.log(" Mouse y Pos: " +  MouseY);

    if (Start_Menu_Page) {
		console.log("Checking Start_Menu_Page Buttons")
		
        if (MouseX >= Play_Btn_X_Axis && MouseX <= Play_Btn_X_Axis + Play_Btn_Width && MouseY >= Play_Btn_Y_Axis - Play_Btn_Height && MouseY <= Play_Btn_Y_Axis) {
            console.log("Play Button Clicked")
            Load_Game_Diffcutly_Page();
            Start_Menu_Page = false;
            Diffculty_Menu_Page = true;
            // Need to fix when switch to another scene this clickable area is disable
        }
        else if (MouseX >= Instruction_Btn_X_Axis && MouseX <= Instruction_Btn_X_Axis + Instruction_Btn_Width && MouseY >= Instruction_Btn_Y_Axis - Instruction_Btn_Height && MouseY <= Instruction_Btn_Y_Axis) {
            console.log("Instruction Button Clicked")
            // Need to fix when switch to another scene this clickable area is disable
        }
    }

    else if (Diffculty_Menu_Page) {
		console.log("Checking Diffculty_Menu_Page Buttons")
		
        if (MouseX >= Easy_Btn_X_Axis && MouseX <= Easy_Btn_X_Axis + Easy_Btn_Width && MouseY <= Easy_Btn_Y_Axis + Easy_Btn_Height && MouseY >= Easy_Btn_Y_Axis) {
            console.log("Easy Button Clicked")
            Game_Diffculty('Easy');
            Load_Game_Station_Page();
            Diffculty_Menu_Page = false;
            Main_Game_Page = true;
			Diffculty_Mode_Selected = "Easy Mode";
        }

        if (MouseX >= Normal_Btn_X_Axis && MouseX <= Normal_Btn_X_Axis + Normal_Btn_Width && MouseY <= Normal_Btn_Y_Axis + Normal_Btn_Height && MouseY >= Normal_Btn_Y_Axis) {
            console.log("Normal Button Clicked")
            Game_Diffculty('Normal');
            Load_Game_Station_Page();
            Diffculty_Menu_Page = false;
            Main_Game_Page = true;
			Diffculty_Mode_Selected = "Normal Mode";
        }
    }

    else if (Main_Game_Page) {
		console.log("Checking Main_Game_Page Buttons")
		
        if (MouseX >= Switch_Direction_Btn_X_Axis && MouseX <= Switch_Direction_Btn_X_Axis + Switch_Direction_Btn_Width && MouseY <= Switch_Direction_Btn_Y_Axis + Switch_Direction_Btn_Height && MouseY >= Switch_Direction_Btn_Y_Axis) {
            console.log("Switch Button Clicked")
            Switch_Direction();
        }

        if (MouseX >= Switch_Line_Btn_X_Axis && MouseX <= Switch_Line_Btn_X_Axis + Switch_Line_Btn_Width && MouseY <= Switch_Line_Btn_Y_Axis + Switch_Line_Btn_Height && MouseY >= Switch_Line_Btn_Y_Axis) {
            console.log("Switch Line Clicked")
            Switch_Line();
        }

        if (MouseX >= Start_Travel_Btn_X_Axis && MouseX <= Start_Travel_Btn_X_Axis + Start_Travel_Btn_Width && MouseY <= Start_Travel_Btn_Y_Axis + Start_Travel_Btn_Height && MouseY >= Start_Travel_Btn_Y_Axis) {
            console.log("Start Travel Clicked")
            Start_Train();
			Main_Game_Page = false;
        }

        if (MouseX >= Map_Btn_X_Axis && MouseX <= Map_Btn_X_Axis + Map_Btn_Width && MouseY <= Map_Btn_Y_Axis + Map_Btn_Height && MouseY >= Map_Btn_Y_Axis) {
            console.log("Map Clicked")
            Load_Map_Overlay();
            Map_Overlay = true;
            Main_Game_Page = false;

        }
    }

    else if (Map_Overlay) {
		console.log("Checking Map_Overlay Buttons")
		
        if (MouseX >= Map_Close_Btn_X_Axis && MouseX <= Map_Close_Btn_X_Axis + Map_Close_Btn_Width && MouseY <= Map_Close_Btn_Y_Axis + Map_Close_Btn_Height && MouseY >= Map_Close_Btn_Y_Axis) {
            console.log("Close Map Clicked")
            Close_Map_Overlay();
            Map_Overlay = false;
            Main_Game_Page = true;
        }
    }
	
	else if (You_Win_Game_Page){
		console.log("Checking You_Win_Game_Page Buttons")
		
        if (MouseX >= Return_To_Main_Menu_Btn_X_Axis && MouseX <= Return_To_Main_Menu_Btn_X_Axis + Return_To_Main_Menu_Btn_Width && MouseY <= Return_To_Main_Menu_Btn_Y_Axis + Return_To_Main_Menu_Btn_Height && MouseY >= Return_To_Main_Menu_Btn_Y_Axis) {
            console.log("Return To Main Menu")
			You_Win_Game_Page = false;
			Load_Game_Start_Page()
        }
	}
});


function Game_Diffculty(Diffculty_Value) {
    var Starting_Station_Rand;
    var Destination_Station_Rand;

    switch (Diffculty_Value) {
        case 'Easy':
            Starting_Station_Rand = Math.floor(Math.random() * 2);
            Destination_Station_Rand = 24;
            break;

        case 'Normal':
            Starting_Station_Rand = Math.floor(Math.random() * interchangeStations.length);
            Destination_Station_Rand = Math.floor(Math.random() * interchangeStations.length);
            while (Destination_Station_Rand == Starting_Station_Rand)
            {
                Destination_Station_Rand = Math.floor(Math.random() * interchangeStations.length);
            }
            break;

        case 'Rush_Hour':

            break;
    }

    Station = interchangeStations[Starting_Station_Rand];
    Current_Location = Station.name;
    Current_Direction_Facing = "Forward";
    Current_Line_Index = 0;
    Current_Line = Station.lines[Current_Line_Index];
    Destination_Station = interchangeStations[Destination_Station_Rand].name;

}

function Switch_Line() {
    Current_Line_Index++;
    Current_Line = Station.lines[Current_Line_Index];
    if (Current_Line_Index > Station.lines.length - 1) {
        Current_Line_Index = 0;
    }
    Current_Line = Station.lines[Current_Line_Index];
    Load_Game_Station_Page()
}

function Switch_Direction() {
    if (Current_Direction_Facing == "Forward") {
        Current_Direction_Facing = "Backward"
    }
    else {
        Current_Direction_Facing = "Forward"
    }
    Load_Game_Station_Page()
}


function Start_Travel() {
	Number_Of_Transfer++;
    var transition = stationTransitions[Current_Location][Current_Line][Current_Direction_Facing];
    Station = interchangeStations[transition.station];
    Current_Location = Station.name;
    Current_Line_Index = transition.line;
    Current_Line = Station.lines[Current_Line_Index];

    if (Current_Location == Destination_Station) {
		
        Load_You_Win_Page()
    }
	else
	{
		Load_Game_Station_Page()
		Main_Game_Page = true;
	} 

}

function Start_Train() {
    trainX -= speed;
    lineX -= speed;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(Background_Image, 0, -50, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.font = "bold 30px Roboto, sans-serif";
    ctx.drawImage(Default_Train, trainX, canvas.height / 2 + 20, canvas.width + 200, canvas.height / 4);
    ctx.drawImage(Line_Images[Current_Line], lineX, canvas.height / 2 + 145, canvas.width + 180, canvas.height / 30);
    ctx.drawImage(Train_Station_Image, 0, 0, canvas.width + 10, canvas.height);
    ctx.fillText(Current_Location, (canvas.width / 2), (canvas.height / 2) - 230);

    console.log("Train X: " + trainX + ", Target X: " + targetX);

    if (trainX > targetX) {
        requestAnimationFrame(Start_Train);
    }
    else {
        Load_Train_Traveling_Page()
    }
}

function Load_Train_Traveling_Page()
{
	Travelling_Page_trainX -= Travelling_Page_speed;
    Travelling_Page_lineX -= Travelling_Page_speed;
	
	Current_Scene = "Game_Station_Page";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(Travelling_Background_Image, 0, 0, canvas.width, canvas.height);
	ctx.drawImage(Train_Bridge_Image, 0, (canvas.width / 2) - 150, canvas.width, canvas.height/2);
	ctx.drawImage(Default_Train, Travelling_Page_trainX, canvas.height / 2 + 40, canvas.width / 1.5, canvas.height / 8);
	ctx.drawImage(Line_Images[Current_Line], Travelling_Page_lineX , canvas.height / 2 + 100, canvas.width / 1.525, canvas.height / 60);
	
	var transition = stationTransitions[Current_Location][Current_Line][Current_Direction_Facing];
    Station = interchangeStations[transition.station];
    var Next_Station_Location = Station.name;
	
	ctx.drawImage(Grey_Image,(canvas.width / 2) - 475,(canvas.height / 2) - 270, (canvas.width / 2) + 300, (canvas.height / 2) / 5);
	
	
	ctx.fillText(Current_Location, (canvas.width / 2) - 350, (canvas.height / 2) - 230);
	ctx.fillText(Next_Station_Location, (canvas.width / 2) + 350 , (canvas.height / 2) - 230);
	
	
	
	ctx.beginPath();
	ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 5;
    ctx.setLineDash([10, 5]);

    ctx.moveTo((canvas.width / 2) - 250, (canvas.height / 2) - 240);
    ctx.lineTo((canvas.width / 2) + 250, (canvas.height / 2) - 240);
    ctx.stroke();

    ctx.setLineDash([0, 0]); 
	
	
	if (Travelling_Page_trainX > Travelling_Page_targetX) {
        requestAnimationFrame(Load_Train_Traveling_Page);
    }
    else {
        Start_Travel()
    }
}


function Load_You_Win_Page()
{
	Main_Game_Page = false;
	You_Win_Game_Page = true;
	
	Current_Scene = "You_Win_Page";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(Win_Page_Image, 0, 0, canvas.width + 25 , canvas.height);
	
	ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.font = "bold 100px Roboto, sans-serif";
	
	ctx.fillText("- Desitionation Reach -", (canvas.width / 2), (canvas.height / 2) - 230);
	
	ctx.fillStyle = "#000";
    ctx.font = "bold 20px Roboto, sans-serif";
	ctx.fillText("Amount of Transfer: ", (canvas.width / 2) , (canvas.height / 2) - 120);
	
	ctx.fillStyle = "#555";
	ctx.fillText(Number_Of_Transfer, (canvas.width / 2) , (canvas.height / 2) - 90);
	
	ctx.fillStyle = "#000";
	ctx.fillText("Diffculty Mode Selected: ", (canvas.width / 2), (canvas.height / 2) - 40);
	
	ctx.fillStyle = "#555";
	ctx.fillText(Diffculty_Mode_Selected, (canvas.width / 2) , (canvas.height / 2) -10);
	
	ctx.fillStyle = "#000";
	ctx.fillText("Return to Main Menu", (canvas.width / 2) , (canvas.height / 2) + 240);
	
}
//========================================================================================================================================//
