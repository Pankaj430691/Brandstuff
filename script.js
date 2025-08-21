document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const nav = document.querySelector('.nav');

    mobileMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});

// Function for "Order Now" button alert
function showOrderAlert(productName) {
    alert(`Thank you for your interest in ${productName}!\n\nTo place an order, please contact us via the details on our Contact page.`);
}

