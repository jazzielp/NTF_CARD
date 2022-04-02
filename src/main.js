const img = document.querySelector(".img-container");
const container = document.querySelector(".img-container__view");
const icon = document.querySelector(".img-container__icon");



img.addEventListener("mouseover", e => {
    if(!container.classList.contains("img_container__active")){
        container.classList.add("img_container__active");
    }
    
    if(!icon.classList.contains("img_container__active")){
        icon.classList.add("img_container__active");
    }
    
    
    
});

img.addEventListener("mouseout", e => {
    if(container.classList.contains("img_container__active")){
        container.classList.remove("img_container__active");
    }
    
    if(icon.classList.contains("img_container__active")){
        icon.classList.remove("img_container__active");
    }
});