document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("loginBtn");
    const signupLink = document.getElementById("signupLink");
    const loginModal = document.getElementById("loginModal");
    const closeBtns = document.querySelectorAll(".close");
  
    loginBtn.addEventListener("click", function () {
      loginModal.style.display = "block";
    });
  
    signupLink.addEventListener("click", function () {
      loginModal.style.display = "none"; // Close the login modal
      const signupModal = document.getElementById("loginModal").cloneNode(true);
      signupModal.id = "signupModal";
      signupModal.querySelector("h2").textContent = "Sign Up";
      const signupLink = signupModal.querySelector("#signupLink");
      signupLink.parentNode.removeChild(signupLink);
      document.body.appendChild(signupModal);
  
      signupModal.style.display = "block";
    });
  
    closeBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        loginModal.style.display = "none";
      });
    });
  
    window.addEventListener("click", function (event) {
      if (event.target === loginModal) {
        loginModal.style.display = "none";
      }
    });
  });
  