/* =====================================================   Resume section tabs and tab contents  ===================================================== */
   const resumeTabs = document.querySelector(".resume_tabs");
   const resumeportfolioTabBtns = resumeTabs.querySelectorAll(".tab_btn");
   const resumeTabContents = document.querySelectorAll(".resume_tab_content");

   var resumeTabNav = function(resumeTabClick){
      resumeTabContents.forEach((resumeTabContents) => {
      resumeTabContents.style.display = "none";
      resumeTabContents.classList.remove("active");
      });

      resumeportfolioTabBtns.forEach((resumeportfolioTabBtn) => {
         resumeportfolioTabBtn.classList.remove("active");
      }); 

      resumeTabContents[resumeTabClick].style.display = "flex";

      setTimeout(() =>{
         resumeTabContents[resumeTabClick].classList.add("active"); 
      }, 100);  

      resumeportfolioTabBtns[resumeTabClick].classList.add("active") ;     
   };

   resumeportfolioTabBtns.forEach((resumeportfolioTabBtn, i) =>{
      resumeportfolioTabBtn.addEventListener("click", () =>{
         resumeTabNav(i);
      });
   });

/* =====================================================   Service modal open/close function   ===================================================== */
   const serviceCardWithModels = document.querySelectorAll(".service_container .card_with_modal");
   
   serviceCardWithModels.forEach((serviceCardWithModel) => {
      const serviceCard = serviceCardWithModel.querySelector(".service_card");
      const serviceBackdrop = serviceCardWithModel.querySelector(".service_modal_backdrop");
      const serviceModal = serviceCardWithModel.querySelector(".service_modal");
      const modalCloseBtn = serviceCardWithModel.querySelector(".modal_close_btn")
 
      serviceCard.addEventListener("click", () => {
         serviceBackdrop.style.display = "flex";

        setTimeout(() => {
           serviceBackdrop.classList.add("active");
        }, 100);

        setTimeout(() => {
         serviceModal.classList.add("active");
        }, 300);
      });
      
      modalCloseBtn.addEventListener("click", () => {
         setTimeout(() => {
            serviceBackdrop.style.display = "none";         
         }, 500);

         setTimeout(() => {         
            serviceBackdrop.classList.remove("active");
            serviceModal.classList.remove("active");
         }, 100);
      });
   });
/* =====================================================   Portfolio modals, tabs and cards   ===================================================== */

// Filter portfolio cards according to portfolio tabs.
   document.addEventListener("DOMContentLoaded", () =>{
      const portfolioTabs = document.querySelector(".portfolio_tabs");
      const portfolioTabBtn = portfolioTabs.querySelectorAll(".tab_btn");
      const cardWithModals = document.querySelectorAll(".portfolio_container .card_with_modal")
   
      portfolioTabBtn.forEach((tabBtn) =>{
         tabBtn.addEventListener("click", () =>{
            const filter = tabBtn.getAttribute("data_filter");

            cardWithModals .forEach((cardWithModal) =>{
               if(filter === "all" || cardWithModal.classList.contains(filter)){
                  cardWithModal.classList.remove("hidden");

                  setTimeout(() =>{
                     cardWithModal.style.opacity = "1";
                     cardWithModal.style.transition = ".5s ease";
                  }, 1);
               }
               else{                  
                  cardWithModal.classList.add("hidden");
                  setTimeout(() =>{
                     cardWithModal.style.opacity = "0";
                     cardWithModal.style.transition = ".5s ease";
                  }, 1);
               }
            });
            portfolioTabBtn.forEach((tabBtn) => tabBtn.classList.remove("active"));
            tabBtn.classList.add("active");
         });
      });   
   });

// Open/Close Portfolio modals.

   const portfolioCardsWidthModals = document.querySelectorAll(".portfolio_container .card_with_modal");

   portfolioCardsWidthModals.forEach((portfolioCardWidthModal) => {
      const portfolioCard = portfolioCardWidthModal.querySelector(".portfolio_card");
      const portfolioModalBackdrop = portfolioCardWidthModal.querySelector(".portfolio_modal_backdrop");
      const portfolioModal = portfolioCardWidthModal.querySelector(".portfolio_modal");
      const modalColoseBtn = portfolioCardWidthModal.querySelector(".modal_colose_btn");

      portfolioCard.addEventListener("click", () =>{
         portfolioModalBackdrop.style.display = "flex";
         
         setTimeout(() =>{
            portfolioModalBackdrop.classList.add("active");
         }, 300);

         setTimeout(() =>{
            portfolioModal.classList.add("active");
         }, 300);
      });

      modalColoseBtn.addEventListener("click", () =>{
         setTimeout(() =>{
            portfolioModalBackdrop.style.display = "none";
         }, 300);
   
         setTimeout(() =>{
            portfolioModalBackdrop.classList.remove("active");
            portfolioModal.classList.remove("active");
         }, 100);
      });      
   });
   
