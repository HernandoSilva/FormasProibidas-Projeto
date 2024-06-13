function poligono() {
    event.preventDefault();

    // Obter os valores dos inputs
    var N = parseFloat(document.getElementById("lados").value);
    var s = parseFloat(document.getElementById("comprimento").value);
    var a = parseFloat(document.getElementById("apotema").value);

    // Verificar se os valores são válidos
    if (isNaN(N) || isNaN(s) || isNaN(a) || N <= 2) {
        alert("Por favor, insira valores válidos para N (maior que 2), s e a.");
        return;
    }

    // Calcular a área do polígono regular
    var area = (N * s * a) / 2;

    // Exibir o resultado
    document.getElementById("resultado").innerHTML = "Área do polígono regular: " + area.toFixed(2);
}