var links = document.querySelectorAll('a');
var main = document.querySelector('main');
var header = document.querySelector('header');
var footer = document.querySelector('body>footer');

for (var i = 0; i < links.length; i++) {
	links[i].addEventListener("click", prevent);
}

function prevent(e) {
	if (this.getAttribute("href") == "/#") {
		location.hash = "closed";
		e.preventDefault();
	}
	if (this.getAttribute("href") == "#detail") {
		main.classList.add('de-emphasized');
		header.classList.add('de-emphasized');
		footer.classList.add('de-emphasized');
	} else {
		main.classList.remove('de-emphasized');
		header.classList.remove('de-emphasized');
		footer.classList.remove('de-emphasized');
	}
}

var scroll = new SmoothScroll('a[href="#main"]', {
	// Selectors
	ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
	header: 'header', // Selector for fixed headers (must be a valid CSS selector)

	// Speed & Easing
	speed: 500, // Integer. How fast to complete the scroll in milliseconds
	offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
	easing: 'easeInOutCubic', // Easing pattern to use
	customEasing: function(time) {

		// Function. Custom easing pattern
		// If this is set to anything other than null, will override the easing option above

		// return <your formulate with time as a multiplier>

		// Example: easeInOut Quad
		return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

	},

	// Callback API
	before: function(anchor, toggle) {}, // Callback to run before scroll
	after: function(anchor, toggle) {} // Callback to run after scroll
});

var loader = document.querySelector('.loader');
setTimeout(function() {
	loader.classList.add('hidden');
}, 1000);
