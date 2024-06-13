function retangulo() {
    event.preventDefault();
    var lado1 = document.getElementById("lado1").value;
    var lado2 = document.getElementById("lado2").value;
    var area = lado1 * lado2;
    document.getElementById("resultado").innerHTML = "Resultado: " + area;
}