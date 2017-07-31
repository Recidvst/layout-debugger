var itemsall = document.body.getElementsByTagName('*');
var il = itemsall.length;
var vw = window.innerWidth;

for (var i=0; i < il; i++) {
	var offset = itemsall[i].getBoundingClientRect();
	if (offset.width > vw) {
		itemsall[i].setAttribute("style", "outline: 2px dashed red"); 
		addOverflowWarning(itemsall[i],offset.top);
	}
};

// add indicator - red triangle? Make sure to kill it after click off.
function addOverflowWarning(parent,offset) {
	var overflowWarning = document.createElement('span');
        overflowWarning.className= "overflow-warning";

        overflowWarning.style.position = "absolute";
        overflowWarning.style.top = offset + "px";
        overflowWarning.style.right = "0";
	
	overflowWarning.style.height = "0";
	overflowWarning.style.width = "0";
	overflowWarning.style.zIndex = "999";
	
	overflowWarning.style.borderTop = "15px solid transparent";
	overflowWarning.style.borderLeft = "30px solid red";
	overflowWarning.style.borderBottom = "15px solid transparent";
	
	overflowWarning.innerHTML = '<span style="position:absolute; color: #fff; left: -25px; top: -12px;"> ! </span>';	    
	
	parent.appendChild(overflowWarning);
}


// revert fn include
var warningsList = document.querySelectorAll('.overflow-warning');
for (var i=0; i < warningsList.length; i++) {
	if ( warningsList[i] != undefined ) {
	warningsList[i].parentNode.removeChild(warningsList[i]);
	}
}
