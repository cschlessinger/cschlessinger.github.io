 // U3.W7: Design Basic Game Solo Challenge

// This is a solo challenge

// Your mission description:
// Overall mission: Run through a presidential election cycle
// Goals: Determine who will be the next president of the United States.
// Characters: Hillary Clinton
// Objects: Candidate(name, party, points, quote), timeToElection(month)
// Functions: createCandidate, nextMonth, speech, slay, kissBabies, scandal, gaffe

// Pseudocode
// Calling the nextMonth function will update the month until it gets to September 2016
// Every month, each candidate will give a speech that will either gain or lose them a point depending on random math.
// Candidates can be manipulated directly with gaffes, scandals, kissing babies, and slaying.
// nextMonth checks if === september 2016; if yes, game is over.
// Candidate with the most points wins and losing players are fired.

// Initial Code

// //create candidates

// var candidates = []

// function Candidate(name, party, points, quote) {
//     this.name = name;
//     this.party = party;
//     this.points = points;
//     this.quote = quote;
// }

// candidates.push(hillary = new Candidate("Hillary Rodham Clinton", "Democrat", 0, "Every American deserves access to the healthcare they need."));
// candidates.push(bernie = new Candidate("Bernie Sanders", "Democrat", 0, "Freedom of speech does not mean the freedom to buy the United States government."));
// candidates.push(donald = new Candidate("Donald Trump", "Republican", 0, "Part of the beauty of me is that I'm very rich."));
// candidates.push(carly = new Candidate("Carly Fiorina", "Republican", 0, "I am resolute in my belief that the highest calling of leadership is to unlock the potential in others."));

// //countdown code

// var countdown = {
// 	month: ["August 2015", "September 2015", "October 2015", "November 2015", "December 2015", "January 2016", "February 2016", "March 2016", "April 2016", "May 2016", "June 2016", "July 2016", "August 2016", "September 2016"]
// }

// var now = 0

// function nextMonth() {

// 	if (countdown.month[now] === "September 2016") {
// 		checkWinner();
// 	}
// 	else {
// 		console.log(countdown.month[now]);
// 		now ++ ;
//     	if (now !== 0) {
//     		speech(candidates);
//     	}
// 	console.log(candidates);
// 	}
// }

// function checkWinner() {
// 	winner = []
// 	pointsArray = []
// 	for (var i = 0; i < candidates.length; i++)
// 		pointsArray.push(candidates[i].points)
// 	var highestPoints = Math.max.apply(null, pointsArray);
// 	for (var i = 0; i < candidates.length; i++)
// 		if (candidates[i].points === highestPoints)
// 			winner.push(candidates[i].name);
//     console.log(winner + " won the election!")
// }



// //point manipulator functions

// function speech(candidates) {
// 	for (var i = 0; i < candidates.length; i++)
// 		if (Math.random() >= 0.5) {
// 			candidates[i].points += 1;
// 			console.log(candidates[i].name + " gained 1 point")
// 		}
// 		else {
// 			candidates[i].points -= 1;
// 			console.log(candidates[i].name + " lost 1 point")
// 		}
// }

// function slay(candidate) {
// 	candidate.points +=2;
// 	if (candidate === hillary) {
// 		console.log("They're called babies.");
// 	}
// 	else if (candidate === bernie) {
// 		console.log("Nobody who works 40 hours a week should be living in poverty.");
// 	}
// 	else if (candidate === donald) {
// 		console.log("Since announcing his campaign in late June, Donald Trump has quickly leapt to the top of the Republican field, leading recent polls nationally, in Iowa and in New Hampshire.");
// 	}
// 	else if (candidate === carly) {
// 		console.log("An NBC News Poll this month found that 22% of Republican-leaning voters who followed the debates said Fiorina performed the best among all the candidates.");
// 	}
// };

// function kissBabies(candidate) {
// 	candidate.points +=1;
// 	if (candidate === hillary) {
// 		console.log("Families who work hard and do their part deserve to get ahead and stay ahead.");
// 	}
// 	else if (candidate === bernie) {
// 		console.log("Right now, it's 92° in Reno, NV & there are thousands people berning up to hear Bernie Sanders speak tonight.");
// 	}
// 	else if (candidate === donald) {
// 		console.log("Make AMerica Great Again");
// 	}
// 	else if (candidate === carly) {
// 		console.log("Full house for tonight's spaghetti dinner at the Littleton VFW! #Carly2016 #nhpolitics");
// 	}
// };

