function slide1() {
    document.getElementById('foto1').src = "/imagens/download (1).jpg";
    setTimeout("slide2()", 1000);
}

function slide2() {
    document.getElementById('foto1').src = "/imagens/download.jpg";
    setTimeout("slide3()", 1000);
}

function slide3() {
    document.getElementById('foto1').src = "/imagens/painel-gatinhos-frete-gratis-aniversario.jpg";
    setTimeout("slide1()", 1000);
}