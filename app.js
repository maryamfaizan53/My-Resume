// Selecting DOM elements with proper type annotations
// Select DOM elements with proper type assertions
var menuIcon = document.querySelector("#menu-icon");
var navbar = document.querySelector(".navbar");
var sections = document.querySelectorAll("section");
var navlinks = document.querySelectorAll("header nav a");
// Check if the menu icon and navbar exist before adding event listeners
if (menuIcon && navbar) {
    // Menu icon click event
    menuIcon.onclick = function () {
        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle("active");
    };
}
// Window scroll event
window.onscroll = function () {
    var scrollPosition = window.scrollY;
    sections.forEach(function (section) {
        var sectionOffset = section.offsetTop - 150;
        var sectionHeight = section.offsetHeight;
        var sectionId = section.getAttribute("id");
        // Only proceed if the section has a valid ID and is in the current viewport
        if (sectionId && scrollPosition >= sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
            navlinks.forEach(function (link) {
                // Remove active class from all links
                link.classList.remove("active");
                // Highlight the current section's link in the navbar
                var activeLink = document.querySelector("header nav a[href*=\"".concat(sectionId, "\"]"));
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            });
        }
    });
};
