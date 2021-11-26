/*!
 * Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2021 Start Bootstrap
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
  const responsiveNavItems = [].slice.call(document.querySelectorAll("#navbarResponsive .nav-link"));
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});
// Filtering
$(".filter-button").on("click", (e) => {
  const filter = $(e.target).attr("data-filter");
  console.log(filter);
  const items = $(".item-content").parent();
  for (item of items) {
    if (filter == "") {
      $(item).removeClass("d-none");
      $(item).parent().removeClass("d-none");
      console.log("x");
    } else if ($(item).attr("data-category") == filter) {
      $(item).removeClass("d-none preload");
      $(item).parent().removeClass("d-none");
    } else {
      $(item).addClass("d-none fadeOut");
      $(item).parent().addClass("d-none");
    }
  }
});

// fadein when filter selected parent div must have image class and child needs preload class with preload CSS applied display none

// when d-none is removed add

// fadein

// window.onload = function () {
//   // your stuff
// };

if ((document.body.style.opacity = `1`)) {
  $(".image").ready(function () {
    $(".preload").fadeIn(1000);
  });
} else {
  console.log(`load error`);
}

// homepage
onload = "document.body.style.opacity='1'";
