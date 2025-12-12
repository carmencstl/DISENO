window.onscroll = function () {
    scrollRotate();
    console.log(window.scrollY);
};

function scrollRotate() {
    let cubo = document.getElementById("cube");
    cubo.style.transform = "rotateY(" + window.scrollY/4 + "deg) rotateX(" + window.scrollY/4 + "deg)" ;
    /* cubo.style.transform = "rotate3d(1,0.5,0," + window.scrollY/4 + "deg)"; */
   /*  cubo.style.width= window.scrollY + "px"  ;
    cubo.style.height= window.scrollY + "px"  ; */
    console.log(parseInt(window.scrollY));
}