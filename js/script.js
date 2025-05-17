document.addEventListener("DOMContentLoaded", function () 
{
  var form = document.getElementById("signupForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var firstName = document.getElementById("firstName").value;
      var lastName = document.getElementById("lastName").value;
      var email = document.getElementById("email").value;
      var reason = document.getElementById("reason").value;
      var sex = document.querySelector("input[name='sex']:checked").value;

      localStorage.setItem("first", firstName);
      localStorage.setItem("last", lastName);
      localStorage.setItem("email", email);
      localStorage.setItem("reason", reason);
      localStorage.setItem("sex", sex);

      window.location.href = "../subpages/proj_profile_sepe.html";
    });
  }

  if (window.location.href.indexOf("proj_profile_sepe.html") !== -1) {
    var pFirst = document.getElementById("pFirst");
    var pLast = document.getElementById("pLast");
    var pEmail = document.getElementById("pEmail");
    var pSex = document.getElementById("pSex");
    var pReason = document.getElementById("pReason");

    pFirst.textContent = localStorage.getItem("first");
    pLast.textContent = localStorage.getItem("last");
    pEmail.textContent = localStorage.getItem("email");
    pSex.textContent = localStorage.getItem("sex");
    pReason.textContent = localStorage.getItem("reason");
  }
});
