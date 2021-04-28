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
	
	Array.prototype.forEach.call(content, function(elem) {
		elem.style.display = (elem.id == "content-"+num) ? "inline-block" : "none";
	});
}

// On load
window.onload = function() {
	var defaultContent = document.getElementById("content").getAttribute("data-default");
	var menuLinks = document.querySelectorAll(".mlink");
	
	// Show default content
	showContent(defaultContent);
	
	// Enable menu contents by link
	Array.prototype.forEach.call(menuLinks, function(elem){
		elem.addEventListener("click", function(event) {
			showContent(event.target.getAttribute("data-target"));
		});
	});
};

// On resize
window.onresize = function() {
	adjustFooter();
};