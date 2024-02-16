const navbar = document.querySelector(".header .navbar");
const menubtn = document.querySelector(".header .menu");

menubtn.addEventListener("click", () => {
  navbar.classList.toggle("show");
});
document.onscroll = () => {
  navbar.classList.remove("show");
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};
document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};
