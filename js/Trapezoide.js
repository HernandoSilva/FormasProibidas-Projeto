function trapezoide() {
    event.preventDefault();
    var baseMaior = parseFloat(document.getElementById("baseMaior").value);
    var baseMenor = parseFloat(document.getElementById("baseMenor").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var area = ((baseMaior + baseMenor) * altura) / 2;
    document.getElementById("resultado").innerHTML = "Resultado: " + area;
}