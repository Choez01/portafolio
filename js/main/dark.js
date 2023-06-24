const d = document,
 ls = localStorage;

export default function darkTheme(btn, sun, moon){
    const $themeBtn = d.querySelector(btn);

    const lightMode=()=>{
        d.body.classList.remove("darks");
        $themeBtn.classList.remove("active");
        ls.setItem("theme","light");
    }

    const darkMode=()=>{
        d.body.classList.add("darks");
        $themeBtn.classList.add("active");
        ls.setItem("theme","dark");
    }

    d.addEventListener("click",(e)=>{
        
        if(e.target.matches(`${btn} *`)) {
            if(e.target.matches(`${sun} *`) || (e.target.matches(sun))) {
                lightMode();
            }

            if(e.target.matches(`${moon} *`) || (e.target.matches(moon))) {
                darkMode();
            }
        }
    });


    d.addEventListener("DOMContentLoaded",(e)=>{
        if(ls.getItem("theme")===null)ls.setItem("theme","light");

        if(ls.getItem("theme")==="light")lightMode();

        if(ls.getItem("theme")==="dark")darkMode();
    })
}
