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

    // 1. List of subtext options
    const subtextOptions = [
        "Visualizing consistent coding habits and daily commitment to learning and development.",
        "A daily log of my coding activity, reflecting continuous learning and sustained engagement.",
        "Tracking my active development streak and growth across personal and collaborative projects.",
        "See my dedication in real-time with consistent contributions to the developer community.",
        "Proof of my continuous commitment to mastering new technologies."
    ];

    // Get the element to update
    const subtextElement = document.getElementById('github-subtext');
    let currentIndex = 0; // Start with the first option

    // 2. Function to update the text
    function rotateSubtext() {
        // Update the text content
        subtextElement.textContent = subtextOptions[currentIndex];
        
        // Move to the next index, or loop back to 0
        currentIndex = (currentIndex + 1) % subtextOptions.length;
    }

    // Initialize with the first option immediately
    rotateSubtext();

    // 3. Run the function every 5 seconds (5000 milliseconds)
    // You can adjust this duration
    setInterval(rotateSubtext, 10000); 
