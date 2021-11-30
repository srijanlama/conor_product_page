<?php 

require 'vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();
\Stripe\Stripe::setApiKey($_ENV['APP_SECRET']);
$MY_DOMAIN = 'http://localhost:8000';


$checkout_session = \Stripe\Checkout\Session::create([
    'line_items' => [[
        'price' => 'price_1K1RnPLx51tzMMvSC8i6MpbA',
        'quantity' => 1
    ]],
    'mode' => 'payment',
    'success_url' => $MY_DOMAIN . '/success.html',
    'cancel_url' => $MY_DOMAIN . '/cancel.html',
]);
header("Location: " . $checkout_session->url);