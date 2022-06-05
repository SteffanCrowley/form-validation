// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form = document.getElementsByTagName("form")[0];

const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

const zip = document.getElementById("zip");
const zipError = document.querySelector("#zip + span.error");

checkItem(email, emailError);
checkItem(zip, zipError);

function checkItem(item, itemError) {
  item.addEventListener("input", function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.

    if (item.validity.valid) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      itemError.textContent = ""; // Reset the content of the message
      itemError.className = "error"; // Reset the visual state of the message
    } else {
      // If there is still an error, show the correct error
      showError();
    }
  });

  form.addEventListener("submit", function (event) {
    // if the email field is valid, we let the form submit

    if (!item.validity.valid) {
      // If it isn't, we display an appropriate error message
      showError();
      // Then we prevent the form from being sent by canceling the event
      event.preventDefault();
    }
  });

  function showError() {
    if (item.validity.valueMissing) {
      // If the field is empty,
      // display the following error message.
      itemError.textContent = "You need to enter an e-mail address.";
    } else if (item.validity.typeMismatch) {
      // If the field doesn't contain an email address,
      // display the following error message.
      itemError.textContent = "Entered value needs to be an e-mail address.";
    } else if (item.validity.tooShort) {
      // If the data is too short,
      // display the following error message.
      itemError.textContent = `${item.id} should be at least ${item.minLength} characters; you entered ${item.value.length}.`;
    }

    // Set the styling appropriately
    itemError.className = "error active";
  }
}
