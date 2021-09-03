const toggleNav = document.getElementById("js-toggle");
const showNavMenu = document.getElementById("js-header-nav__menu");
const overlay = document.querySelector(".header-nav__overlay");

toggleNav.onclick = function () {
	toggleNav.classList.toggle("header-nav__toggle--open");

	if (toggleNav.classList.contains("header-nav__toggle--open")) {
		showNavMenu.classList.remove("header-nav__menu--hide");
		showNavMenu.classList.add("header-nav__menu--show");
		overlay.classList.add("header-nav__overlay--show");
		overlay.classList.remove("header-nav__overlay--hide");
	} else {
		showNavMenu.classList.add("header-nav__menu--hide");
		showNavMenu.classList.remove("header-nav__menu--show");

		overlay.classList.add("header-nav__overlay--hide");
		overlay.classList.remove("header-nav__overlay--show");
	}
};

overlay.onclick = function () {
	toggleNav.classList.remove("header-nav__toggle--open");
	overlay.classList.remove("header-nav__overlay--show");
	showNavMenu.classList.remove("header-nav__menu--show");
	overlay.classList.add("header-nav__overlay--hide");
	overlay.classList.add("header-nav__overlay--hide");
};
