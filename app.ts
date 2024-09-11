// Selecting DOM elements with proper type annotations
// Select DOM elements with proper type assertions
let menuIcon = document.querySelector("#menu-icon") as HTMLElement | null;
let navbar = document.querySelector(".navbar") as HTMLElement | null;
let sections = document.querySelectorAll("section") as NodeListOf<HTMLElement>;
let navlinks = document.querySelectorAll("header nav a") as NodeListOf<HTMLAnchorElement>;

// Check if the menu icon and navbar exist before adding event listeners
if (menuIcon && navbar) {
  // Menu icon click event
  menuIcon.onclick = () => {
    menuIcon!.classList.toggle("bx-x");
    navbar!.classList.toggle("active");
  };
}

// Window scroll event
window.onscroll = () => {
  let scrollPosition = window.scrollY;

  sections.forEach((section) => {
    let sectionOffset = section.offsetTop - 150;
    let sectionHeight = section.offsetHeight;
    let sectionId = section.getAttribute("id");

    // Only proceed if the section has a valid ID and is in the current viewport
    if (sectionId && scrollPosition >= sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
      navlinks.forEach((link) => {
        // Remove active class from all links
        link.classList.remove("active");

        // Highlight the current section's link in the navbar
        let activeLink = document.querySelector(`header nav a[href*="${sectionId}"]`) as HTMLAnchorElement | null;
        if (activeLink) {
          activeLink.classList.add("active");
        }
      });
    }
    })};