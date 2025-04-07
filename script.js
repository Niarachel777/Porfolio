
/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Designer","Student","Developer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

document.addEventListener("DOMContentLoaded", function () {
  const resumeURL = "https://drive.google.com/file/d/1OcqkNxIVK0n0cYattjrnAlpJOFfpLhZ7/view?usp=sharing"; // Replace with your actual Google Drive file ID

  document.querySelectorAll(".btn").forEach(button => {
      if (button.textContent.includes("Download CV")) {
          button.addEventListener("click", function () {
              const a = document.createElement("a");
              a.href = resumeURL;
              a.download = "Nia_Rachel_Resume.pdf"; // Set the default filename
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
          });
      }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".blue-btn").addEventListener("click", function () {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const links = {
      "uil-instagram": "https://www.instagram.com/niaarachell/",
      "uil-linkedin-alt": "https://www.linkedin.com/in/ch-nia-rachel-712963291/",
      "uil-github-alt": "https://github.com/Niarachel777"
  };

  document.querySelectorAll(".icon i").forEach(icon => {
      const classList = icon.classList;
      for (const key in links) {
          if (classList.contains(key)) {
              icon.closest(".icon").style.cursor = "pointer"; // Make it look clickable
              icon.closest(".icon").addEventListener("click", function () {
                  window.open(links[key], "_blank");
              });
              break;
          }
      }
  });
});

window.onload = function () {
  window.scrollTo(0, 0);
};


window.addEventListener('scroll', scrollActive)
