const body = document.querySelector("body");

// Open and close modal
const modal = document.querySelector(".modal-container");
const openModal = document.querySelector(".question .read-delete .delete");
const closeModal = document.querySelector(".modal form .closeModal");
const formModal = document.querySelector(".modal form");

openModal.addEventListener("click", () => {
  modal.classList.add("show-modal");
  body.classList.add("overlay");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show-modal");
  body.classList.remove("overlay");
});

formModal.onsubmit = (e) => {
  e.preventDefault();
};
