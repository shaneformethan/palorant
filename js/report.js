document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("bug-report-form").addEventListener("submit", function(event) {
        let isValid = true;

        document.querySelectorAll(".error-message").forEach(msg => {
            msg.style.display = "none";
        });

        const existingCheckboxError = document.querySelector(".checkbox-error");
        if (existingCheckboxError) {
            existingCheckboxError.remove();
        }

        const username = document.getElementById("username");
        if (username.value.trim() === "") {
            const error = document.getElementById("username-error");
            error.textContent = "Username is required.";
            error.style.display = "block";
            isValid = false;
        }

        const email = document.getElementById("email");
        const emailVal = email.value.trim();
        if (emailVal === "") {
            const error = document.getElementById("email-error");
            error.textContent = "Email is required.";
            error.style.display = "block";
            isValid = false;
        } else if (!emailVal.includes("@") || emailVal.indexOf("@") === 0 || emailVal.indexOf("@") !== emailVal.lastIndexOf("@")) {
            const error = document.getElementById("email-error");
            error.textContent = "Email must contain a single '@' and not at the start.";
            error.style.display = "block";
            isValid = false;
        } else {
            const atIndex = emailVal.indexOf("@");
            const dotIndex = emailVal.indexOf(".", atIndex);
            if (dotIndex === -1 || dotIndex === emailVal.length - 1) {
                const error = document.getElementById("email-error");
                error.textContent = "Email must contain a '.' after the '@'.";
                error.style.display = "block";
                isValid = false;
            }
        }

        const server = document.getElementById("server-input");
        if (server.value.trim() === "") {
            const error = document.getElementById("server-error");
            error.textContent = "Please select a server.";
            error.style.display = "block";
            isValid = false;
        }

        const description = document.getElementById("description");
        if (description.value.trim() === "") {
            const error = document.getElementById("description-error");
            error.textContent = "Please describe the bug.";
            error.style.display = "block";
            isValid = false;
        } else if (description.value.trim().length < 10) {
            const error = document.getElementById("description-error");
            error.textContent = "Bug description must be at least 10 characters long.";
            error.style.display = "block";
            isValid = false;
        }

        const followup = document.getElementById("followup");
        if (!followup.checked) {
            const followupError = document.getElementById("followup-error");
            followupError.textContent = "You must agree to receive follow-up emails.";
            followupError.style.display = "block";
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
            const firstVisibleError = document.querySelector(".error-message[style*='block']");
            if (firstVisibleError) {
                const associatedInput = firstVisibleError.previousElementSibling;
                if (associatedInput && associatedInput.focus) {
                    associatedInput.focus();
                }
            }
        }
    });
});