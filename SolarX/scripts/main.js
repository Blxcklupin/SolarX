// Add any functionality, e.g., a click event for "Buy Now" button
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', function() {
        alert('Product added to cart');
    });
});
