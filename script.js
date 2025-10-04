document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const siteNav = document.getElementById("site-nav");

  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("show");
  });
  
  const commonBtn = document.getElementById("common-button");
  if (commonBtn) {
    commonBtn.addEventListener("click", function() {
      alert("này này, bị lừa rồi nhé  !!! 😜😜😜");
    });
  } else {
    console.warn('common-button not found on this page.');
  }

  const contactBtn = document.getElementById("contact-button");
  if (contactBtn) {
    contactBtn.addEventListener("click", function() {
      alert("này này, bấm làm cái gì !!! 🚀✨🎉 aaa");
    });
  } else {
    console.warn('contact-button not found on this page.');
  }

});
