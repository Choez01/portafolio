const d = document,
ls = localStorage,
 w = window;

export default function navScroll(header, button, moon, fa){
    const $scroll = d.querySelector(header),
    $button = d.querySelector(button),
    $moon = d.querySelector(moon),
    $fa = d.querySelector(fa);

    const darks = () =>{
        $scroll.style.setProperty("background-color","#16161a");
        w.addEventListener("scroll",(e) =>{
            let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
    
            return (scrollTop > 60) 
                ? $scroll.style.setProperty("background-color","#000") 
                : $scroll.style.setProperty("background-color","")  
        })
    }

    const light = () =>{
        $scroll.style.setProperty("background-color","#C0C0C0");
        w.addEventListener("scroll",(e) =>{
            let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
    
            return (scrollTop > 60)
                ? $scroll.style.setProperty("background-color","#191e87")
                : $scroll.style.setProperty("background-color","")
        })
    }

    d.addEventListener("DOMContentLoaded",(e)=> {return (ls.getItem("theme")==="dark") ? darks() : light()})
    $button.addEventListener("click",(e)=>{ return (e.target===($moon) || e.target===($fa)) ? darks() : light()})
}