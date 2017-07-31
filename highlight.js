var itemsall = document.body.getElementsByTagName('*'),
    il = itemsall.length,
    vw = window.innerWidth,
    toggle;
// Reset ext icon
window.onload = function() {
  chrome.runtime.sendMessage({toggle: false}, function(response) {});
};
// Containing function
var highlighter = function(context) {
// Loop to cycle through each DOM element and apply an outline.
for (var i=0; i < il; i++) {
  var els = (itemsall[i]),
  offset = els.getBoundingClientRect(),
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
    // add overflow warning
    function addOverflowWarning(parent,offset) {
    	var overflowWarning = document.createElement('span');
        overflowWarning.className= "overflow-warning-" + i;
        overflowWarning.style.position = "absolute";
        overflowWarning.style.top = "0px";
        overflowWarning.style.left = "0px";
      	overflowWarning.style.height = "0";
      	overflowWarning.style.width = "0";
      	overflowWarning.style.zIndex = "999";
      	overflowWarning.style.borderTop = "15px solid transparent";
      	overflowWarning.style.borderLeft = "30px solid red";
      	overflowWarning.style.borderBottom = "15px solid transparent";
    	overflowWarning.innerHTML = '<span style="position:absolute; color: #fff; left: -36px; top: -12px; font-size: 16px;"> ! </span>';
    	parent.appendChild(overflowWarning);
    }
    if (offset.width > vw) {
  		els.setAttribute("style", "outline: 2px dashed red");
  		addOverflowWarning(els,offset.top);
  	}
}
toggle = true;
chrome.runtime.sendMessage({toggle: true}, function(response) {});
// Reset function - removes all outline properties.
window.revert = function() {
  for (var i=0; i < il; i++) {
    var els = (itemsall[i]);
    els.style.removeProperty("outline");
  };
  var warningsList = document.querySelectorAll('.overflow-warning');
  for (var i=0; i < warningsList.length; i++) {
  	if ( warningsList[i] != undefined ) {
  	warningsList[i].parentNode.removeChild(warningsList[i]);
  	}
  }
  toggle = false;
  chrome.runtime.sendMessage({toggle: false}, function(response) {});
};
};
