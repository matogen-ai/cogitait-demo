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

  // Shrink the navbar when the page is scrolled
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
  
  responsiveNavItems.forEach(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

function toggleDescription(id, showLinkId) {
  var description = document.getElementById(id);
  var showLink = document.getElementById(showLinkId);
  
  if (description.style.display === "none") {
    description.style.display = "block";
    showLink.style.display = "none";
  } else {
    description.style.display = "none";
    if (showLink) showLink.style.display = "block";
  }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Show the spinner
  document.getElementById('spinner').style.display = 'block';
  
  const formData = {
    name: event.target.name.value,
    email: event.target.email.value,
    location: event.target.location.value,
    industry: event.target.industry.value,
    message: event.target.message.value
  };

  // Optionally, disable the submit button to prevent multiple submissions
  event.target.querySelector('input[type="submit"]').disabled = true;
  
  callUrl('https://formsubmit.co/fa123', formData, event);
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function callUrl(url, data, event) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.text(); // Expecting HTML response
  })
  .then(html => {
    // Insert the HTML response into a specific element (e.g., a div)
    document.getElementById('formContainer').innerHTML = html;

    // Hide the spinner and reset the form if needed
    document.getElementById('spinner').style.display = 'none';
  })
  .catch(error => {
    alert('There has been a problem with your fetch operation: ' + error.message);
    console.error('There has been a problem with your fetch operation:', error);
    
    // Hide the spinner
    document.getElementById('spinner').style.display = 'none';
  });
}