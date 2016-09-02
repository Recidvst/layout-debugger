alert("testfileloaded");

var itemsall = document.body.getElementsByTagName('*');
var il = itemsall.length;
var oldborder;
var iconOn;

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
iconOn = true;

// Reset function - removes all outline properties. Better way to do this?
window.revert = function() {
  for (var i=0; i < il; i++) {
    var els = (itemsall[i]);
    els.style.removeProperty("outline");
  };
  iconOn = false;
};

};

alert("testfileread");
