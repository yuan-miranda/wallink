function submitButtonListener() {
    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", () => {
        window.location.href = "gcash-reference-number.html";
    });
}

document.addEventListener('DOMContentLoaded', () => {
    submitButtonListener();
});