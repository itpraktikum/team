"use strict";

// Get started JavaScript

window.addEventListener("DOMContentLoaded", () => {

    // Loader effect

    const loader = document.querySelector(".loader");
    
    setTimeout(() => {
            loader.style.display = "none";
    }, 5000)

    // Header effect javaScript
    window.addEventListener("scroll", () => {
        const header = document.querySelector(".header");
        header.classList.toggle("sticky", window.scrollY > 0)
    });

    // Navbar open -- close 
    
    const navOpenBtn = document.querySelector("#nav-openBtn");
    const navCloseBtn = document.querySelector("#nav-closeBtn");
    const navLink = document.querySelector(".nav_link");

    navOpenBtn.addEventListener("click", () => {
        navLink.style.display = "flex";
    })

    navCloseBtn.addEventListener("click", () => {
        navLink.style.display = "none";
    })

    // Contact_box

    const openBtn = document.querySelector(".btn");
    const closeBtn = document.querySelector("#closeBtn");
    const contactBox = document.querySelector(".contact");

    openBtn.addEventListener("click", () => {
        contactBox.style.display = "flex";
    })

    closeBtn.addEventListener("click", () => {
        contactBox.style.display = "none";
    })

})