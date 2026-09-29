const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("motionhub-theme");
if (savedTheme === "light") document.body.classList.add("light");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("motionhub-theme",
    document.body.classList.contains("light") ? "light" : "dark");
});
