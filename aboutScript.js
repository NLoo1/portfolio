const projs = document.querySelectorAll(".proj");
console.log(projs);




projs.forEach(div => div.addEventListener('click', isHovered));
// projs.forEach(documentElement => documentElement.addEventListener('hover', alert()));

function isHovered(){
    console.log("Hello");
    console.log(this);
    

}