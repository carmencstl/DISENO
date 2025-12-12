
let image;

// Cuando cargue la página, guardamos la referencia una sola vez
window.onload = function () {
    image = document.getElementById("reload");
};

window.onscroll = function () {
    scrollRotate();
    console.log(window.scrollY);
    
};
// window.onscroll = () => scrollRotate();


function scrollRotate() {

    image.style.transform = "rotate(" + window.scrollY /10 + "deg)";
    image.style.width = window.scrollY / 4 + "px";
    image.style.height = window.scrollY / 4 + "px";
    console.log("ScrollY", window.scrollY);


}

// const scrollRotate = () => {
//     const image = document.getElementById("reload");
//     const scrollValue = window.scrollY / 4;

//     // Aplicar rotación con límite (360° máximo)
//     image.style.transform = `rotate(${Math.min(scrollValue, 360)}deg)`;

//     // Controlar tamaño mínimo de la imagen para que no sea demasiado pequeña (50px)
//     const newSize = Math.max(scrollValue, 50);
//     image.style.width = `${newSize}px`;
//     image.style.height = `${newSize}px`;
// };