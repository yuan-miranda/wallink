function nextButtonListener() {
    const nextButton = document.getElementById("nextButton");
    nextButton.addEventListener("click", () => {
        window.location.href = "../html/CHECKOUTGCASHREFERENCENUMBER.html";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    nextButtonListener();
});