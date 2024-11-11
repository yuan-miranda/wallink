const orderDetailsArray = JSON.parse(localStorage.getItem('pendingOrders')) || [];

function generatePendingOrders(numberOfOrders, orderDetails) {
    const pendingListContainer = document.querySelector('.checkout-pending-list-container');
    pendingListContainer.innerHTML = '';

    for (let i = 0; i < numberOfOrders; i++) {
        const pendingItem = document.createElement('button');
        pendingItem.classList.add('pending-item');

        const buttonId = `pendingItem-${orderDetails[i].orderNumber}`;
        pendingItem.id = `pendingItem-${orderDetails[i].orderNumber}`;

        let totalPrices = 0;
        for (let j = 0; j < orderDetails[i].orderItems.length; j++) {
            totalPrices += orderDetails[i].orderItems[j].subtotal;
        }

        pendingItem.innerHTML = `
            <h1>Order Number: ${orderDetails[i].orderNumber + 1}</h1>
            <p>Price: PHP ${totalPrices}</p>
            <p>Date: ${orderDetails[i].date} (${orderDetails[i].time})</p>
            <p>Payment: ${orderDetails[i].paymentMethod} - ${orderDetails[i].deliveryOption}</p>
            <p>Status: ${orderDetails[i].status}</p>

        `;
        pendingListContainer.appendChild(pendingItem);
        document.getElementById(buttonId).addEventListener('click', () => {
            localStorage.setItem('selectedOrder', JSON.stringify(orderDetails[i]));
            window.location.href = "../html/CHECKOUTPENDINGDETAILS.html";
        });
    }
}

function homeButtonListener() {
    const checkoutButton = document.getElementById("homeButton");
    checkoutButton.addEventListener("click", () => {
        window.location.href = "../html/store.html";
    });
}

function viewCartButtonListener() {
    const viewCartButton = document.getElementById("viewCartButton");
    viewCartButton.addEventListener("click", () => {
        window.location.href = "../html/cart.html";
    });
}

function pendingOrdersListener() {
    const pendingOrdersButton = document.getElementById("pendingOrdersButton");
    pendingOrdersButton.addEventListener("click", () => {
        window.location.href = "../html/CHECKOUTPENDING.html";
    });
}

document.addEventListener('DOMContentLoaded', () => {
    generatePendingOrders(orderDetailsArray.length, orderDetailsArray);
    homeButtonListener();
    viewCartButtonListener();
    pendingOrdersListener();
});