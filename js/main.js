function adjustFooter() {
	footer = document.getElementById("footer");
	menu = document.getElementById("menu");
	frect = footer.getBoundingClientRect();
	mrect = menu.getBoundingClientRect();
	if (mrect.bottom > frect.top)
		footer.style.visibility = "hidden";
	else
		footer.style.visibility = "visible";
}
function showContent(num) {
	for (i = 0; i < 100; ++i) {
		content = document.getElementById("content" + i);
		if (content) {
			if (i == num)
				content.style.display = "inline-block";
			else
				content.style.display = "none";
		}
	}
}