const app = () => {
  const burger = document.getElementById("burger");
  const menu = document.querySelector(".header_list");
  const more = document.querySelector(".ver_button");
  const section = document.querySelector(".section_vermas");

  burger.addEventListener("click", () => {
    menu.classList.toggle("menu_active");
    burger.classList.toggle("toggle");
  });

  let flag = false;
  more.addEventListener("click", () => {
    section.classList.toggle("option");
    if (!flag) {
      more.innerHTML = "Ver menos";
    } else {
      more.innerHTML = "Ver más";
    }
    flag = !flag;
  });

  function handleScroll(query) {
    document.getElementById(query).scrollIntoView({ behavior: "smooth" });
  }
};

app();
