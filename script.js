const btn = document.querySelector(".share");
const popup = document.querySelector(".popup");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    popup.classList.toggle("opened")
})