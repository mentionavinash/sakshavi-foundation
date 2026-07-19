/* ==========================================
   Sakshavi Foundation
   Main JavaScript File
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Sakshavi Foundation Website Loaded Successfully");

    // ==========================
    // Smooth Scroll
    // ==========================

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    // ==========================
    // Fade In Animation
    // ==========================

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("fade-in");

            }

        });

    }, {

        threshold: 0.2

    });

    document.querySelectorAll("section").forEach(section => {

        observer.observe(section);

    });

    // ==========================
    // Active Navigation Highlight
    // ==========================

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll("nav a").forEach(link => {

        if (link.getAttribute("href") === currentPage) {

            link.classList.add("active");

        }

    });

    // ==========================
    // Footer Year
    // ==========================

    const yearElement = document.getElementById("year");

    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }

});
