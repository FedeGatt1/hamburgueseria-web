document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    document.getElementById("mensaje").innerText = "¡Mensaje enviado correctamente!";
    form.reset();
    form.classList.remove("was-validated");
  });
});