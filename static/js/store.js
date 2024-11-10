function generateGridItems(numberOfItems, productDetails) {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = '';

    for (let i = 0; i < numberOfItems; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        gridItem.innerHTML = `
            <img src="${productDetails.imageSrc}" alt="Product image" class="itemImage">
            <div class="item-info">
                <h3 class="itemName" title="${productDetails.name}">${productDetails.name}</h3>
                <div class="item-pricing-box">
                    <h2 class="itemPrice">PHP ${productDetails.price}</h2>
                    <p class="inStocks">In stocks: ${productDetails.stock}</p>
                    <div class="increment-box">
                        <input type="number" class="numberInput" value="0" min="0" max="10" step="1">
                    </div>
                </div>
                <button class="addToCartButton">Add</button>
            </div>
        `;

        gridContainer.appendChild(gridItem);
    }
}

async function fetchGridItems() {
    try {
        const response = await fetch("/api/products", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        
        const data = await response.json();
        switch (response.status) {
            case 200:
                generateGridItems(data.length, data);
                break;
            default:
                alert("Something went wrong");
                break;
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

function checkoutButtonListener() {
    const checkoutButton = document.getElementById("checkoutButton");
    checkoutButton.addEventListener("click", () => {
        window.location.href = "../html/checkout.html";
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // fetchGridItems();
    checkoutButtonListener();

    // Hardcoded data for testing
    const productDetails = {
        name: "Lorem Ipsum",
        price: 100,
        stock: 10,
        imageSrc: "../../media/sampImg.png"
    };
    generateGridItems(10, productDetails);
});