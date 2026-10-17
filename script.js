// Product price
const price = 300;

// Starting quantity
let quantity = 2;

// Selected delivery day
let deliveryDay = "Mon";

// Get HTML elements
const quantityDisplay = document.getElementById("quantity");
const totalDisplay = document.getElementById("total");
const deliveryDisplay = document.getElementById("delivery");
const message = document.getElementById("message");

// Update the order information
function updateOrder() {

    // Calculate the total price
    const total = quantity * price;

    // Display quantity and price
    quantityDisplay.textContent = quantity;
    totalDisplay.textContent = `KSh ${total}`;

    // Display delivery information
    if (quantity >= 2) {
        deliveryDisplay.textContent =
            `Free delivery · ${deliveryDay}`;
    } else {
        deliveryDisplay.textContent =
            `Delivery fee may apply · ${deliveryDay}`;
    }

    // Clear previous messages
    message.textContent = "";
}

// Increase quantity
document.getElementById("plus").addEventListener("click", function () {

    quantity++;

    updateOrder();

});

// Decrease quantity
document.getElementById("minus").addEventListener("click", function () {

    if (quantity > 1) {
        quantity--;
    }

    updateOrder();

});

// Select delivery day
document.querySelectorAll(".day").forEach(function (button) {

    button.addEventListener("click", function () {

        document.querySelectorAll(".day").forEach(function (day) {
            day.classList.remove("active");
        });

        button.classList.add("active");

        deliveryDay = button.textContent;

        updateOrder();

    });

});

// Place order
document.getElementById("place-order").addEventListener("click", function () {

    message.textContent =
        `Order summary: ${quantity} water refills for KSh ${quantity * price}. Delivery day: ${deliveryDay}.`;

});

// Initialize the order
updateOrder();

