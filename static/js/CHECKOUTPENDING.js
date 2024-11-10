const orderDetailsArray = JSON.parse(localStorage.getItem('pendingOrders')) || [];

function generatePendingOrders(numberOfOrders, orderDetails) {
    const pendingListContainer = document.querySelector('.checkout-pending-list-container');
    pendingListContainer.innerHTML = '';

    for (let i = 0; i < numberOfOrders; i++) {
        const pendingItem = document.createElement('div');
        pendingItem.classList.add('pending-item');

        let totalPrices = 0;
        for (let j = 0; j < orderDetails[i].orderItems.length; j++) {
            totalPrices += orderDetails[i].orderItems[j].subtotal;
        }

        pendingItem.innerHTML = `
            <h1>Order Number: ${orderDetails[i].orderNumber + 1}</h1>
            <p>Price: PHP ${totalPrices}</p>
            <p>Date Ordered: ${orderDetails[i].date}</p>
            <p>Status: ${orderDetails[i].status}</p>

        `;
        pendingListContainer.appendChild(pendingItem);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    generatePendingOrders(orderDetailsArray.length, orderDetailsArray);
});