function submitButtonListener() {
    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "checkout-pending.html";
    });
}

document.addEventListener('DOMContentLoaded', () => {
    submitButtonListener();
});