function circulo() {
    const pi = 3.1415
    event.preventDefault();
    var raio = document.getElementById("raio").value;
    var area = parseFloat(pi * (raio ** 2));
    document.getElementById("resultado").innerHTML = "Resultado: " + area;
}