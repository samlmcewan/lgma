let lastScroll = 0;

window.addEventListener('scroll', function() {
    const currentScroll = window.scrollY;
    const loginElement = document.querySelector('.members-login');
    const scrollDown = currentScroll > lastScroll;

    if (currentScroll > 100) {
        // Hide
        loginElement.style.opacity = '0';
        loginElement.style.transform = 'rotate(90deg) translateY(-20px)';
        loginElement.style.pointerEvents = 'none';
    } else {
        // Show
        loginElement.style.opacity = '1';
        loginElement.style.transform = scrollDown
            ? 'rotate(90deg) translateY(0)'
            : 'rotate(90deg)';
        loginElement.style.pointerEvents = 'auto';
    }

    lastScroll = currentScroll;
});