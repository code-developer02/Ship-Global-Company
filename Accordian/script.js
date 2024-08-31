// script.js
document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            const maxHeight = content.style.maxHeight;

            // Close all other accordion contents
            document.querySelectorAll(".accordion-content").forEach(content => {
                content.style.maxHeight = null;
            });

            document.querySelectorAll(".accordion-header").forEach(header => {
                header.classList.remove("active");
            });

            if (maxHeight) {
                // Close the current content
                content.style.maxHeight = null;
            } else {
                // Open the current content
                content.style.maxHeight = content.scrollHeight + "px";
                header.classList.add("active");
            }
        });
    });
});
