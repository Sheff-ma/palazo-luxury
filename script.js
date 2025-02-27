document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const closeMenu = document.querySelector(".close-menu");

    // Function to open menu
    const openMenu = () => {
        navLinks.classList.add("show");
    };

    // Function to close menu
    const closeNavMenu = () => {
        navLinks.classList.remove("show");
    };

    // Event listeners
    hamburger.addEventListener("click", openMenu);
    closeMenu.addEventListener("click", closeNavMenu);

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            closeNavMenu();
        }
    });
});
