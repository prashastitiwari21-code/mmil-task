/* ================================
   BUTTON CLICK ALERTS
================================ */

// Free Trial Button
document.getElementById("trialBtn")?.addEventListener("click", function () {
    alert("Free Trial Started 🚀");
});

// Contact Button
document.getElementById("contactBtn")?.addEventListener("click", function () {
    alert("We will contact you soon!");
});


/* ================================
   ENROLL BUTTONS (COURSES)
================================ */

let enrollButtons = document.querySelectorAll(".enrollBtn");

enrollButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        alert("You have enrolled successfully 🎉");
    });
});


/* ================================
   FAQ ACCORDION
================================ */

let questions = document.querySelectorAll(".faq-question");

questions.forEach(function (question) {
    question.addEventListener("click", function () {

        let answer = this.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }

    });
});


/* ================================
   SMOOTH SCROLL NAVBAR
================================ */

let navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {

        e.preventDefault();

        let targetId = this.getAttribute("href");
        let targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });

    });
});


/* ================================
   STILL GOT QUESTIONS BUTTON
================================ */

document.getElementById("questionBtn")?.addEventListener("click", function () {
    alert("Our team will reach out to you shortly 😊");
});


