const cart = JSON.parse(localStorage.getItem('cartItems')) || [];

function generateGridItems(numberOfItems, productDetails) {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = '';

    for (let i = 0; i < numberOfItems; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        const inputId = `numberInput-${i}`;
        const buttonId = `addToCartButton-${i}`;

        gridItem.innerHTML = `
            <img src="${productDetails[i].imageSrc}" alt="Product image" class="itemImage">
            <div class="item-info">
                <h3 class="itemName" title="${productDetails[i].name}">${productDetails[i].name}</h3>
                <div class="item-pricing-box">
                    <h2 class="itemPrice">PHP ${productDetails[i].price}</h2>
                    <p class="inStocks">In stocks: ${productDetails[i].stock}</p>
                    <div class="increment-box">
                        <input type="number" class="numberInput" id="${inputId}" value="0" min="0" max="10" step="1">
                    </div>
                </div>
                <button class="addToCartButton" id="${buttonId}">Add</button>
            </div>
        `;
        gridContainer.appendChild(gridItem);
        document.getElementById(buttonId).addEventListener('click', () => {
            const quantity = parseInt(document.getElementById(inputId).value, 10);
            if (quantity > 0) {
                addToCart({
                    inputId: inputId,
                    buttonId: buttonId,
                    name: productDetails[i].name,
                    price: productDetails[i].price,
                    quantity: quantity,
                    subtotal: productDetails[i].price * quantity,
                    stock: productDetails[i].stock,
                    imageSrc: productDetails[i].imageSrc
                });
            } else {
                document.getElementById(inputId).style.border = '1px solid red';
                setTimeout(() => document.getElementById(inputId).style.border = '1px solid #ccc', 2000);
            }
        });
    }
}

function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
        existingItem.quantity += item.quantity;
        existingItem.subtotal += item.subtotal;
    } else {
        cart.push(item);
    }
    localStorage.setItem('cartItems', JSON.stringify(cart));
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
    checkoutButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (cart.length === 0) {
            alert('No items in cart.');
            return;
        }
        window.location.href = "../html/checkout.html";
    });
}

function viewCartButtonListener() {
    const viewCartButton = document.getElementById("viewCartButton");
    viewCartButton.addEventListener("click", () => {
        window.location.href = "../html/cart.html";
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // HARD CODED DATA FOR TESTING
    const productDetails = [
        {
            name: "Iced Coffee",
            price: 200,
            stock: 9,
            imageSrc: "../../media/sampImg.png"
        },
        {
            name: "Iced Tea",
            price: 150,
            stock: 10,
            imageSrc: "../../media/sampImg.png"
        },
        {
            name: "Milk Tea",
            price: 100,
            stock: 10,
            imageSrc: "../../media/sampImg.png"
        },
        {
            name: "Frappe",
            price: 150,
            stock: 10,
            imageSrc: "../../media/sampImg.png"
        },
        {
            name: "Fruit Shake",
            price: 200,
            stock: 10,
            imageSrc: "../../media/sampImg.png"
        },
        {
            name: "Soda",
            price: 50,
            stock: 10,
            imageSrc: "../../media/sampImg.png"
        },
        {
            name: "Water",
            price: 20,
            stock: 10,
            imageSrc: "../../media/sampImg.png"
        },
        {
            name: "Beer",
            price: 100,
            stock: 10,
            imageSrc: "../../media/sampImg.png"
        },
        {
            name: "Wine",
            price: 200,
            stock: 10,
            imageSrc: "../../media/sampImg.png"
        },
        {
            name: "Whiskey",
            price: 300,
            stock: 10,
            imageSrc: "../../media/sampImg.png"
        }
    ]
    generateGridItems(productDetails.length, productDetails);

    // fetchGridItems();

    checkoutButtonListener();
    viewCartButtonListener();
    // localStorage.removeItem('cartItems');
});