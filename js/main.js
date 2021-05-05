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
	// ...
};