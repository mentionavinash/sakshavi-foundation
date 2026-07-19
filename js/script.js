/* ==========================================
   Sakshavi Foundation
   Main JavaScript File
========================================== */


document.addEventListener("DOMContentLoaded", () => {


    console.log(
        "🌱 Sakshavi Foundation Website Loaded Successfully"
    );



    /* ==========================
       Smooth Scroll
    ========================== */


    const links = document.querySelectorAll('a[href^="#"]');


    links.forEach(link => {


        link.addEventListener("click", function(e){


            const targetID = this.getAttribute("href");


            const target = document.querySelector(targetID);



            if(target){


                e.preventDefault();


                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });


            }


        });


    });





    /* ==========================
       Scroll Reveal Animation
    ========================== */


    const sections = document.querySelectorAll(
        "section, .card, .story-card"
    );



    const observer = new IntersectionObserver((entries)=>{


        entries.forEach(entry=>{


            if(entry.isIntersecting){


                entry.target.classList.add("fade-in");


                observer.unobserve(entry.target);


            }


        });



    },{


        threshold:0.15


    });




    sections.forEach(section=>{


        observer.observe(section);


    });







    /* ==========================
       Active Navigation Highlight
    ========================== */


    let currentPage =
    window.location.pathname.split("/").pop();



    if(currentPage === ""){

        currentPage = "index.html";

    }



    document.querySelectorAll("nav a").forEach(link=>{


        if(link.getAttribute("href") === currentPage){


            link.classList.add("active");


        }


    });







    /* ==========================
       Mobile Menu Support
    ========================== */


    const menuButton =
    document.querySelector(".menu-toggle");


    const navigation =
    document.querySelector("nav ul");



    if(menuButton && navigation){


        menuButton.addEventListener("click",()=>{


            navigation.classList.toggle("show");


        });


    }








    /* ==========================
       Footer Dynamic Year
    ========================== */


    const yearElement =
    document.getElementById("year");



    if(yearElement){


        yearElement.textContent =
        new Date().getFullYear();


    }








    /* ==========================
       Contact Form Preparation
    ========================== */


    const forms =
    document.querySelectorAll("form");



    forms.forEach(form=>{


        form.addEventListener("submit",(e)=>{


            const button =
            form.querySelector("button");



            if(button){


                button.innerHTML =
                "Sending...";


                button.disabled = true;


            }



            /*
            Backend integration can be added here:
            Email service / PHP / Google Forms / API
            */


        });


    });




});
