// Global variables
var clientSize = document.body.clientWidth;
var screenSize = {'xs'	: { 'up' : 575.98, 'down' : 576 },
				  'sm'	: { 'up' : 767.98, 'down' : 768 },
				  'md'	: { 'up' : 991.98, 'down' : 992 },
				  'lg'	: { 'up' : 1199.98, 'down' : 1200 },
				  'xl'	: { 'up' : 1359.98, 'down' : 1366 }};

// Show content
function showContent(num, firstTime) {
	var content = document.querySelectorAll('[id*="content-"]');
	
	Array.prototype.forEach.call(content, function(elem) {
		elem.style.display = (elem.id == "content-"+num) ? "inline-block" : "none";
	});
	
	if(!firstTime && clientSize < screenSize.md.up) {
		menuContent();
	}
}

// Menu content
function menuContent() {
	var button = document.getElementById("toggle");
	var content = document.getElementById("menu");

	button.getElementsByTagName("span")[0].innerHTML = (content.offsetHeight > 50) ? "+" : "-";
	content.style.height = (content.offsetHeight > 50) ? "50px" : "auto";
}

// On load
window.onload = function() {
	var defaultContent = document.getElementById("content").getAttribute("data-default");
	var menuLinks = document.querySelectorAll(".mlink");
	var menuButton = document.getElementById("toggle");
	
	// Show default content
	showContent(defaultContent, true);
	
	// Enable menu contents by link
	Array.prototype.forEach.call(menuLinks, function(elem) {
		elem.addEventListener("click", function(event) {
			showContent(event.target.getAttribute("data-target"), false);
		});
	});
	
	// Toggle menu
	menuButton.addEventListener("click", function(event) {
		menuContent();
	});
};

// On resize
window.onresize = function() {
	clientSize = document.body.clientWidth;
};