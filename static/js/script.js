let hamburger = document.querySelector("nav .menuToggle input[type='checkbox']");
hamburger.addEventListener("change", (e) => {
    let ul = document.querySelector("nav ul");
    if(hamburger.checked){
        ul.dataset.animation = "enter";
        setDisabledMenu(true);
    }else{
        ul.dataset.animation = "exit";
        setDisabledMenu();
    }
});

const setDisabledMenu = (del=false) => {
    const disable = (e) => {
        e.preventDefault();
    }
    
    let menu = document.querySelectorAll("nav ul a");
    menu.forEach((item) => {
        if(del){
            item.removeEventListener("click", disable);
        }else{
            item.addEventListener("click", disable);
        }
    });
}

let cta = document.querySelector("section button");
cta.addEventListener("click", (e) => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
});