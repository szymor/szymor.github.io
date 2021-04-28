// Adjust footer
function adjustFooter() {
	var footer = document.getElementById("footer");
	var menu = document.getElementById("menu");
	var frect = footer.getBoundingClientRect();
	var mrect = menu.getBoundingClientRect();
	
	footer.style.visibility = (mrect.bottom > frect.top) ? "hidden" : "visible";
}

// Show content
function showContent(num) {
	var content = document.querySelectorAll('[id*="content-"]');
	
	Array.prototype.forEach.call(content, function(elem){
		elem.style.display = (elem.id == "content-"+num) ? "inline-block" : "none";
	});
}

// On load
window.onload = function() {
	showContent(90);
};

// On resize
window.onresize = function() {
	adjustFooter();
};