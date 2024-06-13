function triangulo() {
    event.preventDefault();
    var base = document.getElementById("base").value;
    var altura = document.getElementById("altura").value;
    var area = (base * altura) / 2;
    document.getElementById("resultado").innerHTML = "Resultado: " + area;
}