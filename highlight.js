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
        case "flex":
            els.style.outline = '1px solid green';
            break;
        case "grid":
            els.style.outline = '1px solid cyan';
            break;
        case "table":
            els.style.outline = '1px solid greenyellow';
            break;
        case "inline-block":
            els.style.outline = '1px solid darkgoldenrod';
            break;
        case "inline":
            els.style.outline = '1px solid purple';
            break;
        case "inline-flex":
            els.style.outline = '1px solid darkorange';
            break;
        case "inline-grid":
            els.style.outline = '1px solid darkorange';
            break;
        case "inline-table":
            els.style.outline = '1px solid darkorange';
            break;
        case "list-item":
            els.style.outline = '1px solid yellow';
            break;
        case "run-in":
            els.style.outline = '1px solid bisque';
            break;
        case "none":
            els.style.outline = '1px dotted black';
            break;
        case "inherit":
            els.style.outline = '1px solid lightgrey';
            break;
        case "initial":
            els.style.outline = '1px solid lightgrey';
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
