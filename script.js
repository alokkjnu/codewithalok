document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Bottom Menu Active State (Basic functionality)
    const mobileBottomLinks = document.querySelectorAll('.mobile-bottom-menu a');
    mobileBottomLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Remove 'active' class from all links
            mobileBottomLinks.forEach(l => l.classList.remove('active'));
            // Add 'active' class to the clicked link
            e.currentTarget.classList.add('active');
        });
    });

    // 2. Hamburger Menu Toggle (for the Mobile Overlay Menu)
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileOverlay = document.querySelector('.mobile-overlay-menu');
    const allOverlayLinks = document.querySelectorAll('.mobile-overlay-menu a');
    const body = document.body;

    function toggleMobileMenu() {
        mobileOverlay.classList.toggle('active');
        // Prevent scrolling when the menu is open
        body.style.overflow = mobileOverlay.classList.contains('active') ? 'hidden' : 'auto';
        // Optional: Change icon from bars to X
        hamburger.querySelector('i').classList.toggle('fa-bars');
        hamburger.querySelector('i').classList.toggle('fa-times');
    }

    // Toggle menu when hamburger button is clicked
    hamburger.addEventListener('click', toggleMobileMenu);

    // Close menu when any link within the overlay is clicked
    allOverlayLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileOverlay.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });
});