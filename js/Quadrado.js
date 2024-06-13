function quadrado() {
    event.preventDefault();
    var lado = document.getElementById("lado").value;
    var area = lado * lado;
    document.getElementById("resultado").innerHTML = "Resultado: " + area;
}