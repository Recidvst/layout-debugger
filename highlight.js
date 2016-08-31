// GET all divs in page body + total no.
var itemsall = document.body.getElementsByTagName('*');
var il = itemsall.length;
var oldborder;

// Containing function
var highlighter = function(context) {

// Loop to cycle through each DOM element and apply an outline according to display type.
for (var i=0; i < il; i++) {
  var els = (itemsall[i]);
  dispstyle = window.getComputedStyle(els),
  disp = dispstyle.getPropertyValue('display');
    switch(disp) {
        case "block":
            els.style.outline = '1px solid blue';
            break;
        case "list-item":
            els.style.outline = '1px solid darkgrey';
            break;
        case "inline-block":
            els.style.outline = '1px solid cyan';
            break;
        case "inline":
            els.style.outline = '1px solid purple';
            break;
        case "flex":
            els.style.outline = '1px solid green';
            break;
        case "none":
            els.style.outline = '1px dotted black';
            break;
        default:
            els.style.outline = '1px dotted grey';
            break;
    };
}

// Reset function - removes all outline properties. Better way to do this?
window.revert = function() {
  for (var i=0; i < il; i++) {
    var els = (itemsall[i]);
    els.style.removeProperty("outline");
  };
};

};

// Call main function.
highlighter(window);
// Call reset function.
revert(window);

// ----------------------------------------------------------------------

/*
//Array for holding colours instead of switch params???
var display_set = {
    block : "blue",
    'inline-block' : "orange",
    inline : "red",
    flex : "green"
}
//Switch off differently? Fill an array with old border style and the re-populate.
var storeborders = [];
oldborder = dispstyle.getPropertyValue('border');
storeborders.push(oldborder);
var revert = function() {
  for (var i=0; i < il; i++) {
    var els = (itemsall[i]);
    els.style.outline = storeoutlines[i];
  };
};
//Different approach to getting all DOM elements initially.
if (document.querySelectorAll) {
    var allDivs = document.querySelectorAll("div");
}
*/
