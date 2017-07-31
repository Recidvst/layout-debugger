var itemsall = document.body.getElementsByTagName('*');
var il = itemsall.length;
var vw = window.innerWidth;

for (var i=0; i < il; i++) {
	if (itemsall[i].offsetWidth > vw) {
    	console.log(itemsall[i]);
		itemsall[i].setAttribute("style", "border: 2px dashed red"); 
		var topOffset = itemsall[i].getBoundingClientRect().top;
		addOverflowWarning(itemsall[i],topOffset);
	}
};

// add indicator - red triangle? Make sure to kill it after click off.
function addOverflowWarning(parent,offset) {
	var overflowWarning = document.createElement('span');
        overflowWarning.className= "overflowWarning";

        overflowWarning.style.position = "fixed";
        overflowWarning.style.top = offset;
        overflowWarning.style.right = "0";
	
	overflowWarning.style.height = "0";
	overflowWarning.style.width = "0";
	overflowWarning.style.zIndex = "999";
	
	overflowWarning.style.borderTop = "10px solid transparent";
	overflowWarning.style.borderLeft = "30px solid red";
	overflowWarning.style.borderBottom = "10px solid transparent";
		
	parent.appendChild(overflowWarning);
}
