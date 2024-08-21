/*!
 * Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});
// function scrollToSection(event, sectionId) {
//   event.preventDefault();
//   const minWidth = 600;
//   if (window.innerWidth > minWidth) {
//     const offset = 235; // Adjust this value based on the height of your sticky header
//     const section = document.getElementById(sectionId);
//     const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;
//     window.scrollTo({
//       top: sectionPosition,
//       behavior: 'smooth'
//     }
//   )
//   } else {
//     // Default behavior for smaller screens
//     window.location.hash = sectionId;
//   }
  
// }
function toggleDescription(id, showLinkId) {
  debugger
  var description = document.getElementById(id);
  var showLink = document.getElementById(showLinkId);
  if (description.style.display === "none") {
      description.style.display = "block";
      showLink.style.display = "none"
  } else {
      description.style.display = "none";
      if(showLink)
        showLink.style.display = "block"
  }
}