/* ========================================================   Testimonial Swiper  ========================================================== */
   var swiper = new swiper(".my_client_swiper", {
      slidesPerView: 1,
      spaeBetween: 30,
      loop: true,
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev"
      },
   });
/* ========================================   Send/Receive emails from contact form - EmailJS  =============================================== */
   (function() {
      // https://dashboard.emailjs.com/admin/account
      emailjs.init({
      publicKey: "hDjR3XC4VPF_VE1nu",
      });
   })();

   contactFrom = document.getElementById("contact_from");
   contactFormAlart = document.querySelector(".contact_form_alart");

   contactFrom.addEventListener('submit', function(event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm('service_mgpj2b8', 'template_6mo4flb', '#contact_from')
          .then(() => {
            //   console.log('SUCCESS!');
            contactFormAlart.innerHTML = "<span>Your Message Sent Successfully!</span> <i class='ri-checkbox-circle-fill'></i>";
            contactFrom.reset();

            setTimeout(() =>{
               contactFormAlart.innerHTML = "";
            }, 3000)

          }, (error) => {
            //   console.log('FAILED...', error);
            contactFormAlart.innerHTML = "<span>Message Not Sent!</span> <i class='ri-error-warning-fill'></i>";
            contactFormAlart.title = error;
          });
      });

/* =====================================================
   Shrink the height of the header on scroll
===================================================== */

window.addEventListener("scroll", () => {
   const headers = document.querySelector(".rana_p_fo_header");

   headers.classList.toggle("shrink", window.scrollY > 0)
});

/* =====================================================
   Bottom navigation menu
===================================================== */

// Each bottom navigation menu items active on page scroll.

window.addEventListener("scroll", () => {
   let navMenuSecition = document.querySelectorAll(".nav_menu_section");
   let scrollY = window.pageYOffset;


   navMenuSecition.forEach((navSection) => {
      let sectionHeight = navSection.offsetHeight;
      let sectionTop = navSection.offsetTop - 50;
      let ids = navSection.getAttribute("id");

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
         document.querySelector(".bottom_nav .menu li a[href*=" + ids + "]").classList.add("current");
      }else{
         document.querySelector(".bottom_nav .menu li a[href*=" + ids + "]").classList.remove("current");
      }
   });
});

// Javascript to show bottom navigation menu on home(page load).

window.addEventListener("DOMContentLoaded", () => {
   const bottomNav = document.querySelector(".bottom_nav");
   
   bottomNav.classList.toggle("active", window.scrollY < 10)
});

// Javascript to show/hide bottom navigation menu on home(scroll).

const bottomNav = document.querySelector(".bottom_nav");
const menuHideBtn = document.querySelector(".menu_hide_btn");
const menuShowBtn = document.querySelector(".menu_show_btn");
var navTimeout;

window.addEventListener("scroll", () => {
   bottomNav.classList.add("active");
   menuShowBtn.classList.remove("active");


   if(window.scrollY < 10){
      menuHideBtn.classList.remove("active");

      function scrollStopped(){
         bottomNav.classList.add("active")
      }

      clearTimeout(navTimeout);
      navTimeout = setTimeout(scrollStopped, 2500);
   }

   if(window.scrollY > 10){      
      menuHideBtn.classList.add("active");

      function scrollStopped(){
         bottomNav.classList.remove("active");
         menuShowBtn.classList.add("active");
      }

      clearTimeout(navTimeout);
      navTimeout = setTimeout(scrollStopped, 2500);
   }
});

   // Hide bottom navigation menu on click menu-hide-btn.
menuHideBtn.addEventListener("click", () => {
      bottomNav.classList.toggle("active");
      menuHideBtn.classList.toggle("active");
      menuShowBtn.classList.toggle("active");
});
// Show bottom navigation menu on click menu-show-btn.
menuShowBtn.addEventListener("click", () => {
   bottomNav.classList.toggle("active");
   menuHideBtn.classList.add("active");
   menuShowBtn.classList.toggle("active");
});

