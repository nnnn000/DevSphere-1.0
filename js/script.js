// Example: show alert when form is submitted
function handleSubmit(event) {
  event.preventDefault();
  alert("Thank you for your message!");
}

const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", handleSubmit);
}