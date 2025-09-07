document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const siteNav = document.getElementById("site-nav");

  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("show");
  });
  
  document.getElementById("common-button").addEventListener("click", function() {
    alert("này này, bị lừa rồi nhé  !!! 😜😜😜");
  });

  document.getElementById("contact-button").addEventListener("click", function() {
    alert("này này, bấm làm cái gì !!! 🚀✨🎉");
  });

});
