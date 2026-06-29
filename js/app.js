const defaultTheme = "pearl";
const menu = document.querySelector(".side_bar")
const menubtn = document.querySelector(".menu_btn")
const close = document.querySelector(".btn_close")


document.documentElement.setAttribute("data-theme", defaultTheme);

menubtn.addEventListener("click", function(){
    menu.classList.add("active")
});

// window.document.addEventListener("click", function(){
//    menu.classList.remove("active") 
// })
close.addEventListener("click", function(){
   menu.classList.remove("active") 
})
