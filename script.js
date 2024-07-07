// JavaScript for dynamic functionality
document.addEventListener('DOMContentLoaded', function () {
    const orderBtn = document.getElementById('order-btn');
    const checkoutBtn = document.getElementById('checkout-btn');
    const menuSection = document.getElementById('menu');
    const checkoutSection = document.getElementById('checkout');
    const addBtns = document.querySelectorAll('.add-btn');
    const cartItems = document.getElementById('cart-items');
    const cart = [];

    // Show menu section and hide others on order button click
    orderBtn.addEventListener('click', function () {
        menuSection.classList.remove('hidden');
        scrollToTop();
    });

    // Add item to cart on add button click
    addBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const item = this.parentElement.parentElement.dataset;
            cart.push(item);
            updateCart();
            checkoutBtn.classList.remove('hidden');
        });
    });

    // Update cart and display items
    function updateCart() {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(li);
        });
    }

    // Show checkout section on checkout button click
    checkoutBtn.addEventListener('click', function () {
        checkoutSection.classList.remove('hidden');
        scrollToTop();
    });

    // Handle form submission
    const orderForm = document.getElementById('order-form');
    orderForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked');
        const selectedReceiptDelivery = document.querySelector('input[name="receipt-delivery"]:checked');

        if (!selectedPaymentMethod || !selectedReceiptDelivery) {
            alert("Please select payment method and receipt delivery option.");
            return;
        }

        const paymentMethod = selectedPaymentMethod.value;
        const receiptDelivery = selectedReceiptDelivery.value;

        // Simulate order submission (replace with actual backend processing)
        console.log("Order Details:");
        console.log("Items:", cart);
        console.log("Payment Method:", paymentMethod);
        console.log("Receipt Delivery:", receiptDelivery);

        // Reset cart and form after submission
        cart.length = 0;
        updateCart();
        orderForm.reset();
        checkoutSection.classList.add('hidden');
        checkoutBtn.classList.add('hidden');
        scrollToTop();
        alert("Order placed successfully!");
    });

    // Utility function to scroll to the top of the page
    function scrollToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
});
