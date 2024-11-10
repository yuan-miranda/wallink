function storeButtonListener() {
    const button = document.getElementById("storeButton");
    button.addEventListener("click", () => {
        window.location.href = "../html/store.html";
    });
}
document.addEventListener("DOMContentLoaded", () => {
    storeButtonListener();
});