document.addEventListener('DOMContentLoaded', () => {
    // Get the modal
    const modal = document.getElementById("contactModal");

    // Get the button that opens the modal
    const btns = document.querySelectorAll(".open-modal-btn");

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btns.forEach(btn => {
        btn.onclick = function (e) {
            e.preventDefault();
            modal.style.display = "block";
        }
    });

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Scroll Spy for Navigation Highlighting
    const sections = document.querySelectorAll("div[id]");
    const navLi = document.querySelectorAll("nav ul li a");
    const scrollContainer = document.querySelector(".left-content"); // Scroll happens here

    if (scrollContainer) {
        scrollContainer.onscroll = () => {
            var current = "";

            // Check scroll position relative to sections
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (scrollContainer.scrollTop >= sectionTop - 150) {
                    current = section.getAttribute("id");
                }
            });

            // If we are at the very top, set active to home
            if (scrollContainer.scrollTop < 100) {
                current = "home";
            }

            navLi.forEach((a) => {
                a.classList.remove("active");
                if (a.getAttribute("href") === "#" + current) {
                    a.classList.add("active");
                }
            });
        };
    }
});
