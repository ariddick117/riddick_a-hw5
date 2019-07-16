(() => {
	//this is a self invoking function
	console.log('My JS issa workin!');

	// set up your variable stack -> make connections to the elements you are interacting with or the page
	let mobileNav = document.querySelector('.nav'),
		navPanel = document.querySelector('#burgerCon'),

		// select ALL of the nav panel anchor tags (the A element)
		navLinks = navPanel.querySelectorAll('a');

	function toggleNav(event) {
		// e is the event object by default. anchor tags try to navigate somewhere (this is a built in functionality)
		// we dont want that to happen so prevent that default behaviour and write your own
		event.preventDefault(); // stops the anchor(a) tag from navigating somewhere on the web

		// console.log is just for testing purposes... remove this when you have things working
		console.log('should show nav dropdown');

		// this should only fire when you click on an anchor tag -> "this" is the element you're clicking on
		// and it has a default nodeName (look in the inspector panel to find it)
		if (this.nodeName == "A") {
			debugger; // just for testing... remove when things are working
			// we clicked on an anchor tag, so do some navigation
			window.scrollTo({
				// we can ask the window to scroll to an element on the page => smoothscroll effect
				// single page layouts
				top: this.offsetTop,
				behavior: 'smooth'
			})
		}

		// make the mobile nav show up when you click on the nav link at the top right
		// and make it go away at a second click too
		navPanel.classList.toggle('showMobileNav'); // toggles existing class to turn off the display: none
	}
	
	mobileNav.addEventListener('click', toggleNav);
	navLinks.forEach(link => link.addEventListener('click', toggleNav));
})();