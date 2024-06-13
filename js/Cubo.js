function cubo() {
    event.preventDefault();
    var aresta = document.getElementById("aresta").value;
    var area = 6 * (aresta ** 2);
    document.getElementById("resultado").innerHTML = "Resultado: " + area;
}