// function scandal(candidate) {
// 	candidate.points -=2;
// 	if (candidate === hillary) {
// 		console.log("My biggest, you know, regret is what happened in Benghazi.");
// 	}
// 	else if (candidate === bernie) {
// 		console.log("#BernieSoBlack Don Lemon told him to pull his pants up");
// 	}
// 	else if (candidate === donald) {
// 		console.log("When Mexico sends its people, they’re not sending their best. They’re sending people that have lots of problems. They’re bringing drugs. They’re bringing crime. They’re rapists.");
// 	}
// 	else if (candidate == carly) {
// 		console.log("\"Carly Fiorina failed to register this domain. So I’m using it to tell you how many people she laid off at Hewlett-Packard,\" the page says, followed by 30,000 emoticons for a sad face.");
// 	}
// };

// function gaffe(candidate) {
// 	candidate.points -=1;
// 	if (candidate === hillary) {
// 		console.log("All lives matter");
// 	}
// 	else if (candidate === bernie) {
// 		console.log("Michael Briggs, Sanders' newly minted campaign spokesman, said the article was a \"dumb attempt at dark satire in an alternative publication\" that \"in no way reflects his views or record on women.");
// 	}
// 	else if (candidate === donald) {
// 		console.log("There was blood coming out of her eyes, blood coming out of her... wherever.");
// 	}
// 	else if (candidate === carly) {
// 		console.log("Fresh off a victory and preparing for an appearance on KXTV in Sacramento Wednesday morning, California Republican Senate candidate Carly Fiorina was caught sharing a joke about Sen. Barbara Boxer's hairdo.");
// 	}
// };

//driver code

// nextMonth();
// gaffe(donald);
// nextMonth();
// scandal(hillary);
// nextMonth();
// kissBabies(bernie);
// nextMonth();
// slay(carly);
// nextMonth();
// slay(hillary);
// nextMonth();
// scandal(carly);
// nextMonth();
// gaffe(donald);
// nextMonth();
// kissBabies(hillary);
// nextMonth();
// slay(bernie);
// nextMonth();
// scandal(donald);
// nextMonth();
// gaffe(carly);
// nextMonth();
// kissBabies(bernie);
// nextMonth();
// slay(hillary);
// nextMonth();


// Refactored Code

//create candidates

var candidates = []

function Candidate(name, party, points, quote) {
    this.name = name;
    this.party = party;
    this.points = points;
    this.quote = quote;
}

candidates.push(hillary = new Candidate("Hillary Rodham Clinton", "Democrat", 0, "Every American deserves access to the healthcare they need."));
candidates.push(bernie = new Candidate("Bernie Sanders", "Democrat", 0, "Freedom of speech does not mean the freedom to buy the United States government."));
candidates.push(donald = new Candidate("Donald Trump", "Republican", 0, "Part of the beauty of me is that I'm very rich."));
candidates.push(carly = new Candidate("Carly Fiorina", "Republican", 0, "I am resolute in my belief that the highest calling of leadership is to unlock the potential in others."));

//countdown code

var countdown = {
	month: ["August 2015", "September 2015", "October 2015", "November 2015", "December 2015", "January 2016", "February 2016", "March 2016", "April 2016", "May 2016", "June 2016", "July 2016", "August 2016", "September 2016"]
}

var now = 0

function startElection() {

}

function nextMonth() {

    if (now === 0) {
        console.log(countdown.month[now])
        console.log(candidates);
        now ++ ;
    }
    
	else if (countdown.month[now] === "September 2016") {
		checkWinner();
	}
	else {
		console.log(countdown.month[now]);
		now ++ ;
    	speech(candidates);
	}
}

function checkWinner() {
	winner = []
	losers = []
	pointsArray = []
	for (var i = 0; i < candidates.length; i++)
		pointsArray.push(candidates[i].points)
	var highestPoints = Math.max.apply(null, pointsArray);
	for (var i = 0; i < candidates.length; i++) {
		if (candidates[i].points === highestPoints)
			winner.push(candidates[i].name);
		else
			losers.push(candidates[i].name);
	}
	if (winner.length === 1) {
        console.log(winner + " won the election!");
    	console.log(losers[0] + ", " + losers[1] + ", " + losers[2] + ", YOU'RE FIRED");
    }
    else {
        console.log("Oh no, a tie between " + winner[0] + " and " + winner[1]);
        tiebreaker(winner);
        console.log(losers[0] + ", " + losers[1] + ", " + losers[2] + ", YOU'RE FIRED");
    }

}



