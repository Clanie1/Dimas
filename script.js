const app = ()=>{
    const burger = document.getElementById("burger"); 
    const menu = document.querySelector(".header_list");
    console.log(menu.innerHTML);
    burger.addEventListener("click", ()=>{
        menu.classList.toggle("menu_abierto");
        burger.classList.toggle("toggle");
    });
}
app();