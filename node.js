

var name = "";

var hot = "";
var cute = "";
var kind = "";
var drip = "";
var reliable = "";
var charm = "";

var swag = "";
var game = "";
var weeb = "";
var interest = "";

var swagChecker = "";
var gameChecker = "";
var weebChecker = "";
var interestCheck = "";

var number = 1;
var stringNumber = "";

var percentage = 0;


function submitStuff()
{

	name = document.getElementById("name").value;

	//Returns the list of values from each radio list
	swagChecker =  document.querySelectorAll('input[name = swag]');
	gameChecker =  document.querySelectorAll('input[name = game]');
	weebChecker =  document.querySelectorAll('input[name = weeb]');

	interestCheck = document.querySelectorAll('input[name = interest]');

	//Checking to see if the value is even checked from the radio list
	for (const a of swagChecker)
	{
		if (a.checked)
		{
			swag = a.value;
			break;
		}
	}

	for (const a of gameChecker)
	{
		if (a.checked)
		{
			game = a.value;
			break;
		}
	}

	for (const a of weebChecker)
	{
		if (a.checked)
		{
			weeb = a.value;
			break;
		}
	}

	for (const a of interestCheck)
	{
		if (a.checked)
		{
			interest = a.value;
			break;
		}
	}

	
	if ((weeb.length <= 0)||(game.length <= 0)||(swag.length <= 0)||(interest.length <= 0))
	{
		alert ("There are still some blank questions");

	}
	else if (name.length == 1)
	{
		alert("Please enter a name that is not just one letter, like really....");
	}
	else if (name.length <= 0)
	{
		alert("Hey buddy you forgot to enter a name");
	}
	else
	{
		convertNum(name);
		convertNum(name);
		rateCalculator();
		/*alert ("Well here are the results\n"
				+ "Hotness: " + hot + "%\n"
				+ "Charm: " + charm + "%\n"
				+ "Cuteness: " + cute + "%\n"
				+ "Kindness: " + kind + "%\n"
				+ "Drippiness: " + drip + "%\n"
				+ "Reliability: " + reliable + "%\n"
			)
		*/
		weightCalculation();
		if (interest == "none")
		{
			alert("Even though your chance of getting is 0, we'll still give your stats");
			percentage = 0;
		}
		localStorage.setItem("keyHot", hot);
		localStorage.setItem("keyCharm", charm);
		localStorage.setItem("keyCute", cute);
		localStorage.setItem("keyKind", kind);
		localStorage.setItem("keyDrip", drip);
		localStorage.setItem("keyReliable", reliable);
		localStorage.setItem("keyPercent", percentage);
		localStorage.setItem("keyName", name);
		window.location.href = "pageLoad.html";

		//alert ("Your chance of getting it is: " + percentage + "%");


		//alert(number + " " + name + " " + hot + " " + charm + " " + cute + " " + kind + " " + reliable + " " + drip);
	}

	

	//alert (swagChecker);
	//alert(name.charCodeAt(0));
}

function convertNum(nameNum)
{

	var test = "";
	nameNum = nameNum.toUpperCase();
	number = 1;
	for (i = 0; i < nameNum.length; i++) 
	{
		number *= nameNum.charCodeAt(i);
		test += " " + nameNum.charCodeAt(i) + " " + nameNum[i] + "\n";

	}
	while (number <= 1000000000000){
		number *= number /5;
	}
	stringNumber = number.toString();

	stringNumber = stringNumber.split('.').join("");
	

	hot = stringNumber[0] + stringNumber[1];
	hot = Number(hot);

	charm = stringNumber[2] + stringNumber[3];
	charm = Number(charm);

	cute = stringNumber[4] + stringNumber[5];
	cute = Number(cute);

	kind = stringNumber[6] + stringNumber[7];
	kind = Number(kind);

	reliable = stringNumber[8] + stringNumber[9];
	reliable = Number(reliable);

	drip = stringNumber[10] + stringNumber[11];
	drip = Number(drip);

}

