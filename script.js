const app = () => {
  const burger = document.getElementById("burger");
  const menu = document.querySelector(".header_list");
  console.log(menu.innerHTML);
  burger.addEventListener("click", () => {
    menu.classList.toggle("menu_active");
    burger.classList.toggle("toggle");
  });
};
app();

const handleScroll = (query) => {
  document.getElementById(query).scrollIntoView({ behavior: "smooth" });
};
