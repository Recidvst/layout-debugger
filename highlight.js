// GET all divs in page body + total no.
var itemsall = document.body.getElementsByTagName('*');
var il = itemsall.length;


// Array for colour scheme
var color_set = {
		div: "red",
		ul: "blue",
		a: "yellow",
		p: "green"
}

var addcolor = color_set.y;

// Init function to apply coloured borders.
var setstyle = function(y) {
	var addcolor = color_set.y;
	y.style.border = '1px solid ' + addcolor;
};

// Loop through elements and call function.
for (i = 1; i < il; i++) {
	els = itemsall[i];
	setstyle(els);
}







//Switch off how?
var removestyle = function(y) {
	y.removeAttribute("style");
};
for (i = 1; i < il; i++) {
	els = itemsall[i];
	removestyle(els);
}







if (document.querySelectorAll) {
    var allDivs = document.querySelectorAll("div");
    var allLists = document.querySelectorAll("li");
    var allLinks = document.querySelectorAll("a");
    var allHeaderOnes = document.querySelectorAll("h1");
	var
	}
else {
	console.log("None Found");
	}
