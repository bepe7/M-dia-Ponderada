function calcularMedia() {
    const nome = document.getElementById("nome").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);

    if (!nome || isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        document.getElementById("resultado").innerText = "Por favor, preencha todos os campos.";
        return;
    }

    const mediaPonderada = (nota1 + (nota2 * 2) + (nota3 * 3) + (nota4 * 4)) / (2 + 3 + 4);
    const situacao = mediaPonderada >= 6 ? "Aprovado" : "Reprovado";

    document.getElementById("resultado").innerText = `${nome}, sua média ponderada é ${mediaPonderada.toFixed(2)}. Situação: ${situacao}.`;
}
