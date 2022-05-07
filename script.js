const app = () => {
  const burger = document.getElementById("burger");
  const menu = document.querySelector(".header_list");
  burger.addEventListener("click", () => {
    menu.classList.toggle("menu_active");
    burger.classList.toggle("toggle");
  });

  const more = document.querySelector(".ver_button");
  const section = document.querySelector(".section_vermas");
  let flag = false;
  console.log(section.innerHTML);
  more.addEventListener("click", () => {
    section.classList.toggle("option");
    flag = !flag;
    if (!flag) {
      more.innerHTML = "Ver menos";
    } else {
      more.innerHTML = "Ver más";
    }
  });
};
app();
new Glider(document.querySelector(".glider"), {
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: ".dots",
  draggable: true,
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },
});

const handleScroll = (query) => {
  document.getElementById(query).scrollIntoView({ behavior: "smooth" });
};
