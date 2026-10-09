// Find the contact form and its fields.
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const formFeedback = document.getElementById("form-feedback");

// Validate the form and display a preview without reloading.
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Clear previous errors and feedback.
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        formFeedback.textContent = "";

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        let isValid = true;

        // Reject blank or whitespace-only names.
        if (name === "") {
            nameError.textContent = "Please enter your name.";
            isValid = false;
        }

        // Check the basic format of the email address.
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        // Reject blank or whitespace-only messages.
        if (message === "") {
            messageError.textContent = "Please enter a message.";
            isValid = false;
        }

        if (!isValid) {
            formFeedback.textContent =
                "Please correct the errors above and try again.";
            return;
        }

        // Display the validated information safely on the page.
        const previewTitle = document.createElement("h3");
        previewTitle.textContent = "Validated Message Preview";

        const previewName = document.createElement("p");
        previewName.textContent = "Name: " + name;

        const previewEmail = document.createElement("p");
        previewEmail.textContent = "Email: " + email;

        const previewMessage = document.createElement("p");
        previewMessage.textContent = "Message: " + message;

        const validationNotice = document.createElement("p");
        validationNotice.textContent =
            "The data was validated successfully. No message was sent.";

        formFeedback.replaceChildren(
            previewTitle,
            previewName,
            previewEmail,
            previewMessage,
            validationNotice
        );
    });
}
// Filter project cards as the visitor types.
const projectSearch = document.getElementById("project-search");
const searchFeedback = document.getElementById("search-feedback");
const projectCards = document.querySelectorAll("#projects .card");

if (projectSearch) {
    function filterProjects() {
        const searchTerm = projectSearch.value.trim().toLowerCase();
        let visibleCount = 0;

        projectCards.forEach(function (card) {
            const projectText = card.textContent.toLowerCase();
            const matches = projectText.includes(searchTerm);

            card.hidden = !matches;

            if (matches) {
                visibleCount++;
            }
        });

        if (visibleCount === 0) {
            searchFeedback.textContent = "No matching projects found.";
        } else {
            searchFeedback.textContent =
                visibleCount + " project(s) found.";
        }
    }

    projectSearch.addEventListener("input", filterProjects);
}
// Switch between light and dark themes.
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");

        const isDark = document.body.classList.contains("dark-theme");

        if (isDark) {
            themeToggle.textContent = "Switch to Light Mode";
        } else {
            themeToggle.textContent = "Switch to Dark Mode";
        }
    });
}
const detailsButtons = document.querySelectorAll(".details-toggle");

detailsButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const details = button.nextElementSibling;
        const isHidden = details.hidden;

        details.hidden = !isHidden;
        button.setAttribute("aria-expanded", String(isHidden));
        button.textContent = isHidden ? "Hide Details" : "Show More Details";
    });
});