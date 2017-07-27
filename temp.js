var itemsall = document.body.getElementsByTagName('*');
var il = itemsall.length;
var vw = window.innerWidth;

for (var i=0; i < il; i++) {
	if (itemsall[i].offsetWidth > vw) {
    	console.log(itemsall[i]);
		itemsall[i].setAttribute("style", "border: 5px solid red"); 
	}
};

// add indicator - red triangle? Make sure to kill it after click off.
