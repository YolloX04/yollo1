const envelopes = document.querySelectorAll(".envelope");

envelopes.forEach((envelope) => {
  envelope.addEventListener("click", () => {
    envelope.classList.toggle("opened");
  });
});