const d = document;

export default function navObserve(){
    const $section = d.querySelectorAll("section[data-scroll]");
    const cb = (entries)=>{
        entries.forEach((entry)=>{
            const id = entry.target.getAttribute("id");
            return (entry.isIntersecting)
                ? d.querySelector(`a[data-scroll][href="#${id}"]`).classList.add("highlight")
                : d.querySelector(`a[data-scroll][href="#${id}"]`).classList.remove("highlight")
        })
    }

    const observer = new IntersectionObserver(cb,{
        threshold: [0.5,0.75]
    });

    $section.forEach(el=>observer.observe(el));
}