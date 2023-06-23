const d = document,
 w = window;

export default function menu(menu, menuLink){
    d.addEventListener("click",(e) =>{
        if(e.target.matches(menu) || (e.target.matches(`${menu} *`))){
            d.querySelector(menuLink).classList.toggle("active");
            d.querySelector(menu).classList.toggle("is-active");
        }else{
            w.onscroll = () =>{
                d.querySelector(menuLink).classList.remove("active");
                d.querySelector(menu).classList.remove("is-active");
            }
        }
    })
}