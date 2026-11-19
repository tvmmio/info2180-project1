document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.getElementById("email");
    const message = document.querySelector(".message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();

        if (email === "" || !emailInput.checkValidity()) {
            message.textContent = "Please enter a valid email address.";
            return;
        }

        message.textContent = "Thank you! Your email address " + email + " has been added to our mailing list!";
        form.reset();
    });
});
