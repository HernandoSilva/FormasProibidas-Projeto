function cuboide() {
    event.preventDefault();
    var largura = document.getElementById("largura").value;
    var comprimento = document.getElementById("comprimento").value;
    var altura = document.getElementById("altura").value;
    var area = 2 * ((comprimento * largura) + (comprimento * altura) + (largura * altura));
    document.getElementById("resultado").innerHTML = "Resultado: " + area;
}