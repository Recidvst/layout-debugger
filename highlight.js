var highlighter = function(context) {

// GET all divs in page body + total no.
var itemsall = document.body.getElementsByTagName('*');
var il = itemsall.length;

for (var i=0; i < il; i++) {
  var els = (itemsall[i]);
  dispstyle = window.getComputedStyle(els),
  disp = dispstyle.getPropertyValue('display');
  oldborder = dispstyle.getPropertyValue('border');
    switch(disp) {
        case "block":
            els.style.border = '1px solid blue';
            break;
        case "list-item":
            els.style.border = '1px solid darkgrey';
            break;
        case "inline-block":
            els.style.border = '1px solid cyan';
            break;
        case "inline":
            els.style.border = '1px solid purple';
            break;
        case "flex":
            els.style.border = '1px solid green';
            break;
        case "none":
            els.style.border = '1px dotted black';
            break;
        default:
            console.log("default");
            console.log(oldborder);
            els.style.border = '1px dotted grey';
            break;
    };
}
};
highlighter(window);

var revert() {

}

    console.log("listed");
    console.log(oldborder);


//Array for holding colours???
    var display_set = {
        block : "blue",
        'inline-block' : "orange",
        inline : "red",
        flex : "green"
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
}
else {
	console.log("None Found");
	}
