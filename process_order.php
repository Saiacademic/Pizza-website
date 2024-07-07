<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $paymentMethod = $_POST['payment-method'];

    // Depending on payment method, collect relevant details
    if ($paymentMethod === 'credit-card' || $paymentMethod === 'debit-card') {
        $cardHolderName = $_POST['card-holder-name'];
        $cardNumber = $_POST['card-number'];
        $expiryMonth = $_POST['expiry-month'];
        $expiryYear = $_POST['expiry-year'];
        $cvv = $_POST['cvv'];
    }

    // Receipt delivery details
    $receiptDelivery = $_POST['receipt-delivery'];
    if ($receiptDelivery === 'email') {
        $emailAddress = $_POST['email-address'];
    } elseif ($receiptDelivery === 'delivery') {
        $deliveryAddress = $_POST['delivery-address'];
    }

    // Here you can process the order, save to database, send emails, etc.
    // For this example, we'll just print the received data

    // Print the received data (you can replace this with your database logic)
    echo "<h2>Checkout Summary</h2>";
    echo "<p><strong>Payment Method:</strong> $paymentMethod</p>";

    if ($paymentMethod === 'credit-card' || $paymentMethod === 'debit-card') {
        echo "<p><strong>Card Holder Name:</strong> $cardHolderName</p>";
        echo "<p><strong>Card Number:</strong> $cardNumber</p>";
        echo "<p><strong>Expiry Date:</strong> $expiryMonth/$expiryYear</p>";
        echo "<p><strong>CVV:</strong> $cvv</p>";
    }

    echo "<h3>Receipt Delivery</h3>";
    if ($receiptDelivery === 'email') {
        echo "<p><strong>Receipt Delivery Method:</strong> Email</p>";
        echo "<p><strong>Email Address:</strong> $emailAddress</p>";
    } elseif ($receiptDelivery === 'delivery') {
        echo "<p><strong>Receipt Delivery Method:</strong> Delivery</p>";
        echo "<p><strong>Delivery Address:</strong> $deliveryAddress</p>";
    }
} else {
    // Redirect to checkout page if accessed directly without POST data
    header('Location: checkout.html');
    exit;
}
?>