function rateCalculator()
{
	if (game == "yes")
	{
		if (interest == "female")
		{
			multiplier(0.9, 1.2, 0.7, 0.9, 1, 1.1);
		}
		else if (interest == "male")
		{
			multiplier(1.3, 1.4, 0.8, 1.3, 1, 0.7);
		}
	}

	if (weeb == "yes")
	{
		if (interest == "female")
		{
			multiplier(0.6, 1.1, 0.7, 1.5, 1.4, 0.2);
		}
		else if (interest == "male")
		{
			multiplier(0.9, 1.6, 0.8, 1.3, 1.2, 0.9);
		}
	}

	if (swag = "yes")
	{
		if (interest == "female")
		{
			multiplier(1.4, 1.5, 1.1, 0.5, 1.5, 1.9);
		}
		else if (interest == "male")
		{
			multiplier(1.5, 1.5, 0.7, 0.6, 0.8, 1.9);
		}
	}

	hot = set100(hot);
	cute = set100(cute);
	charm = set100(charm);
	kind = set100(kind);
	reliable = set100(reliable);
	drip = set100(drip);
}

function getLength(number) 
{
    return number.toString().length;
}

function multiplier(hotM, cuteM, charmM, dripM, kindM, reliableM)
{
	hot *= hotM;
	cute *= cuteM;
	charm *= charmM;
	drip *= dripM;
	kind *= kindM;
	reliable *= reliableM;
}

function set100(number)
{
	if (number >= 100)
	{
		number = 100;
	}
	return number;
}

function weightCalculation()
{
	var total = hot * 1.5 + cute * 1.4 + charm * 1.1 + kind * 0.75 + reliable * 0.7;
	percentage = total/600;
	if ((name == "Lucas")||(name == "Chad"))
	{
		percentage = 1;
	}
	percentage = Math.floor(percentage*100);
}

function returnPercentage()
{
/*
	document.getElementById("hot").innerHTML = localStorage.getItem("keyHot");
	document.getElementById("cute").innerHTML = localStorage.getItem("keyCute");
	document.getElementById("charm").innerHTML = localStorage.getItem("keyCharm");
	document.getElementById("reliable").innerHTML = localStorage.getItem("keyReliable");
	document.getElementById("drip").innerHTML = localStorage.getItem("keyDrip");
	document.getElementById("kind").innerHTML = localStorage.getItem("keyKind");
	document.getElementById("percent").innerHTML = localStorage.getItem("keyPercent");*/
	
	chartStuff(); 
	percentStuff();

}

function getter(whichName)
{
	if (whichName == "hot")
	{
		return (parseInt(localStorage.getItem("keyHot")));
	}

	else if (whichName == "cute")
	{
		return (parseInt(localStorage.getItem("keyCute")));
	}

	else if (whichName == "charm")
	{
		return (parseInt(localStorage.getItem("keyCharm")));
	}

	else if (whichName == "reliable")
	{
		return (parseInt(localStorage.getItem("keyReliable")));
	}

	else if (whichName == "drip")
	{
		return (parseInt(localStorage.getItem("keyDrip")));
	}

	else if (whichName == "kind")
	{
		return (parseInt(localStorage.getItem("keyKind")));
	}
}

function chartStuff()
{

		google.charts.load("current", {packages:["corechart"]});
		    google.charts.setOnLoadCallback(drawChart);
		    function drawChart() {
		      var data = google.visualization.arrayToDataTable([
		        ["Stat", "Percentage", { role: "style" } ],
		        ["Hotness", getter("hot"), "color: #462066"],
		        ["Cuteness", getter("cute"), "color: #FFB85F"],
		        ["Charm", getter("charm"), "color: #FF7A5A"],
		        ["Reliablility", getter("reliable"), "color: #00AAA0"],
		        ["Drippiness", getter("drip"), "color: #8ED2C9"],
		        ["Kindness", getter("kind"), "color: #FCF4D9"],
		      ]);

		      var view = new google.visualization.DataView(data);
		      view.setColumns([0, 1,
		                       { calc: "stringify",
		                         sourceColumn: 1,
		                         type: "string",
		                         role: "annotation" },
		                       2]);

		      var options = {
		        title: "Stats",
		        width: 1000,
		        height: 800,
		        bar: {groupWidth: "95%"},
		        legend: { position: "none" },
		      };
		      var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
		      chart.draw(view, options);
		  }
}

function percentStuff()
{

	document.getElementById("percentage").innerHTML = "Well... " + localStorage.getItem("keyName");
	document.getElementById("moreText").innerHTML =  "Your chance of getting it is " + localStorage.getItem("keyPercent") + "%";
}

function goBack()
{
	window.location.href = "index.html";
}