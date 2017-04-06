var itemsall = document.body.getElementsByTagName('*'),
    il = itemsall.length,
    toggle;
// Reset ext icon
window.onload = function() {
  chrome.runtime.sendMessage({toggle: false}, function(response) {});
};
// Containing function
var highlighter = function(context) {
// Loop to cycle through each DOM element and apply an outline.
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
toggle = true;
chrome.runtime.sendMessage({toggle: true}, function(response) {});
// Reset function - removes all outline properties.
window.revert = function() {
  for (var i=0; i < il; i++) {
    var els = (itemsall[i]);
    els.style.removeProperty("outline");
  };
  toggle = false;
  chrome.runtime.sendMessage({toggle: false}, function(response) {});
};
};
