function romboedro() {
    event.preventDefault();
    var diagonal1 = document.getElementById("diagonal1").value;
    var diagonal2 = document.getElementById("diagonal2").value;
    var areaFace = (diagonal1 * diagonal2) / 2;
    var area = 6 * areaFace;
    document.getElementById("resultado").innerHTML = "Resultado: " + area;
}