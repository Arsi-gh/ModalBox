let section = document.getElementById("section");
let openBox = document.getElementById("openBox");
let modalBox = document.getElementById("modalBox");
let closeBox = document.getElementById("closeBox");

openBox.addEventListener("click", function () {
  section.style.display = "none";
  modalBox.style.display = "block";
});
closeBox.addEventListener("click", function () {
  modalBox.style.display = "none";
  section.style.display = "flex";
});
document.body.addEventListener("keyup", function (event) {
  if ((event.key = "Escape")) {
    modalBox.style.display = "none";
    section.style.display = "flex";
  }
});
