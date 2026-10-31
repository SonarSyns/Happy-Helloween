
const popup = document.getElementById("spell");
const openPopupButton = document.getElementById("toggle-card");
const closePopupButton = document.getElementById("close-popup");

openPopupButton.addEventListener("click", () => {
  popup.classList.add("show");
});

closePopupButton.addEventListener("click", () => {
  popup.classList.remove("show");
});

popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.classList.remove("show");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    popup.classList.remove("show");
  }
});
