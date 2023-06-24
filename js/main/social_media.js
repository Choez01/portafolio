export default function social(instagram,twitter,linkedin,github){
    const d = document,
     w = window;

    d.addEventListener("click",(e)=>{
        if(e.target.matches(instagram)){
            w.open("https://www.instagram.com/choez_angel062");
        }

        if(e.target.matches(twitter)){
            w.open("https://twitter.com/StevenChoez10");
        }

        if(e.target.matches(linkedin)){
            w.open("https://www.linkedin.com/in/angel-choez-franco/");
        }

        if(e.target.matches(github)){
            w.open("https://github.com/Choez01/");
        }
    })
}