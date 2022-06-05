const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  console.log(email.validity);
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});
