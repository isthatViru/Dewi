// This function will run when the page loads
window.onload = function () {
  // Automatically activate the first tab and its content on page load
  const firstTabButton = document.querySelector(".tabs button");
  const firstTabContent = document.getElementById("tab1");

  firstTabButton.classList.add("active");
  firstTabContent.classList.add("active");
};

function showContent(id, btn) {
  const tabs = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tabs button");

  // Remove 'active' class from all tabs and buttons
  tabs.forEach((tab) => tab.classList.remove("active"));
  buttons.forEach((b) => b.classList.remove("active"));

  // Add 'active' class to the selected tab and button
  document.getElementById(id).classList.add("active");
  btn.classList.add("active");
}

const carousel = new bootstrap.Carousel("#myCarousel", {
  interval: 3000,
  ride: "carousel",
  wrap: true,
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".php-email-form");
  const emailInput = form.querySelector('input[type="email"]');
  const submitButton = form.querySelector('input[type="submit"]');
  const loadingMessage = form.querySelector(".loading");
  const errorMessage = form.querySelector(".error-message");
  const successMessage = form.querySelector(".sent-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();

    // Basic validation
    if (!email || !validateEmail(email)) {
      errorMessage.textContent = "Please enter a valid email address.";
      errorMessage.style.display = "block";
      return;
    }

    // Hide any previous error/success messages
    errorMessage.style.display = "none";
    successMessage.style.display = "none";

    // Show loading message
    loadingMessage.style.display = "block";

    // Simulate form submission (use fetch or other AJAX method for real-world use)
    setTimeout(function () {
      // Simulate successful submission response
      const isSuccessful = true; // Change this based on actual response

      if (isSuccessful) {
        successMessage.textContent =
          "Your subscription request has been sent. Thank you!";
        successMessage.style.display = "block";
      } else {
        errorMessage.textContent =
          "There was an error with your subscription. Please try again.";
        errorMessage.style.display = "block";
      }

      // Hide loading message after response
      loadingMessage.style.display = "none";
    }, 2000); // Simulate a delay of 2 seconds
  });

  // Email validation function
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  }
});