/* =====================================================
   To-top-button with scroll indicator bar
===================================================== */

   window.addEventListener("scroll", () =>{
      const toTopBTN = document.querySelector(".to_top_btn");
      toTopBTN.classList.toggle("active"), window.scrollY > 0;


      const scrollIndicatorBar = document.querySelector(".scroll_indicator_bar");
      const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      const scrollValue = (pageScroll / height) * 100;

      scrollIndicatorBar.style.height = scrollValue + "%";
   });

/* =====================================================
   Customized cursor on mousemove
===================================================== */
   const cursor = document.querySelector(".cursor");
   const cursorDot = document.querySelector(".cursor_dot");
   const cursorCirle = document.querySelector(".cursor_circle");

  document.addEventListener("mousemove", (e) => {
   let x = e.clientX;
   let y = e.clientY;


  cursorDot.style.top = y + "px";
  cursorDot.style.left = x + "px";
  cursorCirle.style.top = y + "px";
  cursorCirle.style.left = x + "px";
  });

  const cursorHoverLinks = document.querySelectorAll("body a, .theme_btn, .rana_p_fo_main_btn, .portfolio_card, .swiper-button-next, .swiper-button-prev, .swiper-pagination, .service_card, .contact_social_links li, #contact_from, .submit_btn, .menu_show_btn, .menu_hide_btn");

  cursorHoverLinks.forEach((cursorHoverLink) => {
   cursorHoverLink.addEventListener("mouseover", () =>{
      cursorDot.classList.add("large");
      cursorCirle.style.display = "none";
   });
  });

  cursorHoverLinks.forEach((cursorHoverLink) => {
   cursorHoverLink.addEventListener("mouseout", () =>{
      cursorDot.classList.remove("large");
      cursorCirle.style.display = "block";
   });
  });
  
// Cursor effects on hover website elements.

/* =====================================================
   Website dark/light theme
===================================================== */

// Change theme and save current theme on click the theme button.

   const themeBtn = document.querySelector(".theme_btn");

   themeBtn.addEventListener("click", () => {
      themeBtn.classList.toggle("active_sun_icon");
      document.body.classList.toggle("light_theme");
      const getCurrentIcon = () => themeBtn.classList.contains("active_sun_icon") ? "sun" : "moon";
      const getCurrentTheme = () => document.body.classList.contains("light_theme") ? "light" : "dark";
      localStorage.setItem("saved_icon", getCurrentIcon());
      localStorage.setItem("saved_theme", getCurrentTheme());
   });


// // Get saved theme icon and theme on document loaded.

const savedIcon = localStorage.getItem("saved_icon");
const savedTheme = localStorage.getItem("saved_theme");

document.addEventListener("DOMContentLoaded", () => {
   themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("active_sun_icon");
   document.body.classList[savedTheme === "light" ? "add" : "remove"]("light_theme");
});

/* =====================================================
   ScrollReveal JS animations
===================================================== */

// Common reveal options to create reveal animations.
   ScrollReveal({
      // reset: true,
      distance: '60px',
      duration: 2500,
      delay: 400,
   });

// Target elements and specify options to create reveal animations.
   ScrollReveal().reveal('.avatar_img', { delay: 100, origin: 'top'});
   ScrollReveal().reveal('.avatar_info, .section_title', { delay: 300, origin: 'bottom'});
   ScrollReveal().reveal('.home_social', { delay: 300, origin: 'left'});
   ScrollReveal().reveal('.home_scroll_btn', { delay: 300, origin: 'right'});
   ScrollReveal().reveal('.about_img', { delay: 300, origin: 'top'});
   ScrollReveal().reveal('.about_info, .footer .rana_p_fo_logo' , { delay: 300, origin: 'bottom'});
   ScrollReveal().reveal('.pro_card, .about_buttons .rana_p_fo_main_btn, .resume_tabs, .tab_btn, .portfolio_tabs' , { delay: 300, origin: 'right', interval: 200});
   ScrollReveal().reveal('#resume, .section_content', { delay: 300, origin: 'bottom'});
   ScrollReveal().reveal('.service_card, .portfolio_card, .contact_item, .contact_social_links li, .footer_menu .menu_item', { delay: 300, origin: 'bottom', interval: 300});
   ScrollReveal().reveal('.my_client_swiper, .contact_form' , { delay: 300, origin: 'right'});
   ScrollReveal().reveal('.contact_info h3, .copy_right', { delay: 100, origin: 'bottom', interval: 300});