//point manipulator functions

function speech(candidates) {
	for (var i = 0; i < candidates.length; i++)
		if (Math.random() >= 0.5) {
			candidates[i].points += 1;
			console.log(candidates[i].name + " gained 1 point" + " and has " + candidates[i].points + " point(s)")
		}
		else {
			candidates[i].points -= 1;
			console.log(candidates[i].name + " lost 1 point" + " and has " + candidates[i].points + " point(s)")
		}
}

function tiebreaker(array) {
    var trueWinner = array[Math.floor(Math.random()*array.length)]
    console.log(trueWinner + " won the runoff race!")
}

function slay(candidate) {
	candidate.points +=2;
	if (candidate === hillary) {
		console.log("They're called babies.");
	}
	else if (candidate === bernie) {
		console.log("Nobody who works 40 hours a week should be living in poverty.");
	}
	else if (candidate === donald) {
		console.log("Since announcing his campaign in late June, Donald Trump has quickly leapt to the top of the Republican field, leading recent polls nationally, in Iowa and in New Hampshire.");
	}
	else if (candidate === carly) {
		console.log("An NBC News Poll this month found that 22% of Republican-leaning voters who followed the debates said Fiorina performed the best among all the candidates.");
	}
	console.log(candidate.name + " now has " + candidate.points + " point(s)");
};

function kissBabies(candidate) {
	candidate.points +=1;
	if (candidate === hillary) {
		console.log("Families who work hard and do their part deserve to get ahead and stay ahead.");
	}
	else if (candidate === bernie) {
		console.log("Right now, it's 92° in Reno, NV & there are thousands people berning up to hear Bernie Sanders speak tonight.");
	}
	else if (candidate === donald) {
		console.log("Make AMerica Great Again");
	}
	else if (candidate === carly) {
		console.log("Full house for tonight's spaghetti dinner at the Littleton VFW! #Carly2016 #nhpolitics");
	}
	console.log(candidate.name + " now has " + candidate.points + " point(s)");
};

function scandal(candidate) {
	candidate.points -=2;
	if (candidate === hillary) {
		console.log("My biggest, you know, regret is what happened in Benghazi.");
	}
	else if (candidate === bernie) {
		console.log("#BernieSoBlack Don Lemon told him to pull his pants up");
	}
	else if (candidate === donald) {
		console.log("When Mexico sends its people, they’re not sending their best. They’re sending people that have lots of problems. They’re bringing drugs. They’re bringing crime. They’re rapists.");
	}
	else if (candidate == carly) {
		console.log("\"Carly Fiorina failed to register this domain. So I’m using it to tell you how many people she laid off at Hewlett-Packard,\" the page says, followed by 30,000 emoticons for a sad face.");
	}
	console.log(candidate.name + " now has " + candidate.points + " point(s)");
};

function gaffe(candidate) {
	candidate.points -=1;
	if (candidate === hillary) {
		console.log("All lives matter");
	}
	else if (candidate === bernie) {
		console.log("Michael Briggs, Sanders' newly minted campaign spokesman, said the article was a \"dumb attempt at dark satire in an alternative publication\" that \"in no way reflects his views or record on women.");
	}
	else if (candidate === donald) {
		console.log("There was blood coming out of her eyes, blood coming out of her... wherever.");
	}
	else if (candidate === carly) {
		console.log("Fresh off a victory and preparing for an appearance on KXTV in Sacramento Wednesday morning, California Republican Senate candidate Carly Fiorina was caught sharing a joke about Sen. Barbara Boxer's hairdo.");
	}
	console.log(candidate.name + " now has " + candidate.points + " point(s)");
};

// driver code

nextMonth();
gaffe(donald);
nextMonth();
scandal(hillary);
nextMonth();
kissBabies(bernie);
nextMonth();
slay(carly);
nextMonth();
slay(hillary);
nextMonth();
scandal(carly);
nextMonth();
gaffe(donald);
nextMonth();
kissBabies(hillary);
nextMonth();
slay(bernie);
nextMonth();
scandal(donald);
nextMonth();
gaffe(carly);
nextMonth();
kissBabies(bernie);
nextMonth();
slay(hillary);
nextMonth();