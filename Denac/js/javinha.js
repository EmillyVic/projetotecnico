/// fotos passarem

function slide1(){
document.getElementById("imagem").src = "img/img2.webp" 
setTimeout("slide2()",2000);
}
    
function slide2(){
document.getElementById("imagem").src = "img/imagem4.webp"
setTimeout("slide3()",2000);
}
    
function slide3(){
document.getElementById("imagem").src = "img/img1.webp"
setTimeout("slide4()",2000);
}
    
function slide4(){
document.getElementById("imagem").src = "img/img3.webp"
setTimeout("slide5()",2000);
}

function slide5(){
document.getElementById("imagem").src = "img/img4.webp"
setTimeout("slide1()",2000);
